import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Result,
  Button
} from 'antd';
import { getTranslatedText } from '../../services/appService';
import routes from '../../constant/routes';
import './styles/payment-fiserv-result-styles.less';

function PaymentFiservFailure(props) {
  return (
    <React.Fragment>
      <Result
        className='payment-fiserv-result-wrapper'
        status='error'
        title={getTranslatedText('purchase_failure')}
        subTitle={getTranslatedText('sub_purchase_failure')}
        extra={[
          <Link
            to={routes.checkout}
          >
            <Button>
              {getTranslatedText('back_to_checkout')}
            </Button>
          </Link>
        ]}
      />
    </React.Fragment>
  );
}

export default PaymentFiservFailure;