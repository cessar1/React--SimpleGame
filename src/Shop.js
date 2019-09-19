import React from "react";
import Card from "./Card";
import data from "./data.json";

function Shop() {
  return (
    <div className="items">
      {data.map(i => {
        return (
          <Card name={i.name} price={i.price} description={i.description} />
        );
      })}
    </div>
  );
}

export default Shop;
