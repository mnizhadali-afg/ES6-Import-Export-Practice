import React from "react";
import ReactDOM from "react-dom";
import * as c from "./calculator.js";

ReactDOM.render(
  <ul>
    <li>{c.default(2, 2)}</li>
    <li>{c.multiply(2, 3)}</li>
    <li>{c.subtract(7, 2)}</li>
    <li>{c.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
