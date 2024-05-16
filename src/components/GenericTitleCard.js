import "../assets/scss/components/GenericTitleCard.scss";

function GenericTitleCard({questions, catIndex}) {
    return (
        <div className="category-title-card d-flex align-items-center col-gap-15">
          <div className="card-icon--container" style={{backgroundColor: questions[catIndex].color}}>
            <img
              src={questions[catIndex].icon}
              alt={questions[catIndex].title}
            />
          </div>
          <h5>{questions[catIndex].title}</h5>
        </div>
    )
}

export default GenericTitleCard
