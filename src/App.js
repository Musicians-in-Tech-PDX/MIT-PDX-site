import React from 'react';
import basicLogo from './assets/basic-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={basicLogo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://twitter.com/musicians_in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on Twitter
        </a>
      </header>
    </div>
  );
}

export default App;
