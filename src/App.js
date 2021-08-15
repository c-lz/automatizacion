import "./App.css";
import Gauses from "./Gauses";
import LineChart from "./LineChart";

function App() {
  return (
    <div className="App">
      <div className="App-Gauses">
        <Gauses />
        <Gauses />
        <Gauses />
        <Gauses />
      </div>
      <div className="App-LineChart">
        <LineChart />
        <LineChart />
        <LineChart />
        <LineChart />
      </div>
    </div>
  );
}

export default App;
