import React, { useState } from "react";
import Card from "./Card";
import Screen from "./Screen";
import style from "./game.module.css";
const Game = () => {
  const [turn, setTurn] = useState("player");
  const [life, setLife] = useState(100);
  const [level, setLevel] = useState(1);
  const [enemyLife, setEnemyLife] = useState(0);
  const [text, setText] = useState("");

  const searchEnemies = () => {
    setText("hola");
  };

  return (
    <div className={style.game}>
      <div>
        <Card lv={level} hp={life} mp={50} />
      </div>
      <div>
        <Screen text={text} />
        <div className={style.container}>
          <button>Search for enemies</button>
          <button>Run</button>
          <button>Atack!</button>
        </div>
      </div>
      <div>
        <Card lv={1} hp={enemyLife} mp={50} />
      </div>
    </div>
  );
};

export default Game;
