
export const Square = ({ value, onClick }) => {
  return (
    <button className="square" type="button" onClick={onClick}>
      {value}
    </button>
  );
};
