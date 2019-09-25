import React from "react";
import style from "./card.module.css";

function Card({ name, lv, currentExp, nextExp, hp, mp, gold }) {
  return (
    <div className={style.card}>
      <p>{name}</p>
      <p>Level: {lv}</p>
      {name === "Player" && (
        <p>
          Exp: {currentExp}/{nextExp}
        </p>
      )}
      <p>Hp: {hp}</p>
      {name === "Player" && <p>Mp: {mp}</p>}
      <p>Gold: {gold}</p>
    </div>
  );
}
export default Card;
