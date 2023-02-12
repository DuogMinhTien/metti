import React from 'react';
import {
  Form,
  Button,
  Input,
} from 'antd';
import { getTranslatedText } from '../../../services/appService';

function ContactFormComponent(props) {

  const {
    customerSubmitContactInformation,
    form
  } = props;

  return (
    <React.Fragment>
      <Form
        form={form}
        className='form-input-wrapper'
        onFinish={(values) => customerSubmitContactInformation(values)}
      >
        <Form.Item
          name='full_name'
          rules={[
            {
              required: true,
              message: getTranslatedText('contact_require_message'),
            }]}
        >
          <Input className='text-input' placeholder={getTranslatedText('contact_full_name')} />
        </Form.Item>
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: getTranslatedText('contact_require_message')
            }]}
        >
          <Input className='text-input' placeholder={getTranslatedText('contact_email')} />
        </Form.Item>
        <Form.Item
          name='phone'
          rules={[
            {
              required: true,
              message: getTranslatedText('contact_require_message')
            }]}
        >
          <Input className='text-input' placeholder={getTranslatedText('contact_mobile')} />
        </Form.Item>
        <Form.Item
          name='message'
          className='custom-text-area'
          rules={[
            {
              required: true,
              message: getTranslatedText('contact_require_message')
            }]}
        >
          <Input.TextArea id='text-area' placeholder={getTranslatedText('contact_message')} />
        </Form.Item>
        <Form.Item
          className='btn-wrapper'
        >
          <Button
            id='email-form-btn'
            htmlType='submit'
          >
            {getTranslatedText('btn_send')}
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default ContactFormComponent;