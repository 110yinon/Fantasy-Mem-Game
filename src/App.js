import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [turns, setTurns] = useState(0);
  const [cards, setCards] = useState([
    { name: 'helmet-1', id: 1, isFliped: true },
    { name: 'helmet-1', id: 2, isFliped: true },
    { name: 'potion-1', id: 3, isFliped: true },
    { name: 'potion-1', id: 4, isFliped: true },
    { name: 'ring-1', id: 5, isFliped: true },
    { name: 'ring-1', id: 6, isFliped: true },
    { name: 'scroll-1', id: 7, isFliped: true },
    { name: 'scroll-1', id: 8, isFliped: true },
    { name: 'shield-1', id: 9, isFliped: true },
    { name: 'shield-1', id: 10, isFliped: true },
    { name: 'sword-1', id: 11, isFliped: true },
    { name: 'sword-1', id: 12, isFliped: true }
  ]);

  const reOrder = () => {
    const newOrder = [];
    const rands = [];
    while (newOrder.length !== 12) {
      const num = Math.round(Math.random() * 11);
      if (!rands.includes(num)) {
        rands.push(num);
        newOrder.push(cards[num]);
      }
    }
    // console.log(rands);
    console.log('newOrder:', newOrder);
    setCards(newOrder);
  }

  useEffect(() => {
    reOrder();
  }, []);

  const clickHandle = (id) => {
    setCards((prevState) => {
      return prevState.map(card => {
        // console.log(card);
        if (card.id === id) {
          card.isFliped = false;
          // console.log('match!!!', card);
        }
        return card;
      });
    });
  }


  // clickhandle
  // flip card
  // flip card
  // check for match
  // match ? stay flip : unflip
  // update turn

  // name game
  // reorder cards
  // unfliped cards
  // reset turn

  return (
    <div className="App">
      <h1>Magic Game</h1>
      <button onClick={reOrder}>New Game</button>
      {
        cards.map(card => (
          <div
            style={{ display: 'inline-block', border: '1px solid black', margin: '1px' }}
            key={card.id}>
            <p>{`${card.name}, ${card.id}, ${card.isFliped}`}</p>
            <Card clickHandle={clickHandle} card={card} />
          </div>
        ))
      }
      <h4>Turns: {turns}</h4>
    </div>
  );
}

export default App;
