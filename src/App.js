import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Screen from "./Screen";

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Screen />
      </div>
    </div>
  );
}

export default App;
