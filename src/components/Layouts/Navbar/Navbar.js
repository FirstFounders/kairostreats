import React, { useState, useContext, useEffect } from "react";
import CakesContext from "../../../contexts/cakes/cakesContext";
import { Link } from "react-router-dom";
import CartContext from "../../../contexts/cart/cartContext";
import { Drawer } from "antd";
import Cart from "../Cart/Cart";
import "./Navbar.css";

function Navbar() {
  const cartContext = useContext(CartContext);
  const cakesContext = useContext(CakesContext);

  useEffect(() => {
  cakesContext.getCategories();
}, []);
  const [visible, setVisible] = useState(false);

  const { cart } = cartContext;
  const { categories } = cakesContext;
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav>
      <Link to='/'>
        <ul>
          <li>
            <img src={require("./images/logo.png")} alt="Kairo's" />
          </li>
        </ul>
      </Link>
      <ul>
        <li className='menu'>
          <Link to='/'>
            Categories <i className='fa fa-caret-down' aria-hidden='true'></i>
          </Link>
          <ul className='sub-menu'>
          {categories.map((category) => (
            <li key={category.category}>
              <Link to={'/categories/'+category.category}>{category.category}</Link>
            </li>
          ))}
          </ul>
        </li>

        {/* <li className='menu'>
          <Link to='/customizepage'>Customize Cake</Link>
        </li> */}

        <li className='screen-menu'>
          <Link to='/'>
            Cakes <i className='fa fa-caret-down' aria-hidden='true'></i>
          </Link>
          <ul className='sub-menu'>
          {categories.map((category) => (
            <li key={category.category}>
              <Link to={'/categories/'+category.category}>{category.category}</Link>
            </li>
          ))}
          </ul>
        </li>
      </ul>
      


      <ul>
        <li className='open-modal' onClick={showDrawer}>
          <img src={require("./images/basket.png")} alt="Kairo's" />
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              padding: "1px 5px",
            }}
          >
            {cart.length}
          </span>
        </li>
        <Drawer
          // className="ant-drawer-body"
          // width='700px'
          // width={isMobile ? "700px" : "300px"}
          placement='right'
          closable={false}
          onClose={onClose}
          visible={visible}
          drawerStyle={{
            background: "#F24472",
            // width: "700px",
          }}
        >
          <div className='close-bg'>
            <span className='close-modal-btn' onClick={() => onClose()}>
              <svg
                width='20'
                height='20'
                viewBox='0 0 22 23'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21 1L1 22M1 1L21 22'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </span>
          </div>
          <div>
            <Cart />
          </div>
        </Drawer>
      </ul>
    </nav>
  );
}

export default Navbar;
