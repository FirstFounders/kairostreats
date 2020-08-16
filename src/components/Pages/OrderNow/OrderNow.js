import React, { useContext, useEffect, Fragment } from "react";
import CartContext from "../../../contexts/cart/cartContext";
import "./Order.css";
import Axios from "axios";
import { useState } from "react";
import { Radio } from "antd";

export default function OrderNow(props) {
  console.log(props);
  const [product, setProduct] = useState({});
  const cartContext = useContext(CartContext);
  useEffect(() => {
    Axios.get(`/products/${props.match.params.id}`).then((dt) => {
      console.log(dt.data.data);
      setProduct(dt.data.data);
    });
  }, [props.match.params.id]);
  console.log(product.flavours);
  const { addProduct } = cartContext;

  return (
    <div>
      <div className='order-container'>
        <div>
          <img src={product.picture} alt='order' />
        </div>

        <div className='order-content'>
          <h4>{product.name}</h4>
          <h5>{product.category}</h5>
          <div className='flavor-category'>
            <p>Select flavour</p>
            {/* <Radio.Group  defaultValue='' buttonStyle='solid'>
              {product.flavours &&
                product.flavours.map((flav) => (
                  <Radio.Button value={flav.flavour} key={flav.flavour}>
                    {flav.flavour}
                  </Radio.Button>
                ))}
            </Radio.Group> */}

            <div classname="button-group-pills text-center" data-toggle="buttons">
            {product.flavours &&
              product.flavours.map((flav) => (
                  <button value={flav.flavour} key={flav.flavour} > {flav.flavour}</button>
           ))}
            </div>
          </div>
          <p>Select size</p>
          <div className='flavor-size'>
            <Radio.Group defaultValue={product.size8} buttonStyle='solid'>
                  <Radio.Button value={product.size8}>
                    8"
                  </Radio.Button>

                  <Radio.Button value={product.size10}>
                    10"
                  </Radio.Button>

                  <Radio.Button value={product.size12}>
                    12"
                  </Radio.Button>

            </Radio.Group>
          </div>
          {/* {product.isCustomizable === 1 && ( ) */}
            <Fragment>
              <button className='add-note'>
                Add note
                <span className='svg-plus'>
                  <svg
                    width='13'
                    height='13'
                    viewBox='0 0 13 13'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4.6121 7.53169H0V4.6121H4.6121V0H7.54579V4.6121H12.1579V7.53169H7.54579V12.1579H4.6121V7.53169Z'
                      fill='#F24472'
                    />
                  </svg>
                </span>
              </button>
              <p>Upload an image that you want printed on the cake(Optional)</p>
              <button className='upload-image'>
                Upload picture
                <span className='svg-plus2'>
                  <svg
                    width='13'
                    height='13'
                    viewBox='0 0 13 13'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4.6121 7.53169H0V4.6121H4.6121V0H7.54579V4.6121H12.1579V7.53169H7.54579V12.1579H4.6121V7.53169Z'
                      fill='#F24472'
                    />
                  </svg>
                </span>
              </button>
            </Fragment>
          
          <div className='add-cart'>
            <p className='total'>N {product.size8}</p>
            <span className='minus'>
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
            <span className='one'>1</span>
            <span className='plus'>
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
            <div className='add-to-cart'>
              <button onClick={() => addProduct(product)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

