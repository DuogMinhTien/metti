import React from 'react';
import {
  Result,
  Button,
} from 'antd';
import { getTranslatedText } from '../../services/appService';
import { Link } from 'react-router-dom';
import routes from '../../constant/routes';

function OrderStatusSuccess() {
  return (
    <React.Fragment>
      <Result
        status='success'
        title={getTranslatedText('order_success')}
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

export default OrderStatusSuccess ;