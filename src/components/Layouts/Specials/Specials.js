import React, { useEffect, useContext } from "react";
import "./Special.css";
import CakesContext from "../../../contexts/cakes/cakesContext";


import {Link} from 'react-router-dom'

function Special() {
  const cakesContext = useContext(CakesContext);
  const { recommended_cakes, getRecommendedCakes } = cakesContext;

  useEffect(() => {
    getRecommendedCakes();
  }, []);

  return (
    <div className='bg-special'>
      <div className='special-heading'>
        <h1>Specials</h1>
        <img src='https://i.ibb.co/T0bJPBn/Group-65.png' alt='Group' />
      </div>
  
      <div className='overall-special'>
        <div className='special-flex'>
          {recommended_cakes.map((cake) => (
            <div>
              <Link to="/SpecialPage">
                <img
                src='https://i.ibb.co/1JJyMhk/Ellipse-14cake2.png'
                alt='Ellipse-14cake2'
                />
              </Link>
              <div className='s-text'>
                <h3>{cake.name}</h3>
                <p>N {cake.price}</p>
              </div>
            </div>
          ))}
        </div>
        

        <div className='special-svg'>
          <div className='move backward'>
            <svg
              width='21'
              height='16'
              viewBox='0 0 21 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z'
                fill='#000000'
              />
            </svg>
          </div>
          <div className='dot'> </div>
          <div className='dot'> </div>
          <div className='dot'> </div>
          <div className='dot'> </div>
          <div className='move forward'>
            <svg
              width='21'
              height='16'
              viewBox='0 0 21 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9L20 9V7L0 7L0 9Z'
                fill='#000000'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Special;
