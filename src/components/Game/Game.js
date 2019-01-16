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
    <h6><strong>When:</strong> {props.game.date}, <strong>Where:</strong> {props.game.address}</h6>
    <h1>Intrasoft International vs <label>{props.game.vs}</label></h1>

    <h3>Players available:</h3>
    {team}

  </div>);
} 

export default Game;
