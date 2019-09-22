import React, { useState } from "react";
import Card from "./Card";
import Screen from "./Screen";
import style from "./game.module.css";
import enemies from "./enemies.json";
const Game = () => {
  const [turn, setTurn] = useState("player");
  const [life, setLife] = useState(100);
  const [level, setLevel] = useState(1);
  const [enemy, setEnemy] = useState({});
  const [text, setText] = useState("");
  const [gold, setGold] = useState(0);
  const [enemyDied, setEnemyDied] = useState(false);

  const searchEnemies = () => {
    showMessage("Looking for enemies");
    setEnemyDied(false);
    const number = Math.floor(Math.random() * enemies.length);
    const enem = enemies[number];
    setEnemy({
      level: enem.lv,
      name: enem.name,
      life: enem.hp,
      mana: enem.mp,
      damage: enem.damage
    });
  };
  const fight = () => {
    if (life > 0 && enemy.life > 0) {
      const damage = 10;
      showMessage(`You hit by ${damage} of damage`);
      if (enemy.life >= 1) {
        setEnemy({ ...enemy, life: enemy.life - damage });
      } else {
        setEnemyDied(true);
      }
    }
  };
  const showMessage = message => {
    setText(message);
    setTimeout(() => {
      setText("");
    }, 800);
  };

  return (
    <div className={style.game}>
      <div>
        <Card name={"Player"} lv={level} hp={life} mp={50} gold={gold} />
      </div>
      <div>
        <Screen text={text} />
        <div className={style.container}>
          <button onClick={searchEnemies}>Search for enemies</button>
          <button>Run</button>
          <button disabled={enemyDied} onClick={fight}>
            Atack!
          </button>
        </div>
      </div>
      <div>
        <Card
          name={enemy.name}
          lv={enemy.level}
          hp={enemy.life}
          mp={enemy.mp}
        />
      </div>
    </div>
  );
};

export default Game;
