import React, { Component, useState, useRef } from "react";
import GoodBoiMeter from "./GoodBoiMeter";
import DogViewer from "./DogViewer";
import Card from "./Card";
import useTimer from "./Timer";

import "./App.css";
import "../utilities.css";

const App = () => {
  const [breed, setBreed] = useState("pembroke");
  const [iteration, setIteration] = useState(0);
  const ref = useRef(null);
  const timer = useTimer(1000);

  const onKeyDown = event => {
    if (event.keyCode === 13) {
      // 13 is the enter key
      if (event.target.value === "") {
        // refresh the current dog if you just hit enter
        setIteration(prevIteration => prevIteration + 1);
      } else {
        // load a new dog if you typed a breed
        setBreed(event.target.value);
        setIteration(prevIteration => prevIteration + 1);
        event.target.value = "";
      }
    }
  };

  return (
    <div className="u-flex u-flexColumn u-flex-alignCenter">
      <label className="App-label" htmlFor="dog-breed">
        enter dog breed:
      </label>
      <input ref={ref} onKeyDown={onKeyDown} id="dog-breed" autoComplete="off" />
      <Card contents={<GoodBoiMeter breed={breed} />} />
      <Card contents={<DogViewer breed={breed} iteration={iteration} />} />
      Count: {timer} and Value of input updated 1/sec: {ref.current?.value};
    </div>
  );
}

export default App;
