import React from 'react';

function PlanetGenerator(props){
return (

    <div className='planet-jsx'>
        <button onClick={props.toggle}>{props.name}</button>
        <img src={props.img} alt="Planet Sprites" />
    </div>

);

}

export default PlanetGenerator;
