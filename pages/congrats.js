import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import diamonds from '../public/congrats_assets/diamond-line.svg'
import astronaut from '../public/congrats_assets/astronaut.png'
import alien from '../public/congrats_assets/happy-alien.png'

export default function GameOver() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/planetpage");
  };

  return (
      <div className="congrats--container">
        {/* <div className="congrats--astronaut-cont">
          <Image src={astronaut} alt="Astronaut" fill className="congrats--astronaut"/>
        </div> */}
        {/* <div className="congrats--alien-cont">
          <Image src={alien} alt="Alien" fill className="congrats--alien"/>
        </div> */}
        <button className='congrats--btn' onClick={handleClick}>Go back to planet</button>
        <div className='congrats--body'>
          <div className='congrats--diamonds diamond-one'>
            <Image src={diamonds} alt="Diamond line" width={200} height={200} className="diamond"/>
          </div>
          <h1 className='congrats--title'>Congratulations!</h1>
          <h3 className='congrats--txt'>To a world you&apos;ve never seen before</h3>
          <div className='congrats--diamonds diamond-two'>
            <Image src={diamonds} alt="Diamond line" width={200} height={200}/>
          </div>
        </div>
      </div>
  );
}
