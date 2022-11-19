import React from "react";
import "./App.css";
import { getWeather } from "./api/apiconect";

function App() {
  return (
    <div className="App">
      <button onClick={getWeather}>Get Weather</button>
    </div>
  );
}

export default App;
