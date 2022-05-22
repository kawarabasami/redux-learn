import React from "react";
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import Count from './components/count'

function App() {
  const count = useSelector((state) => state.countReducer.count);

  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: 'INCREASE_COUNT'});
  }
  const decrease = () => {
    dispatch({type: 'DECREASE_COUNT'});
  }
  const addArray = () => {
    dispatch({type: 'ADD_ARRAY'});
  }

  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count:{count}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <button onClick={addArray}>add</button>
      <Count />
    </div>
  );
}

export default App;
