import React from 'react';
import './App.css';
import {Headers} from './Components/Headers';
import { About } from './Components/About';

const App = () => {
  return (
    <div className="App">
      <Headers />
      <About/>
    </div>
  );
};

export default App;
