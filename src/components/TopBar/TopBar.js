import React, { useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setCurrentLanguage,
} from '../../redux/actions';
import {
  Layout,
  Row,
  Col,
  Button,
  Drawer,
} from 'antd';
import {
  BarsOutlined,
} from '@ant-design/icons'
import LogoComponent from './components/LogoComponent';
import NavigatorComponent from './components/NavigatorComponent';
import UtilityComponent from './components/UtilityComponent';

import logo from '../../assets/images/logoMTC.svg'; 


import './styles/custom-styles.less';
import { Link } from 'react-router-dom';
import routes from '../../constant/routes';

const {
  Header,
} = Layout;


function TopBar(props) {

  const {
    actions,
    current_lang
  } = props;

  const [drawerVisible, setDrawerVisible] = useState(false);

  function handleOpenMenuDrawer() {
    if (drawerVisible) {
      setDrawerVisible(false);
    } else {
      setDrawerVisible(true);
    };
  };

  function changeLanguage(lang) {
    actions.setCurrentLanguage(lang);
    window.location.reload();
  };

  return (
    <React.Fragment>
      <Header className='custom-header'>
        <Row id='desktop-header-wrapper' gutter={0}>
          <Col
            md={4}
          >
            <LogoComponent />
          </Col>
          <Col
            md={18}
          >
            <NavigatorComponent />
          </Col>
          <Col
            md={2}
            className='my-auto'
          >
            <UtilityComponent
              changeLanguage={changeLanguage}
              current_lang={current_lang}
            />
          </Col>
        </Row>
        <Row id='mobile-header-wrapper' gutter={0}>
          <Col 
            className="mobile-header-item"
            xs={4}
          >
            <Button
              id='menu-btn'
              onClick={() => handleOpenMenuDrawer()}
            >
              <BarsOutlined />
            </Button>
          </Col>
          <Col 
            className="mobile-header-item"
            xs={16}
          >
            <div id='mobile-logo-wrapper'>
              <Link
                to={routes.home}
                className="mobile-logo-item"
              >
                <img src={logo} alt='' />
                <h3>METTI TECH</h3>
              </Link>
            </div>
          </Col>
          <Col
            id='col-utility-wrapper'
            xs={4}
            md={4}
            lg={4}
          >
            <UtilityComponent
              changeLanguage={changeLanguage}
              current_lang={current_lang}
            />
          </Col>
        </Row>
      </Header>
      <Drawer
        title='METTI TECH'
        placement='left'
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        destroyOnClose
      >
        <NavigatorComponent />
      </Drawer>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    current_lang: state.utilityReducer.language,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setCurrentLanguage,
    },
    dispatch
    ), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBar);