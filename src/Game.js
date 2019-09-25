import React, { useState, useEffect } from "react";
import Card from "./Card";
import Screen from "./Screen";
import style from "./game.module.css";
import enemies from "./enemies.json";
import levelUp from "./GameMechanics";

const Game = () => {
  const [damage, setDamage] = useState(10);
  const [life, setLife] = useState(100);
  const [level, setLevel] = useState(1);
  const [enemy, setEnemy] = useState({});
  const [text, setText] = useState("");
  const [gold, setGold] = useState(0);
  const [enemyDied, setEnemyDied] = useState(false);
  const [currentExp, setCurrentExp] = useState(0);
  const [nextExp, setNextExp] = useState(1);

  useEffect(() => {
    handleLevelAndExp();
  });
  const handleLevelAndExp = () => {
    if (currentExp >= nextExp) {
      setLevel(level + 1);
      setCurrentExp(0);
      setNextExp(2 ** level);
      setDamage(damage + level);
    }
  };
  const searchEnemies = () => {
    setEnemyDied(false);
    const number = Math.floor(Math.random() * enemies.length);
    const enem = enemies[number];
    setEnemy({
      level: enem.lv,
      name: enem.name,
      life: enem.hp,
      mana: enem.mp,
      damage: enem.damage,
      gold: enem.gold,
      exp: enem.exp
    });
  };
  const fight = () => {
    showMessage(`You hit by ${damage} of damage`);
    if (enemy.life >= 1) {
      setEnemy({ ...enemy, life: enemy.life - damage });
    } else {
      setGold(gold + enemy.gold);
      setCurrentExp(currentExp + enemy.exp);
      setEnemyDied(true);
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
        <Card
          name={"Player"}
          lv={level}
          currentExp={currentExp}
          nextExp={nextExp}
          hp={life}
          mp={50}
          gold={gold}
        />
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
          hp={enemy.life < 0 ? 0 : enemy.life}
          gold={enemy.gold}
        />
      </div>
    </div>
  );
};

export default Game;
