import React from "react";
import "./Card.css";

const CardItem = (props) => {
  const { title, name, category, isSelected, handleClickAction } = props;

  const onClick = () => {
    handleClickAction(title);
  };

  return (
    <div
      className={`card-container ${isSelected ? "is-selected" : ""}`}
      onClick={onClick}
    >
      <h3 className="title">{title ? title : "-"}</h3>
      <span className="content">
        <span>Name</span> : {name ? name : "-"}
        <br></br>
        <span>Category</span> : {category || "-"}
        <br></br>
      </span>
    </div>
  );
};

export default CardItem;
