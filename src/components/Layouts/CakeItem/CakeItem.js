import React, { useContext, useEffect } from "react";
import CakesContext from "../../../contexts/cakes/cakesContext";
import CartContext from "../../../contexts/cart/cartContext";
import "./CakeItem.css";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../helpers";
import Loading from "../Loading/Loading";

function CakeItem() {
  const cakesContext = useContext(CakesContext);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    cakesContext.getAllCakes();
  }, []);

  const { addProduct, cart } = cartContext;
  const { cakes, loading } = cakesContext;

  const isInCart = (product) => {
    return cart.find((item) => item.id === product.id);
  };

  return (
    <div className='c-bg'>
      <div className='c-heading'>
        <h1>Creamy Cake</h1>
        <img src='https://i.ibb.co/T0bJPBn/Group-65.png' alt='Group' />
      </div>
      {loading && <Loading />}
      <div className='cake-display'>
        {cakes.slice(0, 6).map((cake, idx) => (
          <div key={idx}>
            <div className='cake-container'>
              <img
                // className='cake-gallery'
                src={
                  "https://kairostreats.com/assets/images/cakes/" + cake.picture
                }
                alt={cake.flavour}
              />
              <div className='cake-overlay overlay-left'>
                <div className='cake-text'>
                  {!isInCart(cake) ? (
                    <Link to={`/product/${cake.id}`}>order now</Link>
                  ) : (
                    <p>Added to cart</p>
                  )}
                </div>
              </div>
            </div>

            <div className='cake-content'>
              <h5>{cake.flavour}</h5>
              <Link to={"/categories/" + cake.category}>{cake.category}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CakeItem;
