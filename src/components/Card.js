import React from "react";

export default function Card({ clickHandle, card }) {
  // console.log('Card Comp:',card);
  return (
    <>
      <img
        src={card.isFliped ? `./img/${card.name}.png` : `./img/cover.png`}
        alt="cover" onClick={() => clickHandle(card.id)} />
    </>
  );
}