import React from 'react';
import BreakRow from './BreakRow';
import '../styles/index.css';

interface ScorekeeperProps {
  state: {
    player1: { balls: string[]; foul: boolean };
    player2: { balls: string[]; foul: boolean };
    scores: { player1: number; player2: number };
  }[];
}

const Scorekeeper: React.FC<ScorekeeperProps> = ({ state }) => {
  return (
    <table className="scorekeeper-table">
      <thead>
        <tr>
          <th>Player 1</th>
          <th>Score</th>
          <th>Player 2</th>
        </tr>
      </thead>
      <tbody>
        {state.map((breakData, index) => (
          <BreakRow key={index} {...breakData} />
        ))}
      </tbody>
    </table>
  );
};

export default Scorekeeper;
