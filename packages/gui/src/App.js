import React from 'react';
import logo from './logo.svg';
import './App.css';
import { testEs6, testSpreadOperator } from '@walnut/common/es6Export';
import JSONTree from 'react-json-tree'
const commonFunction = require("@walnut/common");



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.dd{testEs6()}
          <JSONTree data={testSpreadOperator()} />
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
