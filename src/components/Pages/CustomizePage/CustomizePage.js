import React, { useState } from "react";
import "./CustomizePage.css";

function CustomizePage() {
  const [cart, setCart] = useState([]);

  const addToCart = (cake) => {
    console.log("Add to cart sec");
    setCart([...cart, cake]);
  };

  const [cakes] = useState([
    {
      image: "https://i.ibb.co/kHjh9PQ/Rectangle-19cake1.png",
      text: "Order now",
      name: "Vanilla Flavour Ginger Cake",
      category: "Category",
      price: "22,000",
    },

    {
      image: "https://i.ibb.co/LJKFG5X/Rectangle-20cake2.png",
      text: "Order now",
      name: "Vanilla Flavour Ginger Cake",
      category: "Category",
      price: "22,000",
    },

    {
        image: "https://i.ibb.co/kHjh9PQ/Rectangle-19cake1.png",
        text: "Order now",
        name: "Vanilla Flavour Ginger Cake",
        category: "Category",
        price: "22,000",
      },

    {
      image: "https://i.ibb.co/LJKFG5X/Rectangle-20cake2.png",
      text: "Order now",
      name: "Vanilla Flavour Ginger Cake",
      category: "Category",
      price: "22,000",
    },

    {
      image: "https://i.ibb.co/kHjh9PQ/Rectangle-19cake1.png",
      text: "Order now",
      name: "Vanilla Flavour Ginger Cake",
      category: "Category",
      price: "22,000",
    },

    {
        image: "https://i.ibb.co/LJKFG5X/Rectangle-20cake2.png",
        text: "Order now",
        name: "Vanilla Flavour Ginger Cake",
        category: "Category",
        price: "22,000",
      },

    {
        image: "https://i.ibb.co/kHjh9PQ/Rectangle-19cake1.png",
        text: "Order now",
        name: "Vanilla Flavour Ginger Cake",
        category: "Category",
        price: "22,000",
      },

    {
      image: "https://i.ibb.co/LJKFG5X/Rectangle-20cake2.png",
      text: "Order now",
      name: "Vanilla Flavour Ginger Cake",
      category: "Category",
      price: "22,000",
    },

    ]);
    return (
        <div className='c-bg'>
            <div className='c-heading'>
                <h1>Customize your Cake</h1>
                <img src='https://i.ibb.co/T0bJPBn/Group-65.png' alt='Group' />
            </div>

            <h2 className= "htag">Select a cake</h2>
            <div className='cake-display'>
                {cakes.map((cake, idx) => (
                <div key={idx}>
                    <div className='cake-container'>
                        <img className='cake-gallery' src={cake.image} alt={cake.name} />
                        <div className='cake-overlay overlay-left'>
                            <div className='cake-text'>
                                <a href='#0rdernow' onClick={() => addToCart(cake)}>
                                    {cake.text}
                                </a>
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
  );
}

export default CustomizePage;
