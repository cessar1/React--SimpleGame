import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const style = {
    color: "white"
  };
  return (
    <nav className="nav">
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link style={style} to="/">
          <li>Home</li>
        </Link>
        <Link style={style} to="/item">
          <li>Shop</li>
        </Link>
        <Link style={style} to="/game">
          <li>Game</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
