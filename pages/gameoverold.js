import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import wastedImg from "../public/gameover_assets/wasted.png";
import rocket from '../public/gameover_assets/gameover-rocket.png'
import explosion from "../public/gameover_assets/gameover-explosion.png";
import spaceman from "../public/gameover_assets/gameover-astronaut.png";

export default function GameOver() {
  const router = useRouter();

  const {
    query: {score, questionsLength},
  } = router;

  const props = {
    score,
    questionsLength,
  };

  const handleClick = (e) => {
    e = e.target.value;
    e === "retry" ? router.push("/game") : router.push("/planetpage");
  };

  return (
    <React.Fragment>
      <div className="gameover-page--container">
          <Image src={wastedImg} alt="Wasted GTA Title" className='gameover-page--title' width={357} height={95}/>
          <p className='gameover-page--text'>
            You have made too many mistakes when upgrading your ship.
            You need to answer 4 out of 5 questions to be successful. <br/> Use hints when in doubt.
          </p>
          {/* <h3 className='gameover-page--score'>Score: {props.score} out of {props.questionsLength}</h3> */}
          <h3 className='gameover-page--score'>Score: 2 out of 5</h3>
          <div className='gameover-page--buttons'>
            <button onClick={handleClick} value="retry" className='gameover-page--button'>Retry Quiz</button>
            <button onClick={handleClick} value="back" className='gameover-page--button'>Back to Menu</button>
          </div>
          <Image src={rocket} alt="Rocket" width={240} height={608} className='gameover-page--rocket'/>
          <Image src={explosion} alt="Rocket Fire/Explostion" width={277} height={301} className='gameover-page--explosion'/>
          <Image src={spaceman} alt="Astronaut" width={1200} height={1200} className='gameover-page--spaceman'/>
      </div>
    </React.Fragment>
  );
}
