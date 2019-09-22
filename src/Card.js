import React from "react";
import style from "./card.module.css";

function Card({ name, lv, hp, mp, gold }) {
  return (
    <div className={style.card}>
      <p>{name}</p>
      <p>Level: {lv}</p>
      <p>Hp: {hp}</p>
      <p>Mp: {mp}</p>
      <p>Gold: {gold}</p>
    </div>
  );
}
export default Card;
