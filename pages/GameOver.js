import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import hearts from "../public/gameover_assets/pixel-hearts.svg";
import heart from "../public/gameover_assets/pixel-heart.svg";
import alien from "../public/gameover_assets/pixel-alien.svg";
import Link from 'next/link';

export default function GameOverNew() {
  const router = useRouter();

  const {
    query: { score, questionsLength, lowScoreBody, noShipsBody },
  } = router;

  const props = {
    score,
    questionsLength,
    lowScoreBody,
    noShipsBody,
  };

  return (
    <div className="gameover--container">
      <div className='gameover--top'>
        <div className='gameover--lives'>
          <Image src={hearts} alt="Hearts" width={100} height={100} className='gameover--hearts'/>
          <Image src={heart} alt="Hearts" width={75} height={75} className='gameover--heart'/>
          <Image src={heart} alt="Hearts" width={75} height={75} className='gameover--heart'/>
          <Image src={heart} alt="Hearts" width={75} height={75} className='gameover--heart'/>
        </div>
        {score ? <p className='gameover--score'>Score: {props.score || 0} out of {props.questionsLength || 5}</p> : null}
      </div>
      <div className='gameover--text'>
        <h1 className='gameover--title'>GAME OVER!</h1>
        <p className='gameover--score-text'>{lowScoreBody || noShipsBody}</p>
        <h3 className='gameover--cont-txt'>CONTINUE?</h3>
        <div className='gameover--links'>
          <Link href="/game" className='gameover--yes-link'>
            <Image src={alien} alt="Alien" width={100} height={100} className='gameover--alien-select'/>
            YES
          </Link>
          <Link href="/planetpage" className='gameover--no-link'>
            <Image src={alien} alt="Alien" width={100} height={100} className='gameover--alien-select'/>
            NO
          </Link>
        </div>
      </div>
    </div>
  );
}
