import React, { useState } from "react";
import Card from "./Card";

const Screen = ({ text }) => {
  const [color, setColor] = useState("gray");
  const [showMessage, setShowMessage] = useState(false);

  const on_mouse_enter = e => {
    setShowMessage(true);
    if (e.target.id === "vit") {
      setShowMessage("Increse by 5 maximun Hp");
    }
    if (e.target.id === "str") {
      setShowMessage("Increse by 2 physical damage");
    }
    if (e.target.id === "dex") {
      setShowMessage("Increse by 1 physical defence");
    }
  };
  const on_mouse_exit = () => {
    setColor("gray");
    setShowMessage(false);
  };

  return (
    <div className="screen">
      <div>
        <p>{text}</p>
      </div>
      <div>
        <button
          id={"vit"}
          onMouseEnter={on_mouse_enter}
          onMouseLeave={on_mouse_exit}
        >
          Vitality
        </button>
        <button
          id={"str"}
          onMouseEnter={on_mouse_enter}
          onMouseLeave={on_mouse_exit}
        >
          Strength
        </button>
        <button
          id={"dex"}
          onMouseEnter={on_mouse_enter}
          onMouseLeave={on_mouse_exit}
        >
          Dexterity
        </button>
      </div>
    </div>
  );
};
export default Screen;
