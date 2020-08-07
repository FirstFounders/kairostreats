import React from 'react';
import Navbar from './components/Layouts/Navbar';
import Home from './components/Pages/Home';
import CustomizePage from './components/Pages/CustomizePage/CustomizePage';
import Footer from './components/Layouts/Footer/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './asset/css/stylesheet.css'



function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/customizepage" component={CustomizePage} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
