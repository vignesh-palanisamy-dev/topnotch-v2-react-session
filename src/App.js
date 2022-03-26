import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Counter from "./Counter/Counter";

const App = () => {
  return (
    // React Fragment <> </>
    <>
      {/* <Counter></Counter> */}
      <Header></Header>
      <Content></Content>
    </>
  );
};

export default App;
