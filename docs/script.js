

    const exampleState = [
      {
        player1: { balls: ['yellow', 'blue', 'red'], foul: false },
        player2: { balls: ['purple', 'orange'], foul: false },
        scores: { player1: 3, player2: 2 }
      },
      {
        player1: { balls: ['green', 'maroon'], foul: false },
        player2: { balls: ['pink', 'cyan', 'brown'], foul: false },
        scores: { player1: 5, player2: 4 }
      },
      {
        player1: { balls: ['yellow', 'blue'], foul: true },
        player2: { balls: ['purple', 'orange', 'green'], foul: false },
        scores: { player1: 6, player2: 7 }
      },
      {
        player1: { balls: ['maroon', 'pink', 'cyan'], foul: false },
        player2: { balls: ['brown', 'yellow'], foul: false },
        scores: { player1: 9, player2: 8 }
      }
    ];
    

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      React.createElement(Scorekeeper.default, { state: exampleState })
    );
