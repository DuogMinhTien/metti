import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Row, Col, Dropdown, Menu } from 'antd';

import routes from '../../../constant/routes';
import { getTranslatedText } from '../../../services/appService';
import { bindActionCreators } from 'redux';
import { getProductCategories } from '../../../redux/actions';
import { connect } from 'react-redux';

function NavigatorComponent(props) {
  const { actions, categories } = props;

  const [home_active, setHomeActive] = useState('home_active');
  const [about_us_active, setAboutUsActive] = useState('');
  const [products_active, setProductsActive] = useState('');
  const [technology_active, setTechnologyActive] = useState('');
  const [contact_active, setContactActive] = useState('');
  const [event_active, setEventActive] = useState('');
  const [news_active, setNewsActive] = useState('');
  // const [categories, setCategories] = useState([]);

  const location = useLocation();

  const productMenu = (
    <Menu className="product-dropdown-menu-wrapper">
      {categories?.map((item, index) => (
        <Menu.Item key={index}>
          <Link
            to={routes.product_by_category.replace(':category_id', item.id)}>
            <p>{item.name}</p>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  useEffect(() => {
    actions.getProductCategories();
  }, [actions]);

  useEffect(() => {
    if (location.pathname.includes('/product')) {
      setHomeActive('');
      setAboutUsActive('');
      setProductsActive('product_active');
      setTechnologyActive('');
      setContactActive('');
      setNewsActive('');
    } else {
      if (location.pathname.includes('/event')) {
        setHomeActive('');
        setAboutUsActive('');
        setProductsActive('');
        setTechnologyActive('');
        setContactActive('');
        setEventActive('event_active');
        setNewsActive('');
      } else {
        switch (location.pathname) {
          case '/':
            setHomeActive('home_active');
            setAboutUsActive('');
            setProductsActive('');
            setTechnologyActive('');
            setContactActive('');
            setEventActive('');
            setNewsActive('');
            break;
          case '/about-us':
            setHomeActive('');
            setAboutUsActive('about_us_active');
            setProductsActive('');
            setTechnologyActive('');
            setContactActive('');
            setEventActive('');
            setNewsActive('');
            break;
          case '/technology':
            setHomeActive('');
            setAboutUsActive('');
            setProductsActive('');
            setTechnologyActive('technology_active');
            setContactActive('');
            setEventActive('');
            setNewsActive('');
            break;
          case '/contact':
            setHomeActive('');
            setAboutUsActive('');
            setProductsActive('');
            setTechnologyActive('');
            setEventActive('');
            setContactActive('contact_active');
            setNewsActive('');
            break;
          case '/news':
            setHomeActive('');
            setAboutUsActive('');
            setProductsActive('');
            setTechnologyActive('');
            setEventActive('');
            setContactActive('');
            setNewsActive('news_active');
            break;
          default:
            break;
        }
      }
    }
  }, [location]);

  return (
    <React.Fragment>
      <Row id="navigator-wrapper" gutter={0}>
        <Col md={24} xs={24} lg={3}>
          <Link to={routes.home}>
            <div className="navigator-item">
              <p id={home_active}>{getTranslatedText('nav_home')}</p>
            </div>
          </Link>
        </Col>
        <Col md={24} xs={24} lg={4}>
          <Link to={routes.about_us}>
            <div className="navigator-item">
              <p id={about_us_active}>{getTranslatedText('nav_about_us')}</p>
            </div>
          </Link>
        </Col>
        <Col md={24} xs={24} lg={3}>
          <Link to={routes.product}>
            <Dropdown className="navigator-item" overlay={productMenu}>
              <p id={products_active}>{getTranslatedText('nav_product')}</p>
            </Dropdown>
          </Link>
        </Col>
        <Col md={24} xs={24} lg={3}>
          <Link to={routes.technoloygy}>
            <div className="navigator-item">
              <p id={technology_active}>
                {getTranslatedText('nav_technology')}
              </p>
            </div>
          </Link>
        </Col>
        <Col md={24} xs={24} lg={3}>
          <Link to={routes.event}>
            <div className="navigator-item">
              <p id={event_active}>{getTranslatedText('nav_event')}</p>
            </div>
          </Link>
        </Col>
        <Col md={24} xs={24} lg={3}>
          <Link to={routes.news}>
            <div className="navigator-item">
              <p id={news_active}>{getTranslatedText('nav_news')}</p>
            </div>
          </Link>
        </Col>
        <Col md={24} xs={24} lg={3}>
          <Link to={routes.contact}>
            <div className="navigator-item">
              <p id={contact_active}>{getTranslatedText('nav_contact')}</p>
            </div>
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    categories: state.productReducer.categories,
    isLoading: state.productReducer.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getProductCategories
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigatorComponent);
