import React, { useState, useContext, useEffect } from "react";
import "./Cartform.css";
import CartContext from "../../../../contexts/cart/cartContext";
import Axios from "axios";
import { Button, Modal } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
// import Aos from "aos"
// import "aos/dist/aos.css"

const Cartform = () => {
  const cartContext = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const { cart, totalPrice, clearCart } = cartContext;

  const handleSubmit = (e) => {
    setLoading(true);
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
      setVisible(true);
      console.log(res);
      setContent(
        <div style={{ width: "100%", height: "auto" }}>
          <iframe
            src={res.data.url}
            title=' '
            height='700px'
            width='100%'
          ></iframe>
        </div>
      );
      setLoading(false);
    }).catch((err)=>{
      console.log(err.response.data)
    });
    setVisible(false);
  };


  return (
    <div data-aos="fade-up" className='formContainer' id="form">
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
          <button type='submit'>
            {loading ? <EllipsisOutlined /> : "Pay"}
          </button>
        </div>
      </form>
      <Modal
        title='Payment Page'
        centered
        closable
        footer={null}
        visible={visible}
        bodyStyle={{ background: "#fff", padding: "0px", margin: "0px" }}
        style={{ background: "#fff", padding: "0px", margin: "0px" }}
        maskClosable={false}
        onOk={() => this.setModal1Visible(false)}
        onCancel={() => {
          clearCart();
          setLoading(false);
          setVisible(false);
        }}
      >
        {content}
      </Modal>
    </div>
  );
};

export default Cartform
