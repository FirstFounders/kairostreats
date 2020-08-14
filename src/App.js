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
import Birthday from "./components/Pages/Birthdays/Birthday";
import Wedding from "./components/Pages/Wedding/Wedding";
import SpecialPage from "./components/Pages/SpecialPage/SpecialPage";
import CartState from "./contexts/cart/CartState";

function App() {
  return (
    <CartState>
      <CakesState>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/forher' component={ForHer} />
              <Route path='/forhim' component={ForHim} />
              <Route path='/birthday' component={Birthday} />
              <Route path='/wedding' component={Wedding} />
              <Route path='/cakeitem' component={CakeItem} />
              <Route path='/customizepage' component={CustomizePage} />
              <Route path='/product/:id' component={OrderNow} />
              <Route path='/specialpage' component={SpecialPage} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </CakesState>
    </CartState>
  );
}

export default App;
