import React, { useState, Fragment } from 'react'

import {Link} from 'react-router-dom'


import  './Cart.css'

export default function Cart(){
    const [cart, setCart] = useState([])
    return(
        <div>
            <div className="overlay-header">
                <h3>Your Orders</h3>
                <span><img src={require('./images/overlayicon.png')} alt="overlay"/></span>

                    <div className="model-content">
                        {!cart.length<1  ? (cart.map((cartItem)=>(<h1>Cart</h1>))): (
                            <Fragment>
                                <h3>Your Basket is empty</h3>
                                <Link to="/cakeitem">
                                <button>Shop Now</button>
                                </Link>
                            </Fragment>
                        )}
                    </div>
            </div>
        </div>
        
    )
}