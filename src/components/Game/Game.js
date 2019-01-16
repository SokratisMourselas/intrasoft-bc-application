import React from 'react';
import Team from '../Team/Team';

const Game = (props) =>{

  let team = (
    <div>
      <Team
         players = {props.players}/>
      </div>
    );
   


    // The return statement for the Game function

  return (
  <div>
    <h1>{props.game}</h1>

    <h3>Players available:</h3>
    {team}

  </div>);
} 

export default Game;
