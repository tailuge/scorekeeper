import React from 'react';
import Scorekeeper from '../../src/components/Scorekeeper';
import '../../src/styles/index.css';

const initialState = [
  {
    player1: { balls: ['yellow', 'blue', 'red'], foul: false },
    player2: { balls: ['purple', 'orange'], foul: false },
    scores: { player1: 3, player2: 2 },
  },
  {
    player1: { balls: ['red', 'red', 'red'], foul: true },
    player2: { balls: ['yellow', 'yellow'], foul: false },
    scores: { player1: 6, player2: 4 },
  },
  {
    player1: { balls: ['blue', 'blue', 'blue'], foul: false },
    player2: { balls: ['orange', 'orange', 'orange'], foul: true },
    scores: { player1: 9, player2: 7 },
  },
];

function App() {
  return (
    <div>
      <h2>Billiards Scorekeeper</h2>
      <Scorekeeper state={initialState} />
    </div>
  );
}

export default App;
