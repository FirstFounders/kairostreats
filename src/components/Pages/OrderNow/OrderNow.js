import React, { useContext, useEffect, Fragment } from "react";
import CartContext from "../../../contexts/cart/cartContext";
import "./Order.css";
import Axios from "axios";
import { useState } from "react";
import { Modal, Upload, message } from "antd";
import Form from "./Form";
import { formatCurrency } from "../../../helpers";
import { Link } from "react-router-dom";
import Loading from "../../Layouts/Loading/Loading";

export default function OrderNow(props) {
  // console.log(props);
  const [product, setProduct] = useState({});
  const [note, setNote] = useState("");
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [fileList, updateFileList] = useState([]);
  const [flavours, setFlavours] = useState([]);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    Axios.get(`/products/${props.match.params.id}`).then((dt) => {
      // console.log(dt.data.data);
      setProduct(dt.data.data);
      setPrice(
        dt.data.data.pricing.size8
          ? dt.data.data.pricing.size8
          : dt.data.data.pricing.price
      );
      setSize(
        dt.data.data.pricing.size8 ? "size8" : dt.data.data.pricing.price
      );
    });
  }, [props.match.params.id]);
  // console.log(product.flavours);

  const { addProduct } = cartContext;
  const addToFlavours = (flavor) => {
    if (flavours.includes(flavor)) {
      setFlavours(flavours.filter((flav) => flav !== flavor));
    } else {
      setFlavours([...flavours, flavor]);
    }
  };
  // console.log(size);
  const addToCart = (prod) => {
    prod.price = price;
    prod.size = size;
    prod.note = note;
    if (fileList.length !== 0) prod.image = fileList[0].originFileObj;
    console.log(prod);
    addProduct(prod);
    message.success("Cake has been added to cart");
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const upload = {
    // API KEY
    fileList,
    listType: "picture",
    beforeUpload: (file) => {
      const isJPG = file.type === "image/jpg";
      const isJPEG = file.type === "image/jpeg";
      const isGIF = file.type === "image/gif";
      const isPNG = file.type === "image/png";
      if (!(isJPG || isJPEG || isGIF || isPNG)) {
        message.error(`${file.name} is not an image file`);
        // return ;
      }
      return isJPG || isJPEG || isGIF || isPNG;
    },
    onChange: (info) => {
      // file.status is empty when beforeUpload return false
      updateFileList(info.fileList.filter((file) => !!file.status));
      console.log(info.fileList);
    },
  };
 
  if (product.picture) {
    return (
      <div>
        <div className='order-container'>
          <div>
            <img
              className='cake-gallery'
              src={
                "https://kairostreats.com/assets/images/cakes/" +
                product.picture
              }
              alt={product.flavour}
            />
          </div>

          <div className='order-content'>
            <h4>{product.flavour}</h4>
            <Link to={"/categories/" + product.category}>
              {product.category}
            </Link>
            <div className='flavor-size'>
              <p>Select Size</p>
              <div>
                {product.pricing && product.pricing
                  ? Object.entries(product.pricing).map(([key, value]) => {
                      return (
                        <div id='ck-button' key={value}>
                          <label>
                            <input
                              type='radio'
                              name='size'
                              defaultValue={value}
                              onClick={() => {
                                setSize(key);
                                setPrice(value);
                              }}
                            />
                            <span>{key}</span>
                          </label>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
            <Fragment>
              {note.length < 3 ? (
                <button className='add-note'>
                  Add note
                  <span className='svg-plus'>
                    <svg
                      width='13'
                      height='13'
                      viewBox='0 0 13 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      onClick={showModal}
                    >
                      <path
                        d='M4.6121 7.53169H0V4.6121H4.6121V0H7.54579V4.6121H12.1579V7.53169H7.54579V12.1579H4.6121V7.53169Z'
                        fill='#F24472'
                      />
                    </svg>
                  </span>
                </button>
              ) : (
                <div className='note-area'>
                  <span>Note</span>
                  <div className='text-area-return'>
                    <form>
                      <textarea
                        rows={6}
                        type='text'
                        maxLength='120'
                        value={note}
                        disabled
                        readOnly
                      />
                    </form>

                    <div className='text-change-area'>
                      <span onClick={showModal}>Edit Note</span>
                      <span onClick={() => setNote("")}>Delete Note</span>
                    </div>
                  </div>
                </div>
              )}

              <Modal
                title='Vertically centered modal dialog'
                centered
                visible={visible}
                onCancel={handleCancel}
                okButtonProps={{ disabled: true }}
                cancelButtonProps={{ disabled: true }}
                className='Order-Modal'
                bodyStyle={{
                  // display: 'none',
                  background: "#F24472",
                }}
              >
                <div className='modal-bg'>
                  <span className='modal-btn' onClick={() => handleCancel()}>
                    <svg
                      width='1em'
                      height='1em'
                      viewBox='0 0 22 23'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21 1L1 22M1 1L21 22'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                      />
                    </svg>
                  </span>
                </div>
                <div className='form-container'>
                  <Form onCancel={handleCancel} addNote={setNote} />
                </div>
              </Modal>
              <p>Information that you provide on Note may affect base price</p>
              <p>Upload an image that you want printed on the cake(Optional)</p>
              <Upload {...upload}>
                <button className='upload-image'>
                  Upload picture
                  <span className='svg-plus2'>
                    <svg
                      width='13'
                      height='13'
                      viewBox='0 0 13 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4.6121 7.53169H0V4.6121H4.6121V0H7.54579V4.6121H12.1579V7.53169H7.54579V12.1579H4.6121V7.53169Z'
                        fill='#F24472'
                      />
                    </svg>
                  </span>
                </button>
              </Upload>
            </Fragment>

            <div className='add-cart'>
              <p className='total'>{formatCurrency(price)}</p>
              <div className='add-to-cart'>
                <button onClick={(e) => addToCart(product)}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else{
    return <Loading/>
  }
}
