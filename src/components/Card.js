import React from "react";

export default function Card({ clickHandle, card }) {
  return (
    <>
      <img
        // src={fliped.includes(card.id) ? `./img/${card.name}.png` : `./img/cover.png`}
        className={card.isFliped ? 'flip' : 'flop'}
        src={card.isFliped ? `./img/${card.name}.png` : `./img/cover.png`}
        alt="cover" onClick={() => clickHandle(card.id)} />
    </>
  );
}