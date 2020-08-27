import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./CartItem.css";
import { formatCurrency } from "../../../../helpers";
import CartContext from "../../../../contexts/cart/cartContext";

export default function CartItem({ product, remove }) {
  const [quan, setQty] = useState(product.quantity);
  const cartContext = useContext(CartContext);

  const { increase, decrease } = cartContext;
  return (
    <div className='overall-cart'>
      <div className='cart-sec'>
        <div className='cart-flex'>
          <div className='cart-img'>
            <img
              className='cake-gallery'
              src={
                "https://kairostreats.com/assets/images/cakes/" +
                product.picture
              }
              alt={product.flavour}
            />
          </div>
          <div className='cart-container'>
            <div>
              <h4>{product.flavour}</h4>
              <Link to={"/categories/" + product.category}>
                {product.category}
              </Link>
            </div>
            <div className='cart-cal'>
              {product.quantity > 1 && (
                <span
                  className='minus'
                  onClick={(e) => {
                    e.preventDefault();
                    setQty((quan) => quan - 1);
                    decrease(product, quan);
                  }}
                >
                  <svg
                    width='12'
                    height='13'
                    viewBox='0 0 12 3'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M0 0H12V3H0V0Z' fill='white' />
                  </svg>
                </span>
              )}
              <span className='one'>{quan}</span>
              <span
                className='plus'
                onClick={(e) => {
                  e.preventDefault();
                  setQty((quan) => quan + 1);
                  increase(product, quan);
                }}
              >
                <svg
                  width='13'
                  height='13'
                  viewBox='0 0 13 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.82255 7.74214H0.210449V4.82255H4.82255V0.210449H7.75624V4.82255H12.3683V7.74214H7.75624V12.3683H4.82255V7.74214Z'
                    fill='White'
                  />
                </svg>
              </span>

              <p className='remove1' onClick={remove}>
                <span>
                  <svg
                    width='14'
                    height='20'
                    viewBox='0 0 14 20'
                    fill='#cccccc'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.4873 5.28395L13.0511 3.97668C12.9633 3.71356 12.717 3.53613 12.4396 3.53613H1.07152C0.79414 3.53613 0.54789 3.71359 0.460078 3.97668L0.0238666 5.28395C-0.0749615 5.58012 0.145468 5.88606 0.457695 5.88606H13.0534C13.3657 5.88606 13.5861 5.58012 13.4873 5.28395Z'
                      fill='#cccccc'
                    />
                    <path
                      d='M2.05283 19.2092C2.10283 19.6592 2.48314 19.9996 2.93588 19.9996H10.503C10.9557 19.9996 11.336 19.6592 11.386 19.2092L12.7362 7.0578H0.702637L2.05283 19.2092Z'
                      fill='#cccccc'
                    />
                    <path
                      d='M5.57959 1.67961C5.57959 1.39965 5.80737 1.17188 6.08733 1.17188H7.81347C8.09343 1.17188 8.3212 1.39965 8.3212 1.67961V2.36449H9.49308V1.67961C9.49308 0.753477 8.7396 0 7.81347 0H6.08733C5.16119 0 4.40771 0.753477 4.40771 1.67961V2.36449H5.57959V1.67961Z'
                      fill='#cccccc'
                    />
                  </svg>
                </span>
                <span className='remove2'>Remove</span>
              </p>
            </div>
          </div>
        </div>

        <div className='total-cart'>
          <Link to={`/product/${product.id}`}>
            <h4>Edit order</h4>
          </Link>
          <br></br>
          <br></br>
          <p>{formatCurrency(product.price)}</p>
        </div>
      </div>
    </div>
  );
}
