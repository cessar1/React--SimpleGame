import React from "react";
import style from "./card.module.css";

function Card({ lv, hp, mp }) {
  return (
    <div className={style.card}>
      <p>Level {lv}</p>
      <p>Hp {hp}</p>
      <p>Mp {mp}</p>
    </div>
  );
}
export default Card;
