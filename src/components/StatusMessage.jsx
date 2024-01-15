export const StatusMessage = ({ winner, isXnext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);

  const nextPlayer = isXnext ? 'X' : 'O';

  //   const statusMessage = winner
  //     ? `Winner is ${winner}`
  //       : `Next Player is ${nextPlayer}`;

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }

    if (!winner && noMovesLeft) {
      return <>Game Drawn</>;
    }

    if (!winner && !noMovesLeft) {
      return (
        <>
          Next Player is{' '}
          <span className={isXnext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }

    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};
