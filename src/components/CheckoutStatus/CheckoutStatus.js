import React, { useState, useEffect } from 'react';
import {
  useRouteMatch,
} from 'react-router-dom';
import {
  Steps,
} from 'antd';


import './styles/checkout-status-styles.less';
import { getTranslatedText } from '../../services/appService';

const {
  Step,
} = Steps;


function CheckoutStatus() {

  const match = useRouteMatch();

  const [orderStep, setOrderStep] = useState('process');
  const [checkoutStep, setCheckoutStep] = useState('wait');



  useEffect(() => {
    console.log(match);
    switch(match.url) {
      case '/checkout/cart':
        setOrderStep('process');
        setCheckoutStep('wait');
        break;
      case '/checkout':
        setCheckoutStep('process');
        setOrderStep('wait');
        break;
      default:
        setOrderStep('process');
        setCheckoutStep('wait');
        break;
    }
  }, [match]);

  return (
    <React.Fragment>
      <Steps
        className='checkout-steps-wrapper'
        progressDot
      >
        <Step
          className='step-item'
          status={orderStep}
          title={getTranslatedText('order_step_title')}
        />
        <Step
          className='step-item'
          status={checkoutStep}
          title={getTranslatedText('payment_step_title')}
        />
      </Steps>
    </React.Fragment>
  );
};

export default CheckoutStatus;