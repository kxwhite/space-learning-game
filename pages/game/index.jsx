import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import BackGround from "../../components/game/sprites/background";
import Sprite from "../../components/game/sprites/sprite";
import Enemy from "../../components/game/sprites/enemy";
import Effect from "../../components/game/sprites/effect"
import PickUp from "../../components/game/sprites/pickup";
import Menu from "../../components/game/sprites/menu"
import Vector from "../../components/game/util/vector";
import VectorPi from "../../components/game/util/vector_pi";
import Animator from "../../components/game/util/animator";
import { hasCollided } from "../../components/game/util/physics";
import { scaleToScreen, spriteSheetLoader } from "../../components/game/util/display"
import QuizModal from "../../components/game/QuizModal"
import { useContext } from "react";
import { NavData } from "../../context/nav_context";

/*
ToDo:
    3. Sprite sheet:
        a. animated sprites
            ii. one off animation, e.g. something blowing up.
    4. Timer needs to adjust for lag, calculate update based on time passed between frames.
    5. Image rotation.
*/

const Game = () => {
    const router = useRouter();

    const [showQuestion, setShowQuestion] = useState(false)
    //const [questionIndex, setQuestionIndex] = useState(0);
    const questionIndex = useRef(-1)
    const allowKeyPress = useRef(true)
    const { header, setHeader } = useContext(NavData);

    let spriteSheet;
    let backGround;
    let pauseMenu;

    let interval;
    let gameState;

    let ctx;
    const canvas = useRef("");
    let frameRate;
    let canvasDimensions = { width: 1000, height: 700 };
    let screenHeight = 0;

    let container = new Set();
    let backGroundSprite;
    let rocket;
    let explosion;
    let menu;
    let pause;

    const noShipsBody = "You have been hit too many times. Your ship has been destroyed. Avoid asteroids by dodging them.";

    //init game
    useEffect(() => {

        setHeader("Planet SAP")

        spriteSheet = spriteSheetLoader("/game_assets/spritesheet.png");
        backGround = spriteSheetLoader("/game_assets/bg.png");
        pauseMenu = spriteSheetLoader("/game_assets/pause_menu.png")

        //get a reference to the canvas.
        ctx = canvas.current.getContext('2d');

        //create sprites
        rocket = new Sprite(ctx, spriteSheet,
            0, 0, 300, 200,
            300, 300, 150, 100,
            new Vector(0, 0),
            new Animator(10, 0, 600, true), "r");
        //create explosion animation and set its location outside the viewable area.
        explosion = new Effect(ctx, spriteSheet,
            0, 600, 200, 200,
            600, 0, 200, 200,
            new Animator(5, 0, 1200, false), "x")

        menu = new Menu(ctx, spriteSheet,
            320, 200, 60, 50,
            800, 0, 30, 25)

        pause = new Menu(ctx, pauseMenu,
            0, 0, 600, 600,
            200, 50, 600, 600)

        //number of enemies
        for (let i = 1; i <= 5; i++) {
            container.add(
                new Enemy(ctx, spriteSheet,
                    0, 400, 160, 200,
                    Math.random() * 900,-100 +  (-1 * (Math.random() * 900)), 80, 100,
                    new VectorPi(3, Math.random() * 1000, 800),
                    new Animator(5, 0, 1120, true), "e")
            )
        }
        //number of pick ups
        for (let i = 1; i <= 5; i++) {
            container.add(
                new PickUp(ctx, spriteSheet,
                    220, 200, 80, 80,
                    1200 * i, Math.random() * 760, 40, 40,
                    -2, 0,
                    new Animator(5, 0, 450, false), "q")
            )
        }
        backGroundSprite = new BackGround(ctx, backGround,
            0, -3, 0, canvasDimensions.width);

        //start game timer
        frameRate = 1000 / 60;
        gameState = false;
        interval = setInterval(main, frameRate);

        window.addEventListener('keydown', (e) => {
            if (allowKeyPress.current == false) {
                //prevent input during question prompt.
            }
            else if (e.key == "ArrowDown") {
                rocket.vector.yVelocity += 1;
            } else if (e.key == "ArrowUp") {
                rocket.vector.yVelocity -= 1;
            } else if (e.key == "ArrowLeft") {
                rocket.vector.xVelocity -= 1;
            } else if (e.key == "ArrowRight") {
                rocket.vector.xVelocity += 1;
            }
            if (allowKeyPress.current) {
                //any key start game, if not in question modal

                //from confrats scaling error fix
                if (screenHeight != window.innerHeight) {
                    screenHeight = window.innerHeight;
                    const topOffset = Math.round(canvas.current.getBoundingClientRect().top)
                    scaleToScreen(ctx, topOffset)
                }
                startGame()
            }
        });
        canvas.current.addEventListener('click', (e) => {
            handleClick(e);
        });

        

        //clean up when component unmounts.
        return function cleanup() {
            canvas.current?.removeEventListener('click', (e) => { handleClick(e) })
            window.removeEventListener('keydown', () => { });

            clearInt();
            setHeader("")
        }
    }, [])

    function main() {

        //scale game if window is resized vertically.
        if (screenHeight != window.innerHeight) {
            screenHeight = window.innerHeight;
            const topOffset = Math.round(canvas.current.getBoundingClientRect().top)
            scaleToScreen(ctx, topOffset)
        }

        if (gameState && rocket.hitPoints > 0) {
            backGroundSprite.draw()
            backGroundSprite.update()
            menu.draw(rocket.hitPoints, menu.dWidth + 5)

            rocket.update();
            rocket.draw();

            explosion.update();
            explosion.draw();

            container.forEach((entity) => {
                entity.update();
                entity.draw();
                if (hasCollided(rocket, entity, 3)) {
                    //allow another collision with meteor only if not recovering
                    if (entity.type === "e" && rocket.state !== "recovering") {
                        rocket.state = "hit";
                        //shows the explosion animation at the point of impact.
                        explosion.setLocation(entity)
                        entity.reset();
                    } else if (entity.type === "h") {
                        // collided with a hint
                        container.delete(entity);
                        rocket.state = "h";
                        pauseGame()

                    } else if (entity.type === "q") {
                        // collided with a question
                        container.delete(entity);
                        rocket.state = "q";
                        pauseGame()
                        allowKeyPress.current = false
                        setShowQuestion(true)
                        questionIndex.current = questionIndex.current + 1
                    }
                }
            })
        } else if (rocket.hitPoints < 1) {//when the player runs out of lifes
            backGroundSprite.draw()
            rocket.draw()
            menu.draw(rocket.hitPoints, menu.dWidth + 5)

            router.push({
              pathname: "/gameover",
              query: {
                noShipsBody
              },
            }, { shallow: true });


        }else if(!gameState){//what to draw when game is paused
            backGroundSprite.draw()
            rocket.draw()
            container.forEach((entity) => { entity.draw() })
            menu.draw(rocket.hitPoints, menu.dWidth + 5)
            pause.draw(1, 0);
        }
    }

    function clearInt() {
        clearInterval(interval)
    }

    function pauseGame() {
        gameState = false;
    }

    function startGame() {
        gameState = true;
        console.log(interval)
        setShowQuestion(false)
        allowKeyPress.current = true
    }

    //get mouse click coordinates
    const handleClick = (e) => {
        startGame();
    }


    return (
        <>
            {/* <h1 className="d-flex justify-content-center">Space Shooter</h1> */}
            <div style={{ backgroundColor: "black" }}>
                <div className="d-flex justify-content-center">
                    <canvas
                        id="myCanvas"
                        width={canvasDimensions.width}
                        height={canvasDimensions.height}
                        ref={canvas}
                        alt="A space shooter learning game"
                    >
                        Your browser does not support the HTML canvas tag.
                    </canvas>
                </div>
            </div>

            <div>
                <QuizModal showQuestion={showQuestion} startGame={startGame} questions={questions} questionIndex={questionIndex.current} />
            </div>

        </>
    )
}

let questions = [
    {
        number: 1,
        text: "What is SAP?",
        options: [
            "Services Applications and Products",
            "Systems Applications and Products",
            "Systems Applications and Processes",
            "Services Applications and Processes"
        ],
        correctAnswer: 1
    },
    {
        number: 2,
        text: "Which business unit does SAP belongs to?",
        options: [
            "DX",
            "DNA",
            "EAS",
            "IVS"
        ],
        correctAnswer: 2
    },
    {
        number: 3,
        text: "What is the primary programming language to create a SAP application?",
        options: [
            "Java",
            "C#",
            "C++",
            "ABAP"
        ],
        correctAnswer: 3
    },
    {
        number: 4,
        text: "What is SAP Fiori?",
        options: [
            "SAP's database",
            "SAP's user experience",
            "SAP's ERP Module"
        ],
        correctAnswer: 1
    },
    {
        number: 5,
        text: "What is SAP's in memory database?",
        options: [
            "SAP Hana",
            "SAP Fiori",
            "SAP Oracle",
            "SAP SoH"
        ],
        correctAnswer: 0
    }
]

export default Game;
