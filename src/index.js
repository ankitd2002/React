import React from "react";
import ReactDOM from "react-dom";

const name = "Ankit";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 100)} </p>{" "}
  </div>,
  document.getElementById("root")
);
