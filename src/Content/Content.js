import React from "react";
import Card from "../Card/Card";
import "./Content.css";

const Content = () => {
  const [selectedItemName, setSelectedItemName] = React.useState();
  const [showSpinner, setShowSpinner] = React.useState(false);
  const [dataList, setDataList] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState();

  React.useEffect(() => {
    console.log("COMPONENT MOUNT");
    setShowSpinner(true);

    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => {
        setDataList(data.entries);
        setShowSpinner(false);
      });
  }, []);

  React.useEffect(() => {
    console.log("COMPONENT UPDATE");
    const selectedItem = dataList.find(({ API }) => selectedItemName === API);
    console.log({ selectedItem });
    const { Category } = selectedItem || {};
    setSelectedCategory(Category);
  }, [selectedItemName]);

  const handleClick = (selectedCardName) => {
    setSelectedItemName(selectedCardName);
  };

  return (
    <div className="container">
      <p>Selcted Category : {selectedCategory || "-"}</p>
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
