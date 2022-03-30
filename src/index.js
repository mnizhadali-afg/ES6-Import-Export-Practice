import React from "react";
import ReactDOM from "react-dom";
import add, { subtract, multiply, divide } from "./calculator.js";

ReactDOM.render(
  <ul>
    <li>{add(2, 2)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
