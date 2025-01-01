import React from 'react';
    import Scorekeeper from 'billiards-scorekeeper';

    const exampleState = [
      {
        player1: { balls: ['yellow', 'blue', 'red'], foul: false },
        player2: { balls: ['purple', 'orange'], foul: false },
        scores: { player1: 3, player2: 2 },
      },
    ];

    function App() {
      return (
        <div>
          <h2>Billiards Scorekeeper</h2>
          <Scorekeeper state={exampleState} />
        </div>
      );
    }

    export default App;
