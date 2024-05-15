import "../assets/scss/components/Header.scss";

function Header({ status, questions, catIndex, colorScheme, setColorScheme }) {
  function handleColorToggle() {
    if (colorScheme === "light") {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
  }

  return (
    <header className="container d-flex justify-content-between">
      {status === "running" && (
        <div className="header-category d-flex align-items-center col-gap-15">
          <div className="card-icon--container ">
            <img
              src={questions[catIndex].icon}
              alt={questions[catIndex].title}
            />
          </div>
          <h5>{questions[catIndex].title}</h5>
        </div>
      )}
      <div className="color-toggle-container d-flex align-items-center col-gap-10">
        <img src="./assets/images/icon-sun-dark.svg" alt="Light Mode" />
        <input
          type="checkbox"
          class="checkbox"
          id="checkbox"
          onClick={handleColorToggle}
        />
        <label for="checkbox" class="checkbox-label">
          <span class="ball"></span>
        </label>
        <img src="./assets/images/icon-moon-dark.svg" alt="Dark Mode" />
      </div>
    </header>
  );
}

export default Header;
