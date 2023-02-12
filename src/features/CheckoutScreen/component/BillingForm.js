import React from 'react';

import {
  Form,
  Row,
  Col,
  Input,
  Select,
} from 'antd';

function BillingForm() {

  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col
          md={24}
          xs={24}
        >
          <Form.Item
            label='FULL NAME'
            name='order_name'
          >
            <Input />
          </Form.Item>
        </Col>
        <Col
          md={24}
          xs={24}
        >
          <Form.Item
            label='ADDRESS'
            name='order_address'
          >
            <Input />
          </Form.Item>
        </Col>
        <Col
          md={12}
          xs={12}
        >
        <Form.Item
            label='CITY'
            name='order_province'
          >
            <Input />
          </Form.Item>
        </Col>
        <Col
          md={12}
          xs={12}
        >
        <Form.Item
            label='ZIP CODE'
            name='order_zipcode'
          >
            <Input />
          </Form.Item>
        </Col>
        <Col
          md={24}
          xs={24}
        >
          <Form.Item
            label='COUNTRY'
            name='order_country'
          >
            <Select></Select>
          </Form.Item>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BillingForm;