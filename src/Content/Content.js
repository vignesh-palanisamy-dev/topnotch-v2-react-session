import React from "react";
import Card from "../Card/Card";
import "./Content.css";

const Content = () => {
  const feMaleList = [
    { ttl: "Title1", name: "Saranya", gen: "f" },
    { ttl: "Title1", name: "Indhu", gen: "f" },
    { ttl: "Title1", name: "Ajitha", gen: "f" },
    { ttl: "Title1", name: "Madhu", gen: "f" },
  ];

  const maleList = [
    { ttl: "Title1", name: "Yogesh", gen: "m" },
    { ttl: "Title1", name: "Ajith", gen: "m" },
    { ttl: "Title1", name: "Kiruba", gen: "m" },
    { ttl: "Title1", name: "Illaya", gen: "m" },
  ];

  return (
    <div className="container">
      <h4>Start</h4>
      {[...feMaleList, ...maleList].map((userData) => {
        const { ttl, name, gen } = userData;
        return <Card title={ttl} name={name} gender={gen}></Card>;
      })}
      <h4>end</h4>
    </div>
  );
};

export default Content;
