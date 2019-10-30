import React from 'react';
import logo from './logo.svg';
import './App.css';
import Episodes from './components/Episodes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <Episodes></Episodes>
      </header>
    </div>
  );
}

export default App;
