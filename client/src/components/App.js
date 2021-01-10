import React, { Component } from "react";
import GoodBoiMeter from "./GoodBoiMeter";
import DogViewer from "./DogViewer";

import "./App.css";
import "../utilities.css";

const { useState } = React;

const App = () => {
  const [breed, setBreed] = useState("pembroke");
  const [iteration, setIteration] = useState(0);

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      // 13 is the enter key
      if (event.target.value === "") {
        // refresh the current dog if you just hit enter
        setIteration(iteration + 1);
      } else {
        // load a new dog if you typed a breed
        setBreed(event.target.value);
        setIteration(iteration + 1);
        event.target.value = "";
      }
    }
  };

  return (
    <div className="u-flex u-flexColumn u-flex-alignCenter">
      <label className="App-label" htmlFor="dog-breed">
        enter dog breed:
      </label>
      <input onKeyDown={onKeyDown} id="dog-breed" autoComplete="off" />
      <GoodBoiMeter breed={breed} />
      <DogViewer breed={breed} iteration={iteration} />
    </div>
  );
};

export default App;
