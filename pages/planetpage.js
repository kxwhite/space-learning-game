import React, { useState } from 'react';
import PlanetGenerator from '../components/planetgenerator';
import Planet from '../components/planet';



const Planets = () => {

  const [isDNA, setIsDNA] = useState(false);
  const [isSAP, setIsSAP] = useState(false);
  const [isCIS, setIsCIS] = useState(false);
  const [isORACLE, setIsORACLE] = useState(false);

  const toggleIsDNA = () => {
    setIsDNA(!isDNA);
  }
  const toggleIsSAP = () => {
    setIsSAP(!isSAP);
  }
  const toggleIsCIS = () => {
    setIsCIS(!isCIS);
  }
  const toggleIsORACLE = () => {
    setIsORACLE(!isORACLE);
  }

  if (isDNA) {
    return (
      <Planet name={"DNA"} img={"/planetpage_assets/pixel_planet04.png"} toggle={toggleIsDNA} />
    )

  } else if (isSAP) {
    return (
      <Planet name={"SAP"} img={"/planetpage_assets/pixel_planet01.png"} toggle={toggleIsSAP} />
    )

  } else if (isCIS) {
    return (
      <Planet name={"CIS"} img={"/planetpage_assets/pixel_planet02.png"} toggle={toggleIsCIS} />
    )

  } else if (isORACLE) {
    return (
      <Planet name={"ORACLE"} img={"/planetpage_assets/pixel_planet03.png"} toggle={toggleIsORACLE} />
    )

  } else {
    return (
      <div className='planet-background'>

        <div className="planet-container">

          <div className='planets' id='planet1'>
            <PlanetGenerator name={"SAP"} img={"/planetpage_assets/pixel_planet01.png"} toggle={toggleIsSAP} />
          </div>

          <div></div>

          <div className='planets' id='planet2'>
            <PlanetGenerator name={"CIS"} img={"/planetpage_assets/pixel_planet02.png"} toggle={toggleIsCIS} />
          </div>

          <div></div>
          <div></div>

          <div className='planets' id='planet3'>
            <PlanetGenerator name={"ORACLE"} img={"/planetpage_assets/pixel_planet03.png"} toggle={toggleIsORACLE} />
          </div>

          <div></div>

          <div className='planets' id='planet4'>
            <PlanetGenerator name={"DNA"} img={"/planetpage_assets/pixel_planet04.png"} toggle={toggleIsDNA} />
          </div>

        </div>

      </div>
    );
  }

}

export default Planets;   