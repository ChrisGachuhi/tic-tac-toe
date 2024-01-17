export const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
          <ul className="history">
              <h2>Current Game History</h2>
        {history.map((_, index) => (
          <li key={index}>
            <button
              className={`btn-move ${ currentMove === index ? 'active': ''}`}
              type="button"
              onClick={() => moveTo(index)}
            >
              {index === 0 ? 'New Game' : `Go to move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
