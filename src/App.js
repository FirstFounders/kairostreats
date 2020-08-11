import React from "react";
import Navbar from "./components/Layouts/Navbar/Navbar";
import Home from "./components/Pages/Home";
import CustomizePage from "./components/Pages/CustomizePage/CustomizePage";
import Footer from "./components/Layouts/Footer/Footer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
// import './asset/css/stylesheet.css'
import CakeItem from "./components/Layouts/CakeItem/CakeItem";
import ForHer from "./components/Pages/For Her/ForHer";
import ForHim from "./components/Pages/ForHim/ForHim";

import CakesState from "./contexts/cakes/CakesState";
import OrderNow from "./components/Pages/OrderNow/OrderNow";

function App() {
  return (
    <CakesState>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forher' component={ForHer} />
            <Route path='/forhim' component={ForHim} />
            <Route path='/cakeitem' component={CakeItem} />
            <Route path='/customizepage' component={CustomizePage} />
            <Route path='/ordernow' component={OrderNow}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </CakesState>
  );
}

export default App;
