import React from 'react';
import logo from './logo.svg';
import './App.css';


import { createStore } from 'redux'

const initialState = [{
    user: '',
    password: 'false'
  }]

const reducer = (state = initialState, action) =>{
if (action.type === "NEWUSER"){
return action.payload
}
}

let store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({type: 'NEWUSER', payload: {user: 'brad',password: 'password'}})




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
