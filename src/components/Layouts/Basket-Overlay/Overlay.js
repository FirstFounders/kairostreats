import React from 'react'
import  './Overlay.css'


export default function Overlay({show, closeModalHandler}){
    return(
        <div>
        {/* {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null} */}
        <div className="overlay-wrapper"
            style={{
                opacity: show ? '1' : '0'
            }}
            
        >
            <div className="overlay-header">
                
                <span onClick={closeModalHandler}  className="close-modal-btn">
                <svg  width="21" height="20" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 1L1 22M1 1L21 22" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg> 
                </span>
                <h3>Your Orders</h3>
                
            </div>

            <div className="model-content">
            <span><img src={require('./images/overlayicon.png')} alt="overlay"/></span>
                <h3>Your basket is empty!</h3>
                <button>Shop Now</button>

            </div>
        </div>
        </div>
    )
}