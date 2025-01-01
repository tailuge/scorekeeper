import React from 'react';
import Ball from './Ball';
import FoulPill from './FoulPill';

interface BreakRowProps {
  player1: { balls: string[]; foul: boolean };
  player2: { balls: string[]; foul: boolean };
  scores: { player1: number; player2: number };
}

const BreakRow: React.FC<BreakRowProps> = ({ player1, player2, scores }) => {
  return (
    <tr>
      <td className="player-column">
        {player1.balls.map((ball, index) => (
          <Ball key={index} color={ball} />
        ))}
        {player1.foul && <FoulPill />}
      </td>
      <td className="score-column">
        {scores.player1} - {scores.player2}
      </td>
      <td className="player-column">
        {player2.balls.map((ball, index) => (
          <Ball key={index} color={ball} />
        ))}
        {player2.foul && <FoulPill />}
      </td>
    </tr>
  );
};

export default BreakRow;
