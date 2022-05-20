import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [turns, setTurns] = useState(0);
  const [cards, setCards] = useState([
    { name: 'helmet-1', id: 0, isFliped: false, match: false },
    { name: 'helmet-1', id: 12, isFliped: false, match: false },
    { name: 'potion-1', id: 1, isFliped: false, match: false },
    { name: 'potion-1', id: 11, isFliped: false, match: false },
    { name: 'ring-1', id: 10, isFliped: false, match: false },
    { name: 'ring-1', id: 2, isFliped: false, match: false },
    { name: 'scroll-1', id: 9, isFliped: false, match: false },
    { name: 'scroll-1', id: 3, isFliped: false, match: false },
    { name: 'shield-1', id: 8, isFliped: false, match: false },
    { name: 'shield-1', id: 4, isFliped: false, match: false },
    { name: 'sword-1', id: 7, isFliped: false, match: false },
    { name: 'sword-1', id: 5, isFliped: false, match: false }
  ]);
  console.log('comp');

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

  useEffect(() => {
    const isMatch = () => {
      console.log('isMatch');
      const floped = cards.filter(card => card.isFliped && !card.match);
      if (floped.length === 2) {
        if (floped[0].id + floped[1].id === 12) {
          console.log('match !', floped);
          floped.forEach(card => card.match = true);
          // setCards(prevState => [...prevState]);
          setTurns(prevState => prevState + 1);
        }
        else {
          console.log('no match !!', floped);
          setTurns(prevState => prevState + 1);
          setTimeout(() => {
            floped.forEach(card => card.isFliped = false);
            setCards(prevState => [...prevState]);
          }, 1500);
        }
      }
      else {
        console.log('fliped card < 2\n--------------------------');
      }
    }

    isMatch();
  }, [cards]);


  const flipCard = (id) => {
    setCards((prevState) => {
      const card = prevState.find(card => card.id === id);
      // console.log(card);
      card.isFliped = true;
      return [...prevState];
    });
  };


  const clickHandle = (id) => {
    flipCard(id);
  }




  const newGameHandle = () => {
    reOrder();
    setTurns(0);
    setCards(prevState => {
      prevState.map(card => {
        console.log(card);
        card.isFliped = false;
        card.match = false;
      })
      return [...prevState];
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
      <button onClick={newGameHandle}>New Game</button>
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
