import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  postOrder,
  decreaseQuantityAction,
  increaseQuantityAction,
  getSettingConfigAction,
} from '../../../redux/actions';
import {
  useHistory,
} from 'react-router-dom';
import {
  Button,
  Col,
  Form,
  Row,
  List,
  Modal,
} from 'antd';
import CheckoutStatus from '../../../components/CheckoutStatus/CheckoutStatus';
import DeliveryForm from '../component/DeliveryForm';
import CartComponent from '../../../components/Cart/CartComponent';
import FiservPrePaymentForm from '../component/FiservPrePaymentForm';

import '../styles/checkout-screen-styles.less';
import { PayPalButton } from "react-paypal-button-v2";
import { getTranslatedText, usdCurrencyFormat } from '../../../services/appService';


import env from '../../../env';



function NewCheckoutScreen(props) {

  const {
    cart,
    actions,
    shipFee,
    taxFee,
  } = props;


  const [formOrderValues, setFormOrderValues] = useState(null);
  const [initInputValue, setInitInputValue] = useState(1);
  const [formItemDisable, setFormItemDisable] = useState(false);
  const [buttonHide, setButtonHide] = useState('button-hide');
  const [textHide, setTextHide] = useState('');
  const [taxMoney, setTaxMoney] = useState(0)
  const [totalOrder, setTotalOrder] = useState(0);
  const [modalFiservVisible, setModalFiservVisible] = useState(false);


  const history = useHistory();

  function handleOnFormFinish(paypal_transaction_id = "") {
    if (!cart) {
      alert("Cart info is missing, please order again!");
      return
    }
    let newFormOrderValue = {
      ...formOrderValues,
      detail: cart.carts,
      paypal_transaction_code: paypal_transaction_id,
      shipping: shipFee,
      tax: taxMoney,
      type: 'paypal'
    };
    actions.postOrder(newFormOrderValue);
  };

  useEffect(() => {
    actions.getSettingConfigAction();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (taxFee !== null && shipFee !== null) {
      let sumCart = 0;
      cart.carts.forEach(item => {
        sumCart += (item.price * item.quantity)
      });
      let taxFeeMoney = (sumCart * taxFee) / 100;
      setTaxMoney(taxFeeMoney);
      setTotalOrder(shipFee + taxFeeMoney + sumCart);
    }
  }, [taxFee, shipFee, cart]);

  function handleOnFormCheckOutFinish(values) {
    setFormOrderValues(values);
    setButtonHide('');
    setTextHide('text-hide');
    setFormItemDisable(true);
    localStorage.setItem('delivery_information', JSON.stringify(values));
  };

  function onEditAddressButtonClick() {
    if (formOrderValues !== null) {
      setFormOrderValues(null);
      setButtonHide('button-hide');
      setTextHide('');
      setFormItemDisable(false);
    };
  };

  function onMinusClick(item) {
    setInitInputValue(item.quantity);
    if (initInputValue > 1) {
      setInitInputValue(initInputValue - 1);
      actions.decreaseQuantityAction(item)
    }
    ;
  };

  function onPlusClick(item) {
    setInitInputValue(initInputValue + 1);
    actions.increaseQuantityAction(item);
  };

  return (
    <React.Fragment>
      <Form
        layout='vertical'
        onFinish={(values) => handleOnFormCheckOutFinish(values)}
        scrollToFirstError={true}
      >
        <Row id='checkout-screen-wrapper' gutter={16}>
          <Col md={24}>
            <CheckoutStatus />
          </Col>
          <Col md={12}>
            <Row gutter={16}>
              <Col
                md={24}
                xs={24}
                id='billing-wrapper'
              >
                <h4 className='col-form-title'>{getTranslatedText('billing_title')}</h4>
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
                      />
                    </List.Item>
                  )}
                />
                <div className='checkout-info-item-wrapper'>
                  <p className='title-checkout-info-item-wrapper'>{getTranslatedText('cart_ship')}</p>
                  <p className='money-checkout-info-item-wrapper'>{usdCurrencyFormat.format(shipFee)}</p>
                </div>
                <div className='checkout-info-item-wrapper'>
                  <p className='title-checkout-info-item-wrapper'>{getTranslatedText('cart_tax')}</p>
                  <p className='money-checkout-info-item-wrapper'>{usdCurrencyFormat.format(taxMoney)}</p>
                </div>
                <div id='total-checkout-info-item-wrapper'>
                  <p id='title-total-checkout-info-item-wrapper'>{getTranslatedText('cart_total')}</p>
                  <p id='money-total-checkout-info-item-wrapper'>{usdCurrencyFormat.format(totalOrder)}</p>
                </div>
                <div id='bonus-info-checkout-info-item-wrapper'>
                  <p>{getTranslatedText('bonus_info_ship_fee')}</p>
                </div>
              </Col>
              <Col
                xs={0}
                md={0}
                lg={24}
                id='payment-method-wrapper'
              >
                <h4 className='col-form-title'>{getTranslatedText('payment_method_title')}</h4>
                {/* Khu button nay dung de render cho paypal */}
                <Row
                  gutter={16}
                  justify={'center'}
                  className="paypal-container-row"
                // id="button-payment-wrapper"
                >
                  {/* eslint-disable-next-line */}
                  <p className={textHide}>{getTranslatedText('notification_title')}</p>
                  {/* eslint-disable-next-line */}
                  <div className={'paypal-button-row', buttonHide}>
                    <PayPalButton
                      amount={totalOrder}
                      currency={'USD'}
                      onSuccess={(details, data) => {
                        let paypal_transaction_id =
                          details.purchase_units[0].payments.captures[0].id;
                        console.log(paypal_transaction_id);
                        handleOnFormFinish(paypal_transaction_id);
                      }}
                      options={{
                        clientId: env.PAYPAL_CLIENT_ID,
                        locale: 'en_VN',
                      }}
                    />
                  </div>
                  {/* eslint-disable-next-line */}
                  {/* <div className={'fiserv-button-row', buttonHide}>
                    <Button
                      id='fiserv-button-row'
                      onClick={() => setModalFiservVisible(true)}
                    >
                      Pay with Fiserv
                    </Button>
                  </div> */}
                </Row>
                {/* ////////////////////// */}
              </Col>
            </Row>
          </Col>
          <Col
            md={24}
            xs={24}
            lg={12}
            id='delivery-form-wrapper'
          >
            <Row gutter={16}>
              <Col
                md={24}
                xs={24}
                lg={24}
              >
                <h4 className='col-form-title'>{getTranslatedText('address_title')}</h4>
                <DeliveryForm
                  formItemDisable={formItemDisable}
                />
              </Col>
              <Col
                md={12}
                xs={12}
                lg={12}
              >
                {formOrderValues === null ? (
                  <Form.Item>
                    <Button
                      className='checkout-btn'
                      htmlType='submit'
                    >
                      {getTranslatedText('comfirm_address_btn').toUpperCase()}
                    </Button>
                  </Form.Item>
                ) : (
                  <Button
                    className='checkout-btn'
                    onClick={() => onEditAddressButtonClick()}
                  >
                    {getTranslatedText('edit_address_btn').toUpperCase()}
                  </Button>
                )}
              </Col>
              <Col
                md={12}
                xs={12}
                lg={12}
              >
                <Button
                  id='back-cart-btn'
                  onClick={() => history.goBack()}
                >
                  {getTranslatedText('back_btn')}
                </Button>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            md={24}
            lg={0}
            id='payment-method-wrapper'
          >
            <h4 className='col-form-title'>{getTranslatedText('payment_method_title')}</h4>
            {/* Khu button nay dung de render cho paypal */}
            <Row
              gutter={16}
              justify={'center'}
              className="paypal-container-row"
            // id="button-payment-wrapper"
            >
              <p className={textHide}>{getTranslatedText('notification_title')}</p>
              {/* eslint-disable-next-line */}
              <div className={"paypal-button-row", buttonHide}>
                <PayPalButton
                  amount={totalOrder}
                  currency={'USD'}
                  onSuccess={(details, data) => {
                    let paypal_transaction_id =
                      details.purchase_units[0].payments.captures[0].id;
                    console.log(paypal_transaction_id);
                    handleOnFormFinish(paypal_transaction_id);
                  }}
                  options={{
                    clientId: env.PAYPAL_CLIENT_ID,
                    locale: 'en_VN',
                  }}
                />
              </div>
              {/* eslint-disable-next-line */}
              {/* <div className={'fiserv-button-row', buttonHide}>
                <Button
                  id='fiserv-button-row'
                  onClick={() => setModalFiservVisible(true)}
                >
                  Pay with Fiserv
                </Button>
              </div> */}
            </Row>
            {/* ////////////////////// */}
          </Col>
        </Row>
      </Form>
      <Modal
        className='fiserv-payment-modal-wrapper'
        footer={null}
        visible={modalFiservVisible}
        onCancel={() => setModalFiservVisible(!modalFiservVisible)}
        destroyOnClose
      >
        <div
          className='content-fiserv-payment-modal-wrapper'
        >
          <img
            className='logo-content-fiserv-payment-modal-wrapper'
            src='/assets/Fiserv_Logo.svg'
            alt=''
          />
          <div
            className='amount-content-fiserv-payment-modal-wrapper'
          >
            <FiservPrePaymentForm
              totalOrder={totalOrder}
            />
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
    shipFee: state.settingConfigReducer.shipFee,
    taxFee: state.settingConfigReducer.taxFee,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      postOrder,
      decreaseQuantityAction,
      increaseQuantityAction,
      getSettingConfigAction,
    },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCheckoutScreen);