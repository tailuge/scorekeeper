import React from 'react';

interface BallProps {
  color: string;
}

const Ball: React.FC<BallProps> = ({ color }) => {
  const ballStyle = {
    color: color === 'black' ? 'black' : color === 'white' ? 'white' : 'transparent',
    textShadow: color === 'black' ? 'none' : color === 'white' ? 'none' : `0 0 0.1em ${color}`,
  };

  return <span style={ballStyle}>{color === 'black' || color === 'white' ? '⚈' : '⚆'}</span>;
};

export default Ball;
