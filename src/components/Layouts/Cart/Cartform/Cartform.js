import React, { useState, useContext } from "react";
import "./Cartform.css";
import CartContext from "../../../../contexts/cart/cartContext";
import Axios from "axios";

const Cartform = () => {
  const cartContext = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { cart, totalPrice, checkout } = cartContext;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      address: address.toString(),
      phone_number: phone.toString(),
      email: email.toString(),
      amount: totalPrice,
      products: cart,
    };
    console.log(formData);
    Axios.post("/order", formData).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <div className='inputField'>
          <label htmlFor='name'>Name</label> <br />
          <input
            type='text'
            name='name'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className='inputField'>
          <label htmlFor='email'>Email Address</label> <br />
          <input
            type='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='inputField'>
          <label htmlFor='phone'>Phone Number</label> <br />
          <input
            type='tel'
            name='phone'
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className='inputField'>
          <label htmlFor='address'>Delivery Address</label> <br />
          <input
            type='text'
            name='address'
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className='submitField'>
          <button type='submit'>Proceed</button>
        </div>
      </form>
    </div>
  );
};

