import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { Headers } from './Components/Headers';
import { Projects } from './Components/Projects';
import { Id } from './Components/Id';

const App = () => {
  return (
    <div className="App">
      <motion div className='cursor'></motion>
      <Headers />
      <Id/>
      <Projects />
    </div>
  );
};

export default App;
