import React from 'react';
import './App.css';
import { Headers } from './Components/Headers';
import { Projects } from './Components/Projects';

const App = () => {
  return (
    <div className="App">
      <Headers />
      <Projects />
    </div>
  );
};

export default App;
