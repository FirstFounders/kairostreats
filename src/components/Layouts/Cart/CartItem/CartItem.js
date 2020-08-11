import React from 'react'

import './CartItem.css'


export default function CartItem(){
    return(
        <div className="overall-cart">
            <div className="cart-sec">
                <div className="cart-flex">
                <div>
                    <img src={require('../images/cake.png')} alt=""/> 
                </div>
                <div className="cart-container">
                    <div>
                    <h4>Vanilla flavour ginger cake</h4>
                    <h5 className="category">Category</h5>
                    </div>
                    <div className="cart-cal">
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                        

                        <p className="remove1"><span><svg width="14" height="20" viewBox="0 0 14 20" fill="#cccccc" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4873 5.28395L13.0511 3.97668C12.9633 3.71356 12.717 3.53613 12.4396 3.53613H1.07152C0.79414 3.53613 0.54789 3.71359 0.460078 3.97668L0.0238666 5.28395C-0.0749615 5.58012 0.145468 5.88606 0.457695 5.88606H13.0534C13.3657 5.88606 13.5861 5.58012 13.4873 5.28395Z" fill="#cccccc"/>
                        <path d="M2.05283 19.2092C2.10283 19.6592 2.48314 19.9996 2.93588 19.9996H10.503C10.9557 19.9996 11.336 19.6592 11.386 19.2092L12.7362 7.0578H0.702637L2.05283 19.2092Z" fill="#cccccc"/>
                        <path d="M5.57959 1.67961C5.57959 1.39965 5.80737 1.17188 6.08733 1.17188H7.81347C8.09343 1.17188 8.3212 1.39965 8.3212 1.67961V2.36449H9.49308V1.67961C9.49308 0.753477 8.7396 0 7.81347 0H6.08733C5.16119 0 4.40771 0.753477 4.40771 1.67961V2.36449H5.57959V1.67961Z" fill="#cccccc"/>
                        </svg></span><span className="remove2">Remove</span></p>
                    </div>
                </div>
                </div>
                

                <div className="total-cart">
                    <h4>Edit order</h4>
                    <br>
                    </br>
                    <br>
                    </br>
                    <p>N 23,000</p>
                </div>

                

            </div>

            
        </div>
    )

}