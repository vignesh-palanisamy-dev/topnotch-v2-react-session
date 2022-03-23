import React from "react";
import Card from "./Card";

const App = () => {
  return (
    //"flex-wrap"
    <div
      id="im-app-component"
      style={{ display: "flex", flexWrap: "wrap", rowGap: 8, columnGap: 8 }}
    >
      {/* <p> Hey I am your react app</p> */}
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default App;
