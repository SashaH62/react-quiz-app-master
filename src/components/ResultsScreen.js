import GenericButton from "./GenericButton";
import "../assets/scss/components/ResultsScreen.scss";

function ResultsScreen({ points, numQuestions, dispatch }) {
  function handleReset() {
    dispatch({ type: "resetGame" });
  }

  return (
    <div className="container complete">
      <div className="col-6">
        <h3>
          Quiz Completed <strong>You Scored...</strong>
        </h3>
      </div>
      <div className="col-6 results-col">
        <div className="results-container d-flex align-items-center justify-content-center mb-4 flex-col">
          <h1>{points}</h1>
          <p>Out of {numQuestions}</p>
        </div>
        <GenericButton clickHandler={handleReset}>Play Again</GenericButton>
      </div>
    </div>
  );
}

export default ResultsScreen;
