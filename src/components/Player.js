import { useState } from 'react';
import rock from "../images/Rock.png";
import paper from "../images/Paper.png";
import scissors from "../images/Scissors.png";


function Player({ name, score, action }) {
    return <div className='player'>
            <div>{name}: {score}</div>
            <img src={action} width={60} margin={10} />
        </div>
}


export default Player;