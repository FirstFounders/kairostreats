import React from 'react'

import  './Order.css'


export default function OrderNow(){
    return(
        <div>
            <div className="order-container">
                <div>
                    <img src="https://i.ibb.co/kHjh9PQ/Rectangle-19cake1.png" alt="order"/>
                </div>

                <div className="order-content">
                    <h4>Vanilla flavour ginger cake</h4>
                    <h5>Category</h5>
                    <p>Select flavour</p>
                    <div className="flavor-category">
                        <button>Vanilla</button>
                        <button>Strawberry</button>
                        <button>Chocolate</button>
                        <button>Red Velvet</button>
                    </div>
                    <p className="select">Select size</p>
                    <div className="flavor-size">
                        <button>8"</button>
                        <button>10"</button>
                        <button>12"</button>
                    </div>
                    <button className="add-note">Add note <span className="svg-plus"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6121 7.53169H0V4.6121H4.6121V0H7.54579V4.6121H12.1579V7.53169H7.54579V12.1579H4.6121V7.53169Z" fill="#F24472"/>
                    </svg></span></button>
                    <p className="upload">Upload an image that you want printed on the cake(Optional)</p>
                    <button className="upload-image">Upload picture<span className="svg-plus2"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6121 7.53169H0V4.6121H4.6121V0H7.54579V4.6121H12.1579V7.53169H7.54579V12.1579H4.6121V7.53169Z" fill="#F24472"/>
                    </svg></span></button>
                    <div className="add-cart">
                        <p className="total">N 24, 000</p>
                        <span className="minus"><svg width="12" height="13" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H12V3H0V0Z" fill="white"/>
                        </svg>
                        </span>
                        <span className="one">1</span>
                        <span className="plus">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.82255 7.74214H0.210449V4.82255H4.82255V0.210449H7.75624V4.82255H12.3683V7.74214H7.75624V12.3683H4.82255V7.74214Z" fill="White"/>
                        </svg>
                        </span>
                        <div className="add-to-cart" >
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}