import React, { useState } from "react";
import "./App.css";
import Gauses from "./Gauses";
import LineChart from "./LineChart";
import Switch from "./Switch";

function App() {
  const [show, setShow] = useState({
    therm_1: false,
    therm_2: false,
    therm_3: false,
    therm_4: false,
  });

  return (
    <div className="App">
      <div className="App-Gauses">
        <Gauses title="Therm_1" />
        <Gauses title="Therm_2" />
        <Gauses title="Therm_3" />
        <Gauses title="Therm_4" />
      </div>
      <div className="App-Switch">
        <Switch id="therm_1" title="Therm_1" show={show} setShow={setShow} />
        <Switch id="therm_2" title="Therm_2" show={show} setShow={setShow} />
        <Switch id="therm_3" title="Therm_3" show={show} setShow={setShow} />
        <Switch id="therm_4" title="Therm_4" show={show} setShow={setShow} />
      </div>
      <div className="App-LineChart">
        {show.therm_1 && <LineChart title="Therm_1" />}
        {show.therm_2 && <LineChart title="Therm_2" />}
        {show.therm_3 && <LineChart title="Therm_3" />}
        {show.therm_4 && <LineChart title="Therm_4" />}
      </div>
    </div>
  );
}

export default App;
