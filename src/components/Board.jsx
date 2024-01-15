import { Square } from './Square';

export const Board = ({squares, hanldeSquareClick}) => {
  // // This creates an array with 9 elements, with each element set to null
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [isXnext, setIsXnext] = useState(false);

  // const hanldeSquareClick = clickedPosition => {
  //   if (squares[clickedPosition]) {
  //     return
  //   }

  //   setSquares(currentSquares => {
  //     return currentSquares.map((squareValue, position) => {
  //       if (clickedPosition === position) {
  //         return isXnext ? 'X' : 'O';
  //       }

  //       return squareValue;
  //     });
  //   });
  //   setIsXnext((prevIsXnext) => !prevIsXnext);
  // };

  // moved the above to app.jsx for the data to be accessed everywhere

  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => hanldeSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {/* <Square value={square[0]} onClick={() => hanldeSquareClick(0)} />
        <Square value={squares[1]} />
        <Square value={squares[2]} /> */}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {/* <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} /> */}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {/* <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} /> */}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
