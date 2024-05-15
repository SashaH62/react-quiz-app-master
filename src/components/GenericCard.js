import "../assets/scss/components/GenericCard.scss";

function GenericCard({
  quizCat,
  icon,
  index,
  clickHandler,
  addClass,
  isDisabled,
}) {
  return (
    <button
      className={`generic-card ${addClass ? addClass : ""}`}
      onClick={() => clickHandler(index)}
      disabled={isDisabled}
    >
      <div className="card-icon--container">
        {icon ? <img src={icon} alt={quizCat} /> : <h5>{index + 1}</h5>}
      </div>
      <h5>{quizCat}</h5>
    </button>
  );
}

export default GenericCard;
