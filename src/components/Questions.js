import GenericButton from "./GenericButton";
import GenericCard from "./GenericCard";

import "../assets/scss/components/Questions.scss";

function Questions({
  questions,
  dispatch,
  numQuestions,
  questionIndex,
  selectedAnswer,
  submittedAnswer,
}) {
  const currCorrectAnswer = questions.options.indexOf(questions.answer);

  function handleAnswer(answer) {
    dispatch({ type: "setAnswer", payload: { currCorrectAnswer, answer } });
  }

  function handleSubmit() {
    dispatch({ type: "submitAnswer" });
  }

  function handleNextQuestion() {
    dispatch({ type: "nextQuestion" });
  }

  return (
    <div className="container quiz">
      <div className="col-6 d-flex flex-col pr-5-lg">
        <em className="pb-4">
          Question {questionIndex + 1} of {numQuestions}
        </em>
        <h4>{questions.question}</h4>
        <progress max={numQuestions} value={questionIndex + 1} />
      </div>
      <div className="col-6 card-col">
        {questions.options.map((el, index) => (
          <GenericCard
            quizCat={el}
            key={index}
            index={index}
            clickHandler={handleAnswer}
            addClass={`
                ${selectedAnswer === index ? "selected" : ""} 
                ${
                  submittedAnswer
                    ? currCorrectAnswer === index
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
            isDisabled={submittedAnswer}
          />
        ))}
        {selectedAnswer !== null && !submittedAnswer && (
          <GenericButton clickHandler={handleSubmit}>
            Submit Answer
          </GenericButton>
        )}
        {submittedAnswer && (
          <GenericButton clickHandler={handleNextQuestion}>
            Next Question
          </GenericButton>
        )}
      </div>
    </div>
  );
}

export default Questions;
