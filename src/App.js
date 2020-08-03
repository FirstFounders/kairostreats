import React from 'react';
import Home from './components/Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import './asset/css/stylesheet.css'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home/>
    </div>
    </BrowserRouter>
  );
}

export default App;
