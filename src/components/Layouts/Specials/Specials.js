import React, { useEffect, useContext } from "react";
import "./Special.css";
import CakesContext from "../../../contexts/cakes/cakesContext";

import { Link } from "react-router-dom";
import { formatCurrency } from "../../../helpers";

function Specials() {
  const cakesContext = useContext(CakesContext);
  const { recommended_cakes, getRecommendedCakes } = cakesContext;

  useEffect(() => {
    getRecommendedCakes();
  }, []);
  const handleLeft = () => {
    const itemSize = document.querySelector(".special-flex-box")?.offsetWidth;
    const container = document.querySelector(".special-flex");
    container.scrollTo(
      container.scrollLeft - itemSize > 0 ? container.scrollLeft - itemSize : 0,
      0
    );
  };

  const handleRight = () => {
    const itemSize = document.querySelector(".special-flex-box")?.offsetWidth;
    const containerSize = document.querySelector(".special-flex")?.offsetWidth;
    const container = document.querySelector(".special-flex");
    container.scrollTo(
      container.scrollLeft + itemSize < containerSize
        ? container.scrollLeft + itemSize
        : containerSize,
      0
    );
  };

  const componentDidMount = () => {
    var timer = null;
    const container = document.querySelector(".special-flex");
    const itemSize = document.querySelector(".special-flex-box")?.offsetWidth;
    const back = document.querySelector(".scroll-back-button-control");
    const next = document.querySelector(".scroll-next-button-control");
    const containerSize = document.querySelector(".special-flex")?.offsetWidth;
    if (itemSize && containerSize) {
      container.addEventListener(
        "scroll",
        () => {
          if (timer !== null) {
            clearTimeout(timer);
          }
          if (container.scrollLeft < itemSize) {
            back.style.opacity = "0.1";
            back.style.cursor = "not-allowed";
          } else {
            back.style.opacity = "1";
            back.style.cursor = "pointer";
          }
          if (container.scrollLeft > containerSize - itemSize) {
            next.style.opacity = "0.1";
            next.style.cursor = "not-allowed";
          } else {
            next.style.opacity = "1";
            next.style.cursor = "pointer";
          }

          timer = setTimeout(function () {
            var scrollPast = Math.floor(container.scrollLeft / itemSize);
            var excess = Math.floor(container.scrollLeft % itemSize);
            if (excess < itemSize / 2) {
              container.scrollTo(itemSize * scrollPast, 0);
            } else {
              container.scrollTo(itemSize * (scrollPast + 1), 0);
            }
          }, 150);
        },
        false
      );
    }
  };
  return (
    <div className='bg-special' onLoad={componentDidMount()}>
      <div className='special-heading'>
        <h1>Specials</h1>
        <img src='https://i.ibb.co/T0bJPBn/Group-65.png' alt='Group' />
      </div>

      <div className='overall-special'>
        <div className='special-flex'>
          {recommended_cakes.map((cake, id) => (
            <div key={cake.id+cake.flavour+id} className='special-flex-box'>
              <Link to={`/product/${cake.id}`}>
                <img
                src={'https://kairostreats.com/assets/images/cakes/'+cake.picture}
                  alt='Ellipse-14cake2'
                />
              </Link>
              <div key={cake.id} className='s-text'>
                <h3>{cake.flavour}</h3>
                {/* <p>{formatCurrency(cake.size8)}</p> */}
              </div>
            </div>
          ))}
        </div>

        <div className='special-svg'>
          <div
            className='move backward scroll-back-button-control'
            onClick={handleLeft}
          >
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
          <div
            className='move forward scroll-next-button-control'
            onClick={handleRight}
          >
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

export default Specials;
