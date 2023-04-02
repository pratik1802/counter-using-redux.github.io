// import logo from './logo.svg';
import "./App.css";
import React from "react";
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import{Inc,Dec} from './states/reducers/Reducers'



function App() {
const curState=useSelector((state)=>state.number);
const  mipan = useDispatch();

  return (
    <div className="App">
      <h1>React redux tutorial</h1>
      <div>
        <h1>{curState}</h1>
        <button onClick={()=>mipan(Inc())}>inc</button>
        <button onClick={()=>mipan(Dec())}>inc</button>
      </div>
    </div>
  );
}

export default App;
