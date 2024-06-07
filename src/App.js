import React from 'react';
import './App.css';
import { Headers } from './Components/Headers';
import { Projects } from './Components/Projects';
import { Id } from './Components/Id';

const App = () => {
  return (
    <div className="App">
      <Headers />
      <Id/>
      <Projects />
    </div>
  );
};

export default App;
