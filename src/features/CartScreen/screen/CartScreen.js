import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  increaseQuantityAction,
  decreaseQuantityAction,
  deleteItemInCartAction,
} from '../../../redux/actions';
import {
  useHistory,
} from "react-router-dom";
import {
  Row,
  Col,
  List,
  Button,
} from 'antd';

import CheckoutStatus from '../../../components/CheckoutStatus/CheckoutStatus';
import CartComponent from '../../../components/Cart/CartComponent';

import '../styles/cart-screen-styles.less';
import routes from '../../../constant/routes';
import { getTranslatedText, usdCurrencyFormat } from '../../../services/appService';


function CartScreen(props) {

  const {
    cart,
    actions,
  } = props;
  
  const history = useHistory();

  const [totalMoney, setTotalMoney] = useState(0);
  // eslint-disable-next-line
  const [initInputValue, setInitInputValue] = useState(1);

  useEffect(() => {
    let total = 0;
    cart.carts.forEach(element => {
      total += (element.price * element.quantity);
    });
    setTotalMoney(total);
    // eslint-disable-next-line
  }, [cart]);

  function goToCheckoutScreen() {
    history.push(routes.checkout);
  };

  function onMinusClick(item) {
      // setInitInputValue(initInputValue - 1);
      actions.decreaseQuantityAction(item);
      setInitInputValue(item.quantity);
  };

  function onPlusClick(item) {
    // setInitInputValue(initInputValue + 1);
    actions.increaseQuantityAction(item);
    setInitInputValue(item.quantity);
  }

  function onDeleteClick(item) {
    actions.deleteItemInCartAction(item);
  }

  return (
    <React.Fragment>
      <Row id='cart-screen-wrapper' gutter={16}>
        <Col
          md={24}
          xs={24}
        >
          <CheckoutStatus />
        </Col>
        <Col
          md={24}
          xs={24}
        >
          <List
            className='cart-item-list-wrapper'
            dataSource={cart.carts}
            renderItem={(item) => (
              <List.Item
                className='item-wrapper'
              >
                <CartComponent
                  item={item}
                  onMinusClick={onMinusClick}
                  onPlusClick={onPlusClick}
                  onDeleteClick={onDeleteClick}
                />
              </List.Item>
            )}
          />
        </Col>
        <Col
          md={24}
          xs={24}
        >
          <div id='total-wrapper'>
            <p id='total-title'>{getTranslatedText('total_bill_title')}</p>
            <p id='total-number'>{usdCurrencyFormat.format(totalMoney)}</p>
          </div>
        </Col>
        <Col
          md={24}
          xs={24}
        >
          <Button
            id='cart-checkout-btn'
            onClick={() => goToCheckoutScreen()}
          >
            {getTranslatedText('btn_checkout')}
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      decreaseQuantityAction,
      increaseQuantityAction,
      deleteItemInCartAction,
    },
    dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartScreen);