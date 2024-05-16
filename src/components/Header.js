import { motion, AnimatePresence } from "framer-motion";
import "../assets/scss/components/Header.scss";
import GenericTitleCard from "./GenericTitleCard";

function Header({ status, questions, catIndex, colorScheme, setColorScheme }) {
  function handleColorToggle() {
    if (colorScheme === "light") {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
  }

  return (
    <AnimatePresence>
      <motion.header
        className="container d-flex justify-content-between"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {(status === "running" || status === "completed") && (
          <GenericTitleCard questions={questions} catIndex={catIndex} />
        )}
        <div className="color-toggle-container d-flex align-items-center col-gap-10">
          <img
            src={
              colorScheme === "light"
                ? "./assets/images/icon-sun-dark.svg"
                : "./assets/images/icon-sun-light.svg"
            }
            alt="Light Mode"
          />
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onClick={handleColorToggle}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <span className="ball"></span>
          </label>
          <img
            src={
              colorScheme === "light"
                ? "./assets/images/icon-moon-dark.svg"
                : "./assets/images/icon-moon-light.svg"
            }
            alt="Dark Mode"
          />
        </div>
      </motion.header>
    </AnimatePresence>
  );
}

export default Header;
