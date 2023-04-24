import React, { useState } from "react";

function Player(props) {
    const [player, setPlayer] = useState({
        name: props.name || "Player",
        score: props.score || 0,
        level: props.level || 1,
        weapon: "Bow",
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
        <div className="player">
          <h1>{player.name}</h1>
          <div className="card-inner">
          <p>Score: <strong>{player.score}</strong></p>
          <p>Level: <strong>{player.level}</strong></p>
          <p>Weapon: <strong>{player.weapon}</strong></p>
          <p>Arrows: <strong>{player.arrows}</strong></p>
          </div>
          <button disabled={player.arrows === 0} onClick={handleClick}>Shoot Arrow</button>
        </div>
      );



}

export default Player;