import React from 'react';

import {
  Radio,
} from 'antd';


function PaymentMethod() {

  return (
    <React.Fragment>
      <Radio.Group
        id='radio-group-wrapper'
      >
        <Radio
          value='visa'
          className='radio-item-wrapper'
        >
          <div>
            <img src='../../assets/cart/visaIcon.png' alt='' />
          </div>
        </Radio>
        <Radio
          className='radio-item-wrapper'
          value='paypal'
        >
          <div>
            <img src='../../assets/cart/paypalIcon.png' alt='' />
          </div>
        </Radio>
      </Radio.Group>
    </React.Fragment>
  );
};

export default PaymentMethod;