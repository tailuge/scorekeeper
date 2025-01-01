import React, { useState } from 'react';

interface BilliardsScorekeeperProps {
  initialPlayer1Score: number;
  initialPlayer2Score: number;
}

interface BilliardsScorekeeperState {
  player1Score: number;
  player2Score: number;
}

const BilliardsScorekeeper: React.FC<BilliardsScorekeeperProps> = ({ initialPlayer1Score, initialPlayer2Score }) => {
  const [state, setState] = useState<BilliardsScorekeeperState>({
    player1Score: initialPlayer1Score,
    player2Score: initialPlayer2Score,
  });

  const incrementPlayer1Score = () => {
    setState((prevState) => ({ ...prevState, player1Score: prevState.player1Score + 1 }));
  };

  const decrementPlayer1Score = () => {
    setState((prevState) => ({ ...prevState, player1Score: Math.max(0, prevState.player1Score - 1) }));
  };

  const incrementPlayer2Score = () => {
    setState((prevState) => ({ ...prevState, player2Score: prevState.player2Score + 1 }));
  };

  const decrementPlayer2Score = () => {
    setState((prevState) => ({ ...prevState, player2Score: Math.max(0, prevState.player2Score - 1) }));
  };

  return (
    <div>
      <div>
        <span>Player 1: {state.player1Score}</span>
        <button onClick={incrementPlayer1Score}>+</button>
        <button onClick={decrementPlayer1Score}>-</button>
      </div>
      <div>
        <span>Player 2: {state.player2Score}</span>
        <button onClick={incrementPlayer2Score}>+</button>
        <button onClick={decrementPlayer2Score}>-</button>
      </div>
    </div>
  );
};


export default BilliardsScorekeeper;
