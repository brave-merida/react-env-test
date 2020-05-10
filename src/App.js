import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('NODE_ENV=', process.env.NODE_ENV);
  console.log('REACT_APP_TEST', process.env.REACT_APP_TEST);
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
