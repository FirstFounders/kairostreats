import React, {useContext, useEffect} from 'react'
import CakesContext from "../../../contexts/cakes/cakesContext";
import "./ForHer.css"

import {Link} from 'react-router-dom'


function ForHer(){
    const cakesContext = useContext(CakesContext);
    useEffect(() => {
    cakesContext.getAllCakes();
}, []);
    const { cakes } = cakesContext;
    return(
        <div className="Her-area">
            <div className="Her-heading">
                <h1>Cake For Her</h1>
                <img src='https://i.ibb.co/T0bJPBn/Group-65.png' alt='Group' />
            </div>
            
            <h2 className= "htag">Select a cake</h2>
            <div className="her-display">
                {cakes.map((cake, id) => (
                    <div key={id}>
                        <div className="her-container">
                            <img className="her-gallery" src={cake.picture} alt={cake.name}/>
                            <div className="her-overlay overlay-left">
                            <div className="her-text">
                            <Link to={`/product/${cake.id}`}>order now</Link>
                            </div>
                            </div>
                        </div>

                        <div className="her-content">
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

export default ForHer