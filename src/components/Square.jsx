// eslint-disable-next-line react/prop-types
export const Square = ({ value, onClick, isWinningSquare }) => {

  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';

  return (
    <button
      className={`square ${colorClassName} ${winningClassName}`}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
