import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [turns, setTurns] = useState(0);
  const [cards, setCards] = useState([
    { name: 'helmet-1', id: 0, isFliped: false, match: false },
    { name: 'helmet-1', id: 1, isFliped: false, match: false },
    { name: 'potion-1', id: 2, isFliped: false, match: false },
    { name: 'potion-1', id: 3, isFliped: false, match: false },
    { name: 'ring-1', id: 4, isFliped: false, match: false },
    { name: 'ring-1', id: 5, isFliped: false, match: false },
    { name: 'scroll-1', id: 6, isFliped: false, match: false },
    { name: 'scroll-1', id: 7, isFliped: false, match: false },
    { name: 'shield-1', id: 8, isFliped: false, match: false },
    { name: 'shield-1', id: 9, isFliped: false, match: false },
    { name: 'sword-1', id: 10, isFliped: false, match: false },
    { name: 'sword-1', id: 11, isFliped: false, match: false }
  ]);
  console.log('comp');

  const reOrder = () => {
    const rands = [];
    while (rands.length !== 12) {
      const num = Math.round(Math.random() * 11);
      if (!rands.includes(num)) {
        rands.push(num);
      }
    }
    console.log('rands:', rands);
    setCards(prevState => {
      rands.forEach((i) => {
        const card = prevState.find(card => card.id === i)
        // console.log(card);
        prevState.unshift(card);
      });
      rands.forEach(()=>prevState.pop());
      console.log(prevState);
      return [...prevState];
    });
  }

  useEffect(() => {
    reOrder();
  }, []);

  useEffect(() => {
    const isMatch = () => {
      console.log('isMatch');
      const floped = cards.filter(card => card.isFliped && !card.match);
      if (floped.length === 2) {
        if (floped[0].name === floped[1].name) {
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
          }, 1000);
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
      return prevState.map(card => {
        // console.log(card);
        card.isFliped = false;
        card.match = false;
        return card;
      })
    });
  }

  return (
    <div className="App">
      <h1>Magic Game</h1>
      <button onClick={newGameHandle}>New Game</button>
      {
        cards.map(card => (
          <Card clickHandle={clickHandle} card={card} key={card.id} />
        ))
      }
      <h4>Turns: {turns}</h4>
    </div>
  );
}

export default App;
