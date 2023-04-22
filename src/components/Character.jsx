import React, { useState } from "react";

function Player(props) {
    const [player, setPlayer] = useState({
        name: props.name || "Player",
        score: 0,
        level: 1,
        weapon: 'Bow',
        arrows: props.arrows || 20,
      });
    
      function handleClick() {
        setPlayer(prevState => ({
          ...prevState,
          arrows: prevState.arrows - 1,
          score: prevState.score + 10
        }));
      }
    
      return (
        <div>
          <h1>{player.name}</h1>
          <p>Score: {player.score}</p>
          <p>Level: {player.level}</p>
          <p>Weapon: {player.weapon}</p>
          <p>Arrows: {player.arrows}</p>
          <button disabled={player.arrows === 0} onClick={handleClick}>Shoot Arrow</button>
        </div>
      );



}

export default Player;