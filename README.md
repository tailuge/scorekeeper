# Billiards Scorekeeper

    A reusable React component for tracking billiards scores.

    ## Installation

    ```bash
    npm install scorekeeper
    ```
    ## Usage
    ### React App
    ```tsx
    import React from 'react';
    import Scorekeeper from 'scorekeeper';

    const exampleState = [...];
    function App() {
      return <Scorekeeper state={exampleState} />;
    }
    ```
    ### Vanilla JS
    ```html
    <script src="https://unpkg.com/scorekeeper"></script>
    <script>
      const exampleState = [...];
      ReactDOM.createRoot(document.getElementById('root')).render(
        React.createElement(Scorekeeper.default, { state: exampleState })
      );
    </script>
    ```
    ## Publishing
    Build the library:
    ```bash
    npm run build
    ```
    Publish to npm:
    ```bash
    npm publish
    ```
