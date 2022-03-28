import React from "react";
import Card from "../Card/Card";
import "./Content.css";

const Content = () => {
  const [selectedItemName, setSelectedItemName] = React.useState();
  const [showSpinner, setShowSpinner] = React.useState(false);
  const [dataList, setDataList] = React.useState([]);

  React.useEffect(() => {
    console.log("USE EFFECT CALLED");
    setShowSpinner(true);
    
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => {
        setDataList(data.entries);
        setShowSpinner(false);
      });
  }, []);

  const handleClick = (selectedCardName) => {
    setSelectedItemName(selectedCardName);
  };

  return (
    <div className="container">
      {showSpinner ? (
        <h1>Loading !!!</h1>
      ) : (
        dataList.map((userData) => {
          const { API, Auth, Category } = userData;
          return (
            <Card
              title={API}
              name={Auth}
              category={Category}
              isSelected={selectedItemName === API}
              handleClickAction={handleClick}
            ></Card>
          );
        })
      )}
    </div>
  );
};

export default Content;
