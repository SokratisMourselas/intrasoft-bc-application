import React from "react";
import Player from '../Player/Player'

const team = (props) => (
  props.players.map((player, index) =>{
      return(
           <Player 
              index={index+1}
              name = {player.name} 
              age={player.age}
           >
         </Player>
        );
    }
));

export default team;
