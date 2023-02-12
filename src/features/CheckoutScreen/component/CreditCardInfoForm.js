import React from 'react';

import {
  Form,
  Row,
  Col,
  Input,
  Select,
} from 'antd';

function CreditCardInfoForm() {

  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col
          md={24}
          xs={24}
        >
          <Form.Item
            label='CARD NUMBER (Visa / Master Card)'
            name='order_card_number'
          >
            <Input />
          </Form.Item>
        </Col>
        <Col
          md={24}
          xs={24}
        >
          <Form.Item
            label='CARDHOLDER NAME'
            name='order_card_holder_name'
          >
            <Input />
          </Form.Item>
        </Col>
        <Col
          md={24}
          xs={12}
        >
          <Form.Item
            label='EXPIRE DATE'
            name='order_card_expire_date'
          >
            <Select></Select>
          </Form.Item>
        </Col>
        <Col
          md={24}
          xs={12}
        >
        <Form.Item
            label='CVV'
            name='order_cvv'
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CreditCardInfoForm;