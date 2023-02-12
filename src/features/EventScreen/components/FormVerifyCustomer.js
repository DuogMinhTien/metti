import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  verifyCustomerAction,
} from '../../../redux/actions';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  message,
  Select,
} from 'antd';

import {
  getTranslatedText,
} from '../../../services/appService';

import ProductGiftSet from './ProductGiftSet';


function FormVerifyCustomer(props) {

  const {
    actions,
    formItemDisable,
  } = props;

  function handleOnVerifyCustomerFormFinish(values) {
    console.log(values);
    let sumError = 0;
    for (const key in values) {
      if (values[key] === undefined) {
        sumError += 1;
      }
    };
    if (sumError === 0) {
        let requestBody = {
          ...values,
          name: values.first_name + " " + values.last_name,
        }
        actions.verifyCustomerAction(requestBody);
    } else {
      message.error(getTranslatedText('form_error_message'));
    }
  };

  return (
    <React.Fragment>
      <Row
        id='form-verify-customer-wrapper'
        gutter={16}
      >
        <h1>
          {getTranslatedText('form_verify_title')}
        </h1>
        <ProductGiftSet />
        <Col
          id='content-form-verify-customer-wrapper'
          xs={24}
          md={24}
          lg={11}
        >
          <div id='text-content-form-verify-customer-wrapper'>
            {formItemDisable ? (
              <p>
                {getTranslatedText('gift_over')}
              </p>
            ) : (
              <React.Fragment>
                <p>
                  {getTranslatedText('form_verify_text_1')}
                </p>
                <p>
                  {getTranslatedText('form_verify_text_2')}
                </p>
              </React.Fragment>
            )}
          </div>
          <Form
            className='content-form-veryfy-customer'
            scrollToFirstError={true}
            onFinish={(values) => handleOnVerifyCustomerFormFinish(values)}
          >
            <Row gutter={[0, 0]}>
              <Col
                xs={24}
                md={12}
                lg={12}
              >
                <Form.Item
                  name='first_name'
                >
                  <Input
                    disabled={formItemDisable}
                    maxLength={190}
                    placeholder={getTranslatedText('form_item_placeholder_first_name')}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={24}
                md={12}
                lg={12}
              >
                <Form.Item
                  name='last_name'
                >
                  <Input
                    disabled={formItemDisable}
                    maxLength={190}
                    placeholder={getTranslatedText('form_item_placeholder_last_name')}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={24}
                md={12}
                lg={12}
              >
                <Form.Item
                  name='gender'
                >
                  <Select
                    placeholder={getTranslatedText('form_item_placeholder_gender')}
                  >
                    <Select.Option
                      value='Male'
                    >
                      {getTranslatedText('select_item_male')}
                    </Select.Option>
                    <Select.Option
                      value='Female'
                    >
                      {getTranslatedText('select_item_female')}
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col
                xs={24}
                md={12}
                lg={12}
              >
                <Form.Item
                  name='age'
                >
                  <Input
                    disabled={formItemDisable}
                    maxLength={190}
                    placeholder={getTranslatedText('form_item_placeholder_age')}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={24}
              >
                <Form.Item
                  name='email'
                >
                  <Input
                    disabled={formItemDisable}
                    maxLength={190}
                    placeholder={getTranslatedText('form_item_placeholder_email')}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              className='form-item-btn-wrapper'
            >
              <Button
                disabled={formItemDisable}
                htmlType='submit'
              >
                {getTranslatedText('form_item_btn_verify')}
              </Button>
            </Form.Item>
          </Form>
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
      verifyCustomerAction,
    },
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormVerifyCustomer);