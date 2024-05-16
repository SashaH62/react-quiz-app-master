import { motion, AnimatePresence } from "framer-motion";
import GenericButton from "./GenericButton";
import GenericCard from "./GenericCard";

import "../assets/scss/components/Questions.scss";
import { useState } from "react";

function Questions({
  questions,
  dispatch,
  numQuestions,
  questionIndex,
  selectedAnswer,
  submittedAnswer,
}) {
  const [submitError, setSubmitError] = useState(false);

  const currCorrectAnswer = questions.options.indexOf(questions.answer);

  function handleAnswer(answer) {
    setSubmitError(false);
    dispatch({ type: "setAnswer", payload: { currCorrectAnswer, answer } });
  }

  function handleSubmit() {
    if (selectedAnswer || selectedAnswer === 0) {
      if (questionIndex >= numQuestions - 1) {
        dispatch({ type: "gameCompleted" });
      } else {
        dispatch({ type: "submitAnswer" });
      }
    } else {
      setSubmitError(true);
      return;
    }
  }

  function handleNextQuestion() {
    setSubmitError(false);
    dispatch({ type: "nextQuestion" });
  }

  return (
    <div className="container quiz">
      <AnimatePresence>
        <motion.div
          className="question-col col-6 d-flex flex-col pr-5-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <em className="mb-4">
            Question {questionIndex + 1} of {numQuestions}
          </em>
          <h4 className="mb-3-md">{questions.question}</h4>
          <progress max={numQuestions} value={questionIndex} />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          className="col-6 card-col"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
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
          {!submittedAnswer && (
            <GenericButton clickHandler={handleSubmit}>
              Submit Answer
            </GenericButton>
          )}
          {submittedAnswer && (
            <GenericButton clickHandler={handleNextQuestion}>
              Next Question
            </GenericButton>
          )}
          {submitError && (
            <div className="d-flex align-items-center justify-content-center col-gap-10">
              <img src="./assets/images/icon-error.svg" alt="" />
              <h5>Please select an answer</h5>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Questions;
