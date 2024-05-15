import "../assets/scss/generic/_buttons.scss";

function GenericButton({ children, clickHandler }) {
  return (
    <button className="btn btn-ui" onClick={clickHandler}>
      {children}
    </button>
  );
}

export default GenericButton;
