function PlayButton({ selectedAnswer, submittedAnswer, dispatch }) {
  function handleSubmit() {
    dispatch({ type: "submitAnswer" });
  }

  function handleNextQuestion() {
    dispatch({ type: "nextQuestion" });
  }

  if (selectedAnswer !== null && !submittedAnswer)
    return (
      <button className="" onClick={handleSubmit}>
        Submit Answer
      </button>
    );

  if (submittedAnswer)
    return (
      <button className="" onClick={handleNextQuestion}>
        Next Question
      </button>
    );
}

export default PlayButton;
