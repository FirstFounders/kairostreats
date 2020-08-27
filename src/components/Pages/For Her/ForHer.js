import React, { useContext, useEffect } from "react";
import CakesContext from "../../../contexts/cakes/cakesContext";
import "./ForHer.css";

import { Link } from "react-router-dom";
import { formatCurrency } from "../../../helpers";

function ForHer(props) {
  const cakesContext = useContext(CakesContext);
  useEffect(() => {
    cakesContext.getAllCakes();
  }, []);
  let { cakes } = cakesContext;
const id = props.match.params.category;
  cakes = cakes.filter((customize) => customize.category === id);

  return (
    <div className='Her-area'>
      <div className='Her-heading'>
        <h1>Cake {id}</h1>
        <img src='https://i.ibb.co/T0bJPBn/Group-65.png' alt='Group' />
      </div>
      {cakes.length > 0 ? (
        <div>
          <h2 className='htag'>Select a cake</h2>
          <div className='cake-display'>
            {cakes.map((cake, idx) => (
              <div key={idx}>
                <div className='cake-container'>
                  <img
                    className='cake-gallery'
                      src={'https://kairostreats.com/assets/images/cakes/'+cake.picture}
                    alt={cake.flavour}
                  />
                  <div className='cake-overlay overlay-left'>
                    <div className='cake-text'>
                      <Link to={`/product/${cake.id}`}>order now</Link>
                    </div>
                  </div>
                </div>

                <div className='cake-content'>
                  <h5>{cake.flavour}</h5>
              <Link to={'/categories/'+cake.category}>{cake.category}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            marginTop: "60px",
            fontWeight: "bold",
          }}
        >
          No cake found
        </h2>
      </div>
      )}
    </div>
  );
}

export default ForHer;
