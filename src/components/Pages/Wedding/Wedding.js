import React, { useContext, useEffect } from "react";
import CakesContext from "../../../contexts/cakes/cakesContext";
import CartContext from "../../../contexts/cart/cartContext";
import { Link } from "react-router-dom";


function Wedding(){
    const cakesContext = useContext(CakesContext);
    const cartContext = useContext(CartContext);

    useEffect(() => {
    cakesContext.getAllCakes();
}, []);
    const { addProduct } = cartContext;
    const { cakes } = cakesContext;

    return(
        <div>
            <div className='c-heading'>
                <h1>Wedding Cake</h1>
                <img src='https://i.ibb.co/T0bJPBn/Group-65.png' alt='Group' />
            </div>

            <h2 className= "htag">Select a cake</h2>
            <div className='cake-display'>
                {cakes.map((cake, idx) => (
                <div key={idx}>
                <div className='cake-container'>
                <img
                className='cake-gallery'
                src={cake.picture}
                alt={cake.name}
                />
                <div className='cake-overlay overlay-left'>
                    <div className='cake-text'>
                        <Link to={`/product/${cake.id}`}>order now</Link>
                    </div>
                </div>
                </div>

                <div className='cake-content'>
                <h5>{cake.name}</h5>
                <p>{cake.category}</p>
                <h4>N {cake.price}</h4>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}

export default Wedding;