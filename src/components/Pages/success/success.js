import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
import queryString from "querystring";

import "./success.css";
import Loading from "../../Layouts/Loading/Loading";
import { Link } from "react-router-dom";

const Success = (props) => {
  const [status, setStatus] = useState(false);
  const [response, setResponse] = useState(false);

  // const params = queryString.parse(props.location.search);
  useEffect(() => {
    // const params = queryString.parse(props.location.search);
      const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('transaction_id');
    // console.log(id)
    Axios.get(`/order/status/${id}`).then((res) => {
      if(res.status === 200){
        setStatus(true);
        setResponse(true);
      }else{
        setResponse(false);
        setStatus(true);
      }
    }).catch((err)=>{
      setStatus(true);
      setResponse(false)
    });
  }, [props.location.search]);

  // console.log(queryString.parse(props.location.search));
  if(status){
    return ReactDOM.render(
    <div className='success-container'>
      {/* <div className='printer-top' /> */}
      {/* <div className='paper-container'> */}
        {/* <div className='printer-bottom' /> */}
        <div className='paper'>
          <div className='main-contents'>
          {
            response?
            <div className='success-icon'>✔</div>
:
<p className='fail-icon'> &#10005;</p>

          }
          {
            response?
            <div className='success-title'>Payment Complete</div>
:
<div className='success-title'>Payment Failed</div>

          }
          {
            response?
            <div className='success-description'>
              Details has been sent to your email
            </div>
            : 
            <div className='success-description'>
             Error while paying !<br /> Try Again
            </div>
            
          }
          {
            response?
            <div className='order-footer'>Thank you!</div>
            : null}
            
          {
            response?
            <Link
            style={{
              color:'white',
              display:'block',
              textAlign:'center',
              padding:'10px',
              border:'1px solid white'
            }}
             to='/'>Go Home</Link>
             :
            <Link
            style={{
              color:'white',
              display:'block',
              textAlign:'center',
              padding:'10px',
              border:'1px solid white'
            }}
             to='/'>Try Again</Link>
          }

          </div>
          {/* <div className='jagged-edge' /> */}
        </div>
      {/* </div> */}
    </div>

  )
}else{
  
  return ReactDOM.render(<Loading />)
}
}
export default Success;
