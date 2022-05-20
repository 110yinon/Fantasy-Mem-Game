import React from "react";

export default function Card({ clickHandle, card }) {
  // console.log('Card Comp:',card);
  // console.log('Card Comp:',fliped.includes(card.id));
  return (
    <>
      <img
        // src={fliped.includes(card.id) ? `./img/${card.name}.png` : `./img/cover.png`}
        src={card.isFliped ? `./img/${card.name}.png` : `./img/cover.png`}
        alt="cover" onClick={() => clickHandle(card.id)} />
    </>
  );
}