import { motion, AnimatePresence } from "framer-motion";
import GenericButton from "./GenericButton";
import "../assets/scss/components/ResultsScreen.scss";
import GenericTitleCard from "./GenericTitleCard";

function ResultsScreen({
  points,
  numQuestions,
  catIndex,
  questions,
  dispatch,
}) {
  function handleReset() {
    dispatch({ type: "resetGame" });
  }

  return (
    <div className="container complete">
      <AnimatePresence>
        <motion.div
          className="col-6 mb-5-md"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>
            Quiz Completed <br /> <strong>You Scored...</strong>
          </h3>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          className="col-6 results-col"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="results-container d-flex align-items-center justify-content-center mb-4 flex-col">
            <GenericTitleCard questions={questions} catIndex={catIndex} />
            <h1 className="mt-4">{points}</h1>
            <p>Out of {numQuestions}</p>
          </div>
          <GenericButton clickHandler={handleReset}>Play Again</GenericButton>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ResultsScreen;
