import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  postContactSubmit,
} from '../../../redux/actions';
import {
  Layout,
  Row,
  Col,
  Form,
} from 'antd';

import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  BankOutlined,
  ExperimentOutlined,
  GoldOutlined,
} from '@ant-design/icons';

import '../styles/contact-screen-styles.less';

import ContactFormComponent from '../component/ContactFormComponent';
import { getTranslatedText } from '../../../services/appService';

const {
  Content,
} = Layout;

function ContactScreen(props) {

  const {
    actions,
    isLoading
  } = props;

  const [form] = Form.useForm();

  function customerSubmitContactInformation(bodyRequest) {
    console.log(bodyRequest);
    actions.postContactSubmit(bodyRequest);
    if (isLoading === false ) {
      form.setFieldsValue({
        full_name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <React.Fragment>
      <Content>
        <Row id='contact-screen-wrapper' gutter={[16,16]}>
          <Col md={24}>
            <div id='banner-contact-wrapper'>
              <img src={'../../assets/contact/13.jpg'} alt='' />
            </div>
          </Col>
          <Col
            id='contact-info-wrapper'
            xs={24}
            md={24}
            lg={12}
          >
            <Row gutter={[16,16]}>
              <Col md={24}>
                <h3>{getTranslatedText('contact_us_title')}</h3>
              </Col>
              <Col md={24}>
                <div id='contact-list-wrapper'>
                  <p>We’ve love to meet you!</p>
                  <h4>METTI TECH GROUP</h4>
                  <div
                    className='contact-item-wrapper'
                  >
                    <BankOutlined
                      style={{
                        color: '#EC1D26',
                      }}
                    />
                    <p>9191 Bolsa Ave, Westminster, CA 92683</p>
                  </div>
                  <div className='contact-item-wrapper'>
                    <EnvironmentOutlined
                      style={{
                        color: '#EC1D26',
                      }}
                    />
                    <p>7755 Center Ave., Suite 1100, Huntington Beach, CA 92647</p>
                  </div>
                  <div className='contact-item-wrapper'>
                    <ExperimentOutlined
                      style={{
                        color: '#EC1D26',
                      }}
                    />
                    <p>10832 Capital Ave., #5B , Garden Grove, CA 92843</p>
                  </div>
                  <div className='contact-item-wrapper'>
                    <GoldOutlined
                      style={{
                        color: '#EC1D26',
                      }}
                    />
                    <p>10832 Capital Ave., #5N, Garden Grove, CA 92843</p>
                  </div>
                  <div className='contact-item-wrapper'>
                    <GoldOutlined
                      style={{
                        color: '#EC1D26',
                      }}
                    />
                    <p>1773 Wright Ave La Verne, CA 91750</p>
                  </div>
                  <div className='contact-item-wrapper'>
                    <MailOutlined
                      style={{
                        color: '#EC1D26',
                      }}
                    />
                    <p>Email: we@mettitech.com</p>
                  </div>
                  <div className='contact-item-wrapper'>
                    <PhoneOutlined
                      style={{
                        color: '#EC1D26',
                      }}
                    />
                    <p>1(888) 545 3135 – 1(800) 961 8329</p>
                  </div>
                </div>
              </Col>
              <Col md={24}>
                <div id='image-location-wrapper'>
                  <img src='../../assets/contact/headquater.jpeg' alt='' />
                </div>
                <iframe src="https://www.youtube.com/embed/-KWLaTxoc4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
            </Row>
          </Col>
          <Col
            id='form-wrapper'
            xs={24}
            md={24}
            lg={12}
          >
            <ContactFormComponent
              customerSubmitContactInformation={customerSubmitContactInformation}
              form={form}
            />
          </Col>
          <Col md={24}>
            <div id='map-picture-wrapper'>
              <img src={'../../assets/contact/map.png'} alt='' />
            </div>
          </Col>
        </Row>
      </Content>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    isLoading: state.contactReducer.isLoading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      postContactSubmit,
    },
    dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactScreen);