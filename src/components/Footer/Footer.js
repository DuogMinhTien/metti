import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  postEmailSubcrible
} from '../../redux/actions';
import {
  Row,
  Col,
  Form,
  Input,
  Divider,
  Button,
} from 'antd';
import {
  ArrowRightOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  BankOutlined,
} from '@ant-design/icons';

// import { enquireScreen } from 'enquire-js';
import {
  isMobileOnly,
  isTablet,
} from 'react-device-detect';

import './styles/footer-custom-style.less';

import logo from '../../assets/images/logoMTC.png';
import fb from '../../assets/icons/fb.png';
import youtube from '../../assets/icons/youtube.png';
import twiter from '../../assets/icons/twiter.png';
import instagram from '../../assets/icons/ins.png';

import { getTranslatedText } from '../../services/appService';


function Footer(props) {

  const {
    actions,
  } = props;

  // const [isMobile, setIsMobile] = useState(false);
  const [formLayout, setFormLayout] = useState('vertical');

  const [form] = Form.useForm();

  // useEffect(() => {
  //   enquireScreen((b) => {
  //     setIsMobile(b);
  //   })
  // }, []);

  useEffect(() => {
    if (isMobileOnly) {
      setFormLayout('horizontal');
    }
    else {
      if (isTablet) {
        setFormLayout('vertical');
      } else {
        setFormLayout('vertical');
      }
    }
  }, []);

  function onSubribleEmailFinish(values) {
    actions.postEmailSubcrible(values);
    form.setFieldsValue({
      email: ''
    });
  };

  return (
    <React.Fragment>
      <Row
        id='footer-custom-wrapper'
        gutter={16}
      >
        <Col 
          id='footer-contact-wrapper'
          md={24}
          xs={24}
          lg={12}
          // style={{ border: 'solid'}}
        >
          <Row
            gutter={16}
          >
            <Col
              id='footer-logo-wrapper'
              md={24}
              xs={24}
            >
              <img src={logo} alt='' />
              <p>METTI TECH GROUP</p>
              <iframe border='0' frameBorder='0' style={{border: 0, height: "55px", width: "auto", overflow: "hidden", scroll: "no"}}
                      src='https://seal-central-northern-western-arizona.bbb.org/frame/blue-seal-250-52-whitetxt-bbb-1000106809.png?chk=66CCA464F7'/>
              <div className="line"></div>
            </Col>
            <Col id='location-wrapper' md={24} xs={24}>
              <div
                className='location-item-wrapper'
              >
                <BankOutlined
                  style={{
                    color: '#EC1D26'
                  }}
                />
                <p>9191 Bolsa Ave, Westminster, CA 92683</p>
              </div>
              <div
                className='location-item-wrapper'
              >
                <EnvironmentOutlined
                  style={{
                    color: '#EC1D26'
                  }}
                />
                <p>7755 Center Ave., Suite 1100, Huntington Beach, CA 92647</p>
              </div>
              <div
                className='location-item-wrapper'
              >
                <MailOutlined
                  style={{
                    color: '#EC1D26'
                  }}
                />
                <p>Email: we@mettitech.com</p>
              </div>
              <div
                className='location-item-wrapper'
              >
                <PhoneOutlined
                  style={{
                    color: '#EC1D26'
                  }}
                />
                <p>1(888) 545 3135 – 1(800) 961 8329</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          id='footer-subcrible-wrapper'
          md={24}
          xs={24}
          lg={12}
          // style={{ border: 'solid'}}
        >
          <Row
            gutter={16}
          >
            <Col
              id='subcrible-input-wrapper'
              md={24}
              xs={24}
            >
              <h4>{getTranslatedText('footer_subcrible')}:</h4>
              <Form
                layout={formLayout}
                form={form}
                onFinish={(values) => onSubribleEmailFinish(values)}
              >
                <Form.Item
                  className='subcrible-input'
                  name='email'
                  label={getTranslatedText('email_sub_lable')}
                >
                  <Input />
                </Form.Item> 
                <Form.Item
                  label='a'
                  className='subcrible-button-wrapper'
                >
                  <Button
                    className='subcrible-btn'
                    htmlType='submit'
                  >
                    <ArrowRightOutlined />
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col
              id='footer-social-wrapper'
              md={24}
              xs={24}
              // style={{ border: 'solid'}}
            >
              <h4>{getTranslatedText('footer_follow')}:</h4>
              <div
                id='social-icon-wrapper'
                // style={{border: 'solid'}}
              >
                <a href='https://www.facebook.com/mettitechfb/' target='_blank' rel='noreferrer'>
                  <img src={fb} alt='' />
                </a>
                <a href=' https://www.instagram.com/mettitechig/' target='_blank' rel='noreferrer'>
                  <img src={instagram} alt='' />
                </a>
                <a href='https://www.youtube.com/channel/UCfvt_vyC18Wp7_sAC2tUtiQ' target='_blank' rel='noreferrer'>
                  <img src={youtube} alt='' />
                </a>
                <a href='https://twitter.com/MettiTech' target='_blank' rel='noreferrer'>
                  <img src={twiter} alt='' />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
        <Divider />
        <Col
          id='footer-item-copyrigth'
          md={24}
          xs={24}
        >
          <p>Copyright 2020 @ Metti Tech Group. All right reserved</p>
        </Col>
      </Row>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      postEmailSubcrible
    },
    dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);