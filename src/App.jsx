import { useState } from 'react';

import './App.css';
import './styles.scss';
import { Board } from './components/Board';
import { calculateWinner } from '../winner';
import { StatusMessage } from './components/StatusMessage';

function App() {
  // This creates an array with 9 elements, with each element set to null
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false);

  const winner = calculateWinner(squares);
  // const nextPlayer = isXnext ? 'X' : 'O';

  // const statusMessage = winner
  //   ? `Winner is ${winner}`
  //   : `Next Player is ${nextPlayer}`;

  const hanldeSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXnext ? 'X' : 'O';
        }

        return squareValue;
      });
    });
    setIsXnext(prevIsXnext => !prevIsXnext);
  };

  return (
    <div className="app">
      {/* <h2>Next Player is {nextPlayer} </h2> */}
      {/* we changed the above to accomodate the message when game is won */}
      {/* <h2>{statusMessage} </h2> */}
      <StatusMessage winner={winner} isXnext={isXnext} squares={squares} />
      <Board squares={squares} hanldeSquareClick={hanldeSquareClick} />
    </div>
  );
}

export default App;
