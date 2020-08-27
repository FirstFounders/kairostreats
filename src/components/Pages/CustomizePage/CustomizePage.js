import React, { useContext, useEffect } from "react";
import CakesContext from "../../../contexts/cakes/cakesContext";
import "./CustomizePage.css";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../helpers";

function CustomizePage() {
  const cakesContext = useContext(CakesContext);
  useEffect(() => {
    cakesContext.getAllCakes();
  }, []);
  let { cakes } = cakesContext;
  cakes = cakes.filter((customize) => customize.isCustomizable === "1");

  return (
    <div className='c-bg'>
      <div className='c-heading'>
        <h1>Customize your Cake</h1>
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
                  <h4>{formatCurrency(cake.size8)}</h4>
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
            No customizable cakes
          </h2>
        </div>
      )}
    </div>
  );
}

export default CustomizePage;
