import "./Card.css";

const CardItem = (props) => {
  const { title, name, gender, isSelected, handleClick } = props;

  const onClick = () => {
    handleClick(name);
  };

  return (
    <div
      className={`card-container ${isSelected ? "is-selected" : ""}`}
      onClick={onClick}
    >
      <h3 className="title">{title}</h3>
      <span className="content">
        <span>Name</span> : {gender === "f" ? `Mrs.${name}` : `Mr.${name}`}
        <br></br>
        <span>Gender</span> : {gender === "f" ? "Female" : "Male"}
        <br></br>
        {gender === "m" ? <p>Hey im Male</p> : <p>Hey im FeMale</p>}
      </span>
    </div>
  );
};

export default CardItem;
