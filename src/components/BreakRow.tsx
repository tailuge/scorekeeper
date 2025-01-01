import React from 'react';
    import Ball from './Ball';
    import FoulPill from './FoulPill';

    interface BreakRowProps {
      breakData: {
        player1: { balls: string[]; foul: boolean };
        player2: { balls: string[]; foul: boolean };
        scores: { player1: number; player2: number };
      };
    }

    const BreakRow: React.FC<BreakRowProps> = ({ breakData }) => {
      return (
        <tr>
          <td>
            {breakData.player1.balls.map((ball, index) => (
              <Ball key={index} color={ball} />
            ))}
            <FoulPill foul={breakData.player1.foul} />
          </td>
          <td className="score-column">{breakData.scores.player1}</td>
          <td className="score-column">{breakData.scores.player2}</td>
          <td>
            {breakData.player2.balls.map((ball, index) => (
              <Ball key={index} color={ball} />
            ))}
            <FoulPill foul={breakData.player2.foul} />
          </td>
        </tr>
      );
    };

    export default BreakRow;
