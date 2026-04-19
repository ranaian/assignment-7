const Scoreboard = ({ playerScore, computerScore, gameMessage, onReset }) => {
  return (
    <>
      <div className="scoreboard">
        <h3>
          Player {playerScore} || {gameMessage} || {computerScore} Computer
        </h3>
        <button className="resetBtn" onClick={onReset}>
          Reset Game
        </button>
      </div>
    </>
  );
};

export default Scoreboard;
