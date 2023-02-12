import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  submitAddressAction,
} from '../../../redux/actions';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  message, Select,
} from 'antd';
import {
  getTranslatedText,
  usdCurrencyFormat,
} from '../../../services/appService';
import { PayPalButton } from "react-paypal-button-v2";
import env from "../../../env";
import { resource } from "../../../assets/js/resource"

function FormSubmitAddressReceiveGift(props) {

  const {
    actions,
    customer_info,
    formItemDisable
  } = props;

  const [customerName, setCustomerName] = useState('');
  const [textHide, setTextHide] = useState('');
  const [buttonHide, setButtonHide] = useState('button-hide');
  const [deliveryFormValues, setDeliveryFormValues] = useState(null);


  useEffect(() => {
    if (customer_info) {
      if (customer_info.first_name) {
        let fullName = customer_info.first_name + " " + customer_info.last_name;
        console.log(fullName);
        setCustomerName(fullName);
      }
    }
  }, [customer_info]);

  function handleOnSubmitAddressFormFinish(values) {
    let sumError = 0;
    for (const key in values) {
      if (values[key] === undefined) {
        sumError += 1;
      };
    };
    if (sumError === 0) {
      setDeliveryFormValues(values);
      setButtonHide('');
      setTextHide('text-hide');
    } else {
      message.error(getTranslatedText('form_error_message'));
    };
  };

  function onEditAddressButtonClick() {
    if (deliveryFormValues !== null) {
      setDeliveryFormValues(null);
      setButtonHide('button-hide');
      setTextHide('');
      // setFormItemDisable(false);
    };
  };

  function handleOnFormFinish(paypal_transaction_id = "") {
    let bodyRequest = {
      ...customer_info,
      phone: deliveryFormValues.phone,
      address: deliveryFormValues.address,
      state: deliveryFormValues.state,
      city: deliveryFormValues.city,
      country: deliveryFormValues.country,
      zip_code: deliveryFormValues.zip_code,
      paypal_transaction_code: paypal_transaction_id
    };
    let payload = {
      email: customer_info.email,
      requestBody: bodyRequest,
    };
    actions.submitAddressAction(payload);
  };

  return (
    <React.Fragment>
      <Row
        id='form-verify-customer-wrapper'
        gutter={16}
      >
        <Col
          xs={24}
          md={24}
          lg={12}
          id='content-ship-gift-wrapper'
        >
          <Row>
            <Col
              xs={24}
              md={24}
              lg={24}
            >
              <h4 className='col-form-title'>{getTranslatedText('billing_title')}</h4>
              <div id='cart-content-ship-gift-wrapper'>
                <div className='item-info-wrapper'>
                  <p className='item-name'>MT GIFT SET</p>
                </div>
                <div className='quantity-input-wrapper'>
                  <p>{getTranslatedText('quantity_lable')}</p>
                  <div className='quantity-input-wrapper-control'>
                    <p>1</p>
                  </div>
                </div>
                <div className='item-price-wrapper'>
                  <p id='base-item-price-wrapper'>{usdCurrencyFormat.format('150')}</p>
                  <p id='promotion-item-price-wrapper'>{usdCurrencyFormat.format('0')}</p>
                </div>
              </div>
              <div className='checkout-info-item-wrapper'>
                <p className='title-checkout-info-item-wrapper'>{getTranslatedText('cart_ship')}</p>
                <p className='money-checkout-info-item-wrapper'>{usdCurrencyFormat.format('25')}</p>
              </div>
              <div className='checkout-info-item-wrapper'>
                <p className='title-checkout-info-item-wrapper'>{getTranslatedText('cart_tax')}</p>
                <p className='money-checkout-info-item-wrapper'>{usdCurrencyFormat.format('0')}</p>
              </div>
              <div id='total-checkout-info-item-wrapper'>
                <p id='title-total-checkout-info-item-wrapper'>{getTranslatedText('cart_total')}</p>
                <p id='money-total-checkout-info-item-wrapper'>{usdCurrencyFormat.format('25')}</p>
              </div>
            </Col>
            <Col
              xs={0}
              md={0}
              lg={24}
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
                  <div className={'paypal-button-row', buttonHide}>
                    <PayPalButton
                      amount={25}
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
                </Row>
            </Col>
          </Row>
        </Col>
        <Col
          id='content-form-address-customer-wrapper'
          xs={24}
          md={24}
          lg={11}
        >
          <h4 className='col-form-title'>{getTranslatedText('address_title')}</h4>
          <p id='hello-text'>{getTranslatedText('form_hello_text')} <b>{customerName}</b> </p>
          {formItemDisable ? (
            <p>{getTranslatedText('form_message')}</p>
          ) : (
            <p>{getTranslatedText('form_address_text')}</p>
          )}
          <Form
            className='content-form-veryfy-customer'
            onFinish={(values) => handleOnSubmitAddressFormFinish(values)}
            initialValues={{
              'country': 'USA'
            }}
          >
            <Row
              id='row-content-form-veryfy-customer'
              gutter={[0, 0]}
            >
              <Col
                xs={24}
                md={24}
                lg={24}
              >
                <Form.Item
                  className='address-submit-form-item'
                  name='phone'
                >
                  <Input
                    disabled={formItemDisable}
                    placeholder={getTranslatedText('form_item_placeholder_phone')}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={24}
              >
                <Form.Item
                  className='address-submit-form-item'
                  name='address'
                >
                  <Input
                    disabled={formItemDisable}
                    placeholder={getTranslatedText('form_item_placeholder_address')}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={12}
              >
                <Form.Item
                  className='address-submit-form-item'
                  name='city'
                >
                  <Input
                    disabled={formItemDisable}
                    placeholder={getTranslatedText('form_item_placeholder_city')}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={12}
              >
                <Form.Item
                  className='address-submit-form-item'
                  name='state'
                >
                  <Select defaultValue={""}>
                    <option value="">Select</option>
                    {resource.america_state.map((item, index) => (
                      <option value={item.key} key={index}>{item.value}</option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={12}
              >
                <Form.Item
                  className='address-submit-form-item'
                  name='zip_code'
                >
                  <Input
                    disabled={formItemDisable}
                    placeholder='Zip code'
                  />
                </Form.Item>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={12}
              >
                <Form.Item
                  className='address-submit-form-item'
                  name='country'
                >
                  <Input
                    disabled={true}
                  // placeholder={getTranslatedText('form_item_placeholder_city')}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={24}
              >
                {deliveryFormValues === null ? (
                  <Form.Item
                    className='address-submit-form-item form-item-btn-wrapper'
                  >
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
            </Row>
          </Form>
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
              {/* eslint-disable-next-line */}
              <p className={textHide}>{getTranslatedText('notification_title')}</p>
              {/* eslint-disable-next-line */}
              <div className={"paypal-button-row", buttonHide}>
                <PayPalButton
                  amount={25}
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
            </Row>
            {/* ////////////////////// */}
          </Col>
      </Row>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      submitAddressAction,
    },
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormSubmitAddressReceiveGift);