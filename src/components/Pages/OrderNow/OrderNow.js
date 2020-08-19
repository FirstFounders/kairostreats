import React, { useContext, useEffect, Fragment } from "react";
import CartContext from "../../../contexts/cart/cartContext";
import "./Order.css";
import Axios from "axios";
import { useState } from "react";
import { Radio } from "antd";
import { Modal} from 'antd';
import { Upload} from 'antd';
import Form from './Form'


export default function OrderNow(props) {
  console.log(props);
  const [product, setProduct] = useState({});
  const [note, setNote] = useState("");
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState(product.size8)
  const [flavours, setFlavours] = useState([])
  const cartContext = useContext(CartContext);
  useEffect(() => {
    Axios.get(`/products/${props.match.params.id}`).then((dt) => {
      console.log(dt.data.data);
      setProduct(dt.data.data);
    });
  }, [props.match.params.id]);
  console.log(product.flavours);
  const { addProduct } = cartContext;

  const addToCart =(prod)=>{
    prod.price = size
    addProduct(prod)
  }

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  }

  const upload = {
    // API KEY
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then(res => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };

  

  return (
    <div>
      <div className='order-container'>
        <div>
          <img src={product.picture} alt='order' />
        </div>

        <div className='order-content'>
          <h4>{product.name}</h4>
          <h5>{product.category}</h5>
          <div className='flavor-category'>
            <p>Select flavour</p>
            <Radio.Group  defaultValue='' buttonStyle='solid'>
              {product.flavours &&
                product.flavours.map((flav) => (
                  <Radio.Button value={flav.flavour} key={flav.flavour}>
                    {flav.flavour}
                  </Radio.Button>
                ))}
            </Radio.Group>
          </div>
          <p>Select size</p>
          <div className='flavor-size'>
            <Radio.Group defaultValue={product.size8} onChange={(e)=>setSize(e.target.value)} buttonStyle='solid'>
                  <Radio.Button value={product.size8}>
                    8"
                  </Radio.Button>

                  <Radio.Button value={product.size10}>
                    10"
                  </Radio.Button>

                  <Radio.Button value={product.size12}>
                    12"
                  </Radio.Button>

            </Radio.Group>
          </div>
          {/* {product.isCustomizable === 1 && ( ) */}
            <Fragment>
            {note.length < 3?
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
              :
              <div className="note-area">
                <span>Note</span>
                <div className="text-area-return">
                  <form>
                  <textarea 
                  rows={6}
                  type="text"
                  maxLength="120"
                  value={note}
                  disabled
                  readOnly
                  />
                  </form>

                  <div className="text-change-area">
                  <span onClick={showModal}>Edit Note</span>
                  <span onClick={()=>setNote("")}>Delete Note</span>
                </div>
                </div> 
              </div>
            }
            
            <Modal
                  title="Vertically centered modal dialog"
                  centered
                  visible={visible}
                  onCancel={handleCancel}
                  okButtonProps={{ disabled: true }}
                  cancelButtonProps={{ disabled: true }}
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
                    <div className="form-container">
                      <Form onCancel={handleCancel} addNote={setNote}/>
                    </div>

                  </Modal>
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
            <p className='total'>N {size}</p>
            <span className='minus'>
              <svg
                width='12'
                height='13'
                viewBox='0 0 12 3'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 0H12V3H0V0Z' fill='white' />
              </svg>
            </span>
            <span className='one'>1</span>
            <span className='plus'>
              <svg
                width='13'
                height='13'
                viewBox='0 0 13 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4.82255 7.74214H0.210449V4.82255H4.82255V0.210449H7.75624V4.82255H12.3683V7.74214H7.75624V12.3683H4.82255V7.74214Z'
                  fill='White'
                />
              </svg>
            </span>
            <div className='add-to-cart'>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

