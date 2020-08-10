import React, { useState, Fragment } from 'react'

import {Link} from 'react-router-dom'

import CartItem from './CartItem/CartItem'

import  './Cart.css'

export default function Cart(){
    const [cart, setCart] = useState([1,,2,2,])
    return(
        <div>
            <div className="overlay-header">
                <h3>Your Orders</h3>
                <span><img src={require('./images/overlayicon.png')} alt="overlay"/></span>

                    <div className="model-content">
                        {!cart.length > 0 ? (
                            <Fragment>
                            <h3>Your Basket is empty</h3>
                            <Link to="/cakeitem">
                            <button>Shop Now</button>
                            </Link>
                        </Fragment>
                        ):(<Fragment>
                            {cart.map(item=>(<CartItem/>))}
                            <h2>Total</h2>
                            <p>45000</p>
                            </Fragment>)}
                    </div>
            </div>
        </div>
        
    )
}