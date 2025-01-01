import React from 'react';
    import BreakRow from './BreakRow';
    import '../styles/index.css';

    interface BreakData {
      player1: { balls: string[]; foul: boolean };
      player2: { balls: string[]; foul: boolean };
      scores: { player1: number; player2: number };
    }

    interface ScorekeeperProps {
      state: BreakData[];
    }

    const Scorekeeper: React.FC<ScorekeeperProps> = ({ state }) => {
      return (
        <table className="scorekeeper-table">
          <thead>
            <tr>
              <th>Player 1</th>
              <th className="score-column">Score</th>
              <th className="score-column">Score</th>
              <th>Player 2</th>
            </tr>
          </thead>
          <tbody>
            {state.map((breakData, index) => (
              <BreakRow key={index} breakData={breakData} />
            ))}
          </tbody>
        </table>
      );
    };

    export default Scorekeeper;
