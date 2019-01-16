import React from "react";

const Player = (props) =>{
  return (
  <div>
    <h2>Player no.{props.index}: {props.name} | Age:{props.age}</h2>
  </div>);
} 

export default Player;

