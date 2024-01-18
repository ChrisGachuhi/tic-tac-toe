import { useState } from 'react';

import './App.css';
import './styles.scss';
import { Board } from './components/Board';
import { calculateWinner } from '../winner';
import { StatusMessage } from './components/StatusMessage';
import { History } from './components/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isXnext: false }];

function App() {
  
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  // This creates an array with 9 elements, with each element set to null
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [isXnext, setIsXnext] = useState(false);

  // const winner = calculateWinner(squares);
  const {winner, winningSquares} = calculateWinner(gamingBoard.squares);
  // const nextPlayer = isXnext ? 'X' : 'O';

  // const statusMessage = winner
  //   ? `Winner is ${winner}`
  //   : `Next Player is ${nextPlayer}`;
  // console.log({ history, currentMove });

  const hanldeSquareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }

    // setSquares(currentSquares => {
    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquaresState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXnext ? 'X' : 'O';
          }

          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState + 1))
        : currentHistory;

      // return currentHistory.concat({
      return base.concat({
        squares: nextSquaresState,
        isXnext: !lastGamingState.isXnext,
      });

      // return currentSquares.map((squareValue, position) => {
      //   if (clickedPosition === position) {
      //     return isXnext ? 'X' : 'O';
      //   }

      //   return squareValue;
      // });
    });
    // setIsXnext(prevIsXnext => !prevIsXnext);
    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      {/* <h2>Next Player is {nextPlayer} </h2> */}
      {/* we changed the above to accomodate the message when game is won */}
      {/* <h2>{statusMessage} </h2> */}
      {/* <StatusMessage winner={winner} isXnext={isXnext} squares={squares} /> */}
      {/* <StatusMessage winner={winner} isXnext={isXnext} squares={squares} /> */}
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      {/* <Board squares={squares} hanldeSquareClick={hanldeSquareClick} /> */}
      <Board
        squares={gamingBoard.squares}
        hanldeSquareClick={hanldeSquareClick}
        winningSquares = {winningSquares}
      />

      <button type="button" className={`btn-reset ${winner ? 'active' : ''}`} onClick={onNewGameStart}>
        Start new Game
      </button>

      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
