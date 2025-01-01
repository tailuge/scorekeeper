import React from 'react';

    interface BallProps {
      color: string;
    }

    const Ball: React.FC<BallProps> = ({ color }) => {
      return <span className={`ball ball-${color}`}></span>;
    };

    export default Ball;
