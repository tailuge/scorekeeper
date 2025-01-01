import React from 'react';

    interface FoulPillProps {
      foul: boolean;
    }

    const FoulPill: React.FC<FoulPillProps> = ({ foul }) => {
      return <span className={`foul-pill ${foul ? 'foul-pill-active' : ''}`}></span>;
    };

    export default FoulPill;
