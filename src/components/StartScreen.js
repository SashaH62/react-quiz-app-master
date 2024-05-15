import GenericCard from "./GenericCard";

function StartScreen({ questions, dispatch }) {
  function handleSelectCat(index) {
    dispatch({ type: "startGame", payload: index });
  }

  return (
    <div className="container start">
      <div className="col-6">
        <h3>
          Welcome to the <strong>Frontend Quiz!</strong>
        </h3>
        <em>Pick a subject to get started</em>
      </div>
      <div className="col-6 card-col">
        {questions.map((el, index) => (
          <GenericCard
            quizCat={el.title}
            icon={el.icon}
            key={el.id}
            index={index}
            clickHandler={handleSelectCat}
          />
        ))}
      </div>
    </div>
  );
}

export default StartScreen;
