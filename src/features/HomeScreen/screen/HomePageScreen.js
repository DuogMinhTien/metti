import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getBannerList,
  getProductList,
  getPartnerList,
  getTechnologyList,
  getAboutUsList
} from '../../../redux/actions';
import { useHistory, Link } from 'react-router-dom';
import { enquireScreen } from 'enquire-js';
import { Layout, Carousel, Row, Col, Button, Modal } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import '../styles/homescreen-style.less';

import routes from '../../../constant/routes';

import HotProductComponent from '../../../components/HotProduct/HotProduct';
import PartnerView from '../../../components/PartnerView/PartnerView';
import { getTranslatedText } from '../../../services/appService';
import feature_banner from '../../../assets/images/feature_banner.png';

import location_outline from '../../../assets/icons/location_outline.png';
import direction_icon from '../../../assets/icons/direction.png';
import { useFetchLabLocation } from '../../../hooks/api';

const { Content } = Layout;

function HomePageScreen(props) {
  const {
    actions,
    banners,
    products,
    partners,
    current_language,
    technologies,
    aboutUses
  } = props;

  const history = useHistory();
  const bannerWidth = window.innerWidth;
  const bannerHeight = bannerWidth * 0.464;

  const [modalVisible, setModalVisile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [slideToShow, setSlideToShow] = useState(5);
  const [partnership, setPartnership] = useState({});
  const [autoPlay, setAutoPlay] = useState(true);

  const { data: labLocations } = useFetchLabLocation();

  // GET BANNER LIST
  useEffect(() => {
    actions.getBannerList({
      is_hot: 1
    });
    actions.getPartnerList();
    actions.getProductList();
    actions.getTechnologyList({
      show_home: 1
    });
    actions.getAboutUsList({
      show_home: 1
    });
  }, [actions]);

  //CHECK MOBILE
  useEffect(() => {
    enquireScreen(b => {
      setIsMobile(b);
    });
  }, []);

  //SET SLIDE TO SHOW
  useEffect(() => {
    if (isMobile) {
      setSlideToShow(3);
    } else {
      setSlideToShow(3);
    }
  }, [isMobile]);

  useEffect(() => {
    if (partners) {
      if (partners.length <= 3) {
        setAutoPlay(false);
      } else {
        setAutoPlay(true);
      }
    }
  }, [partners]);

  function handlePartnerLogoOnClick(item) {
    if (item[`description_${current_language}`]) {
      setPartnership(item);
      setModalVisile(true);
    }
  }

  function goToTechnology() {
    history.push(routes.technoloygy);
  }

  return (
    <React.Fragment>
      <Content>
        <Carousel
          autoplay
          dots={false}
          arrows
          nextArrow={
            <button>
              <RightOutlined />
            </button>
          }
          prevArrow={
            <button>
              <LeftOutlined />
            </button>
          }>
          {banners &&
            banners.map(item => (
              <div key={item?.id} className="carousel-item-wrapper">
                <a
                  href={item.link}
                  target={'_blank'}
                  rel={'noreferrer  '}
                  title={item.link}>
                  <img
                    style={{
                      width: bannerWidth,
                      height: bannerHeight,
                      objectFit: 'cover'
                    }}
                    src={item.background}
                    alt=""
                  />
                </a>
                <div className="content-wrapper">:)))
                  <h2>{item[`title_${current_language}`]}</h2>
                  <p>{item[`subtitle_${current_language}`]}</p>
                </div>
              </div>
            ))}
        </Carousel>
        {(labLocations?.length) ? (
          <Row id="lab-location-wrapper">
            <div className="px-2.5 py-6 lg:px-0 lg:py-0 flex flex-col lg:flex-row items-start lg:items-center" style={{zIndex: 2}}>
              <div className="mb-6 md:mb-0 md:mr-1">
                <p className="lab-location-title">
                  {getTranslatedText('lab_location_title')}
                </p>
                <div className="lab-location-title-line" />
              </div>
              <div className="lab-location-list-wrapper px-2.5 py-2.5 md:px-5 md:py-5 lg:px-10 lg:py-10" style={{backgroundColor: "rgba(216, 216, 216, 0.5)"}}>
                {labLocations?.map(item => (
                  <div
                    key={item.id}
                    className="w-full flex items-center location-item">
                    <div className="bg-primary px-2 py-2 my-1.5 lg:my-0 flex items-center justify-center location-item-name">
                      <p className="uppercase font-bold text-white line-clamp-1">
                        {current_language === 'vi' ? item?.name_vi : item?.name}
                      </p>
                    </div>
                    <div className="bg-white px-2 py-2 flex items-center justify-between location-item-meta">
                      <div className="flex items-center">
                        <img
                          className="lab-icon-location mr-1.5 lg:mr-5"
                          src={location_outline}
                          alt=""
                        />
                        <p className="text-left lab-address line-clamp-2">
                          {current_language === 'vi'
                            ? item?.address_vi
                            : item?.address}
                        </p>
                      </div>
                      <div>
                        <a
                          href={item?.link_ggmap}
                          target="_blank"
                          rel="noreferrer">
                          <img
                            className="direction-icon"
                            src={direction_icon}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Row>
        ) : <React.Fragment/>}
        {technologies[0] && (
          <Row id="technology-info-wrapper">
            <Col md={9} xs={12} id="tech-info-text-wrapper">
              <h3>
                {technologies[0][`title_${current_language}`].toUpperCase()}
              </h3>
              <div
                id="text-des-wrapper"
                dangerouslySetInnerHTML={{
                  __html: technologies[0][`description_${current_language}`]
                }}
              />
              <Button
                id="btn-readmore"
                type="primary"
                onClick={() => goToTechnology()}>
                {getTranslatedText('btn_read_more')}
              </Button>
            </Col>
          </Row>
        )}
        {products[0] && (
          <HotProductComponent position="right" productData={products[0]} />
        )}
        {products[1] && (
          <HotProductComponent position="right" productData={products[1]} />
        )}

        <Row gutter={0}>
          <Col md={24} xs={24}>
            <div id="feature-banner">
              <img src={feature_banner} alt="" />
            </div>
          </Col>
          {aboutUses[0] && (
            <Col md={24} xs={24}>
              <Row id="about-us-wrapper" gutter={0}>
                <Col id="info-about-us-wrapper" md={24} xs={24} lg={10}>
                  <h3 id="desktop-title">
                    {aboutUses[0][`title_${current_language}`].toUpperCase()}
                  </h3>
                  <Link to={routes.about_us}>
                    <div
                      id="des-wrapper"
                      dangerouslySetInnerHTML={{
                        __html: aboutUses[0][`description_${current_language}`]
                      }}></div>
                    <p id="title-readmore">... Read more</p>
                  </Link>
                </Col>
                <Col
                  md={24}
                  xs={24}
                  lg={12}
                  style={{
                    width: '100%'
                  }}>
                  <h3 id="mobile-title">
                    {aboutUses[0][`title_${current_language}`].toUpperCase()}
                  </h3>
                  <div id="about-banner">
                    <img src={aboutUses[0].image} alt="" />
                  </div>
                </Col>
              </Row>
            </Col>
          )}
          <Col id="partner-logo-slide-wrapper" md={24} xs={24}>
            <Row gutter={0}>
              <Col id="slide-header-wrapper" md={24} xs={24}>
                <h3>{getTranslatedText('home_partner').toUpperCase()}</h3>
                {/* <div id='button-control-slide-wrapper'>
                  <Button>
                    <LeftOutlined
                      style={{ fontSize: '17px'}}
                    />
                  </Button>
                  <Button>
                    <RightOutlined
                      style={{ fontSize: '17px'}}
                    />
                  </Button>
                </div> */}
              </Col>
              <Col md={24} xs={24}>
                <Carousel
                  className="partner-logo-wrapper"
                  slidesToShow={slideToShow}
                  dots={false}
                  autoplay={autoPlay}
                  // infinite
                  arrows>
                  {partners &&
                    partners.map(item => (
                      <div key={item?.id} className="logo-wrapper">
                        <img
                          onClick={() => handlePartnerLogoOnClick(item)}
                          src={item.avatar}
                          alt=""
                        />
                      </div>
                    ))}
                </Carousel>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      <Modal
        title={partnership ? partnership.name : 'Partnership'}
        footer={null}
        visible={modalVisible}
        onCancel={() => setModalVisile(false)}
        destroyOnClose>
        <PartnerView
          partner={partnership}
          current_language={current_language}
        />
      </Modal>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    banners: state.bannerReducer.banners,
    products: state.productReducer.products,
    partners: state.partnerReducer.partners,
    technologies: state.technologyReducer.technologies,
    aboutUses: state.aboutUsReducer.aboutUses,
    current_language: state.utilityReducer.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getBannerList,
        getPartnerList,
        getProductList,
        getTechnologyList,
        getAboutUsList
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageScreen);
