import React from "react";
import "./AccContainer.css";
import Accordian from "../Accordian/Accordian";
import data from "../../../data";

const AccContainer = () => {
  return (
    <div className="accContainer max-width">
      <h2>Explore options near me</h2>
      {data.map((question) => (
        <Accordian question={question} key={question.id} />
      ))}
    </div>
  );
};

export default AccContainer;
