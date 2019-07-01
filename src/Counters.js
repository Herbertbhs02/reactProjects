import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Counter1 from "./2-counters/Counter1";
import Counter2 from "./2-counters/Counter2";

const Counters = () => (
  <div>
    <h1>Two Counters</h1>
    <div className="counters">
      <Counter1 />
      <Counter2 />
    </div>
  </div>
);

export default Counters;
