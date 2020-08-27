import React from "react";
import { useEffect, useContext } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
import queryString from "querystring";

import "./success.css";

const Success = (props) => {
  const params = queryString.parse(props.location.search);
  useEffect(() => {
    // const params = queryString.parse(props.location.search);
    Axios.get(`/order/status/${params.transaction_id}`).then((dt) => {
      console.log(dt);
    });
  }, [props.location.search]);

  console.log(queryString.parse(props.location.search));
  return ReactDOM.render(
    <div className='success-container'>
      <div className='printer-top' />
      <div className='paper-container'>
        <div className='printer-bottom' />
        <div className='paper'>
          <div className='main-contents'>
            <div className='success-icon'>✔</div>
            <div className='success-title'>Payment Complete</div>
            <div className='success-description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </div>
            <div className='order-details'>
              <div className='order-number-label'>Transaction Number</div>
              <div className='order-number'>{params.transaction_id}</div>
            </div>
            <div className='order-footer'>Thank you!</div>
          </div>
          <div className='jagged-edge' />
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );

  // <div className='success-container'>
  //   <div className='printer-top' />
  //   <div className='paper-container'>
  //     <div className='printer-bottom' />
  //     <div className='paper'>
  //       <div className='main-contents'>
  //         <div className='success-icon'>✔</div>
  //         <div className='success-title'>Payment Complete</div>
  //         <div className='success-description'>
  //           Lorem Ipsum is simply dummy text of the printing and typesetting
  //           industry. Lorem Ipsum has been the industry's standard dummy text.
  //         </div>
  //         <div className='order-details'>
  //           <div className='order-number-label'>Transaction Number</div>
  //           <div className='order-number'>{params.transaction_id}</div>
  //         </div>
  //         <div className='order-footer'>Thank you!</div>
  //       </div>
  //       <div className='jagged-edge' />
  //     </div>
  //   </div>
  // </div>
};
export default Success;
