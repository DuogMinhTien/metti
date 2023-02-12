import React from 'react';
import {
  Input,
  Button,
} from 'antd';

import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
} from '@ant-design/icons'

import {
  getTranslatedText,
  usdCurrencyFormat,
} from '../../services/appService';

function CartComponent(props) {

  const {
    item,
    onMinusClick,
    onPlusClick,
    onDeleteClick,
  } = props;

  return (
    <React.Fragment>
      <div className='item-info-wrapper'>
        <div>
          <Button
            onClick={() => onDeleteClick(item)}
          >
            <CloseOutlined />
          </Button>
        </div>
        <p className='item-name'>{item.name}</p>
        {/* <p className='item-des'>{item.code}</p> */}
        <img src={item.avatar} alt='' />
      </div>
      <div className='quantity-input-wrapper'>
        <p>{getTranslatedText('quantity_lable')}</p>
        <div className='quantity-input-wrapper-control'>
          <Button
            onClick={() => onMinusClick(item)}
            htmlType='button'
          >
            <MinusOutlined />
          </Button>
          <Input
            className='quantity-input-custom'
            value={item.quantity}
          />
          <Button
            onClick={() => onPlusClick(item)}
            htmlType='button'
          >
            <PlusOutlined />
          </Button>
        </div>
      </div>
      <div className='item-price-wrapper'>
        <p>{usdCurrencyFormat.format(item.price * item.quantity)}</p>
      </div>
    </React.Fragment>
  );
};

export default CartComponent;