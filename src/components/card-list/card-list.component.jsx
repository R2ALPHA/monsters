import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

// this compoennt should think about rendering only and it should not thik about how to render it or use it
export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster}></Card>
    ))}
  </div>
);
