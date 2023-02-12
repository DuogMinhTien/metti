import React from 'react';
import {
  Result,
  Button,
} from 'antd';
import { getTranslatedText } from '../../services/appService';
import { Link } from 'react-router-dom';
import routes from '../../constant/routes';

function OrderStatusFailure() {
  return (
    <React.Fragment>
      <Result
        status='error'
        title={getTranslatedText('order_failure')}
        extra={[
          <Link
            to={routes.home}
          >
            <Button
              type='primary'
            >
              {getTranslatedText('btn_back_to_home')}
            </Button>
          </Link>
        ]}
      />
    </React.Fragment>
  )
};

export default OrderStatusFailure;