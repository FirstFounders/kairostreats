import React from "react";
import './App.css'
import Navbar from "./components/Layouts/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Footer from "./components/Layouts/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ForHer from "./components/Pages/For Her/ForHer";
import CakesState from "./contexts/cakes/CakesState";
import OrderNow from "./components/Pages/OrderNow/OrderNow";
import CartState from "./contexts/cart/CartState";
import success from "./components/Pages/success/success";

function App() {
  return (
    <CartState>
      <CakesState>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/categories/:category' component={ForHer} />
              {/* <Route path='/forhim' component={ForHim} />
              <Route path='/birthday' component={Birthday} />
              <Route path='/wedding' component={Wedding} /> */}
              {/* <Route path='/cakeitem' component={CakeItem} /> */}
              {/* <Route path='/customizepage' component={CustomizePage} /> */}
              <Route path='/product/:id' component={OrderNow} />
              {/* <Route path='/specialpage' component={SpecialPage} /> */}
              <Route path='/order/successful' component={success} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </CakesState>
    </CartState>
  );
}

export default App;
