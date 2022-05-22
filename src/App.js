import React from "react";
import './App.css';
import store from "./store";

function App() {
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count:{store.getState().count}</p>
    </div>
  );
}

export default App;
