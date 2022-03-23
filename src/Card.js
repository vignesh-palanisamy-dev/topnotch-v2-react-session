import Name from "./Name";
import "./Card.css";

const CardItem = () => {
  return (
    <div className="card-container">
      <h3 className="title">Title</h3>
      <Name></Name>
      <span className="content">
        <span>Genter</span> : Female
      </span>
    </div>
  );
};

export default CardItem;
