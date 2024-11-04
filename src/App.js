

import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  
  

  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<News category='general' />} />
        <Route path="/sports" element={<News key="sports" category='sports' />} />
        <Route path="/entertainment" element={<News key="entertainment" category='entertainment' />} />
        <Route path="/cricket" element={<News key="cricket" category='cricket' />} />
        <Route path="/business" element={<News key="business" category='business' />} />
        <Route path="/general" element={<News key="general" category='general' />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;