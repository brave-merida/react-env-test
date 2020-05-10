import React from 'react';
import logo from './logo.svg';
import './App.css';
/**
 * NODE_ENV depends on build type
 * If HEROKU ENV is exists, the app is using that
 * If HEROKU ENV does not exist, the app is using .env
 */
function App() {
  
  console.log('NODE_ENV=', process.env.NODE_ENV);
  console.log('REACT_APP_TEST=', process.env.REACT_APP_TEST);
  console.log('REACT_APP_FROM_DOTENV=', process.env.REACT_APP_FROM_DOTENV);
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
