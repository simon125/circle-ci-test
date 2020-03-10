import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState('');

  useEffect(() => {
    loadCounterFromDB();
  }, []);

  const loadCounterFromDB = async () => {
    const currentCounter = await getCurrent();
    setCounter(currentCounter);
  };
  const handleAddClick = async () => {
    const newFig = await addToCurrent();
    setCounter(newFig);
  };

  const handleMinusClick = async () => {
    const newFig = await minusFromCurrent();
    setCounter(newFig);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dummy text for commit</h1>
        <p>
          This is very dummy app for clicking
          <span role="img" aria-label="icon">
            🖱
          </span>
          <span role="img" aria-label="icon">
            👈
          </span>
          , however this is MERN stack app
          <span role="img" aria-label="icon">
            😆
          </span>
        </p>
        <div className="container">
          <button onClick={handleAddClick} className="btn">
            Click here to increase your number{' '}
            <span role="img" aria-label="icon">
              ☝
            </span>
          </button>
          <span className="figure">{counter}</span>
          <button onClick={handleMinusClick} className="btn">
            Click here to decrease your number{' '}
            <span role="img" aria-label="icon">
              👇
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}

const getCurrent = async () => {
  try {
    const resp = await fetch('/current');
    const data = await resp.json();
    return data.value;
  } catch (error) {
    return 0;
  }
};

const addToCurrent = async () => {
  try {
    const resp = await fetch('/current/add');
    const data = await resp.json();
    return data.value;
  } catch (error) {
    return 0;
  }
};

const minusFromCurrent = async () => {
  try {
    const resp = await fetch('/current/minus');
    const data = await resp.json();
    return data.value;
  } catch (error) {
    return 0;
  }
};

export default App;
