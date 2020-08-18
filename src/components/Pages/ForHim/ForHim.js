import React, { useContext, useEffect } from 'react';
import CakesContext from "../../../contexts/cakes/cakesContext";
import {Link} from 'react-router-dom'

import './ForHim.css'


function ForHim(){
    const cakesContext = useContext(CakesContext);
    useEffect(() => {
    cakesContext.getAllCakes();
}, []);
    const { cakes } = cakesContext;


        
    return(
        <div className="Him-area">
            <div className="Him-heading">
                <h1>Cake For Him</h1>
                <img src='https://i.ibb.co/T0bJPBn/Group-65.png' alt='Group' />
            </div>
            <h2 className= "htag">Select a cake</h2>
            <div className="him-display">
                {cakes.map((cake, id) => (
                    <div key={id}>
                        <div className="him-container">
                        <img className="him-gallery" src={cake.image} alt={cake.name}/>
                        <div className="him-overlay overlay-left">
                        <div className="him-text">
                            <Link to='/ordernow'>order now</Link>
                        </div>
                        </div>
                        </div>

                        <div className="him-content">
                            <h5>{cake.flavour}</h5>
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

export default ForHim