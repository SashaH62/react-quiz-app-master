import GenericCard from "./GenericCard";
import { motion, AnimatePresence } from "framer-motion";

function StartScreen({ questions, dispatch }) {
  function handleSelectCat(index) {
    dispatch({ type: "startGame", payload: index });
  }

  return (
    <div className="container start">
      <AnimatePresence>
        <motion.div
          className="col-6 mb-5-md"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-4">
            Welcome to the <strong>Frontend Quiz!</strong>
          </h3>
          <em>Pick a subject to get started</em>
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
          {questions.map((el, index) => (
            <GenericCard
              quizCat={el.title}
              icon={el.icon}
              color={el.color}
              key={index}
              index={index}
              clickHandler={handleSelectCat}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default StartScreen;
