import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddJson from './pages/AddJson';
import ViewJson from './pages/ViewJson';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-json" element={<AddJson />} />
        <Route path="/view-json" element={<ViewJson />} />
      </Routes>
    </Router>
  );
};

export default App;
