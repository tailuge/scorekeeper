const exampleState = [
      {
        player1: { balls: ['yellow', 'blue', 'red'], foul: false },
        player2: { balls: ['purple', 'orange'], foul: false },
        scores: { player1: 3, player2: 2 },
      },
    ];

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      React.createElement(BilliardsScorekeeper.default, { state: exampleState })
    );
