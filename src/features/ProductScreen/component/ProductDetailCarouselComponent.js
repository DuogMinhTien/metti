import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row,
  Col,
  Button,
  Carousel,
} from 'antd';
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { 
  getTranslatedText,
  usdCurrencyFormat,
} from '../../../services/appService';


function ProductDetailCarouselComponent(props) {

  const {
    productData,
    current_language,
  } = props;
  
  return (
    <React.Fragment>
      <Row
        id='carousel-wrapper'
        gutter={16}
      >
        <Col
          id='product-description-wrapper'
          md={12}
          xs={24}
        >
          <div>
            <h3>{(productData) ? productData.name : ''}</h3>
            <div
              id='text-wrapper'
              dangerouslySetInnerHTML={(productData) ? {
                __html: productData[`description_${current_language}`]
              } : {
                __html: '<p/>'
              }}
            >
            </div>
          </div>
          <div id='control-container-wrapper'>
            {productData && productData.price !== 0 ? (
              <div id='price-control-container-wrapper'>
                <p id='promotion-price'>{(productData) ? usdCurrencyFormat.format(productData.price) : ""}</p>
                <p id='original-price'>{(productData) ? usdCurrencyFormat.format(productData.original_price) : ""}</p>
              </div>  
            ) : (
            <p id='original-price'>{(productData && productData?.original_price !== 0) ? usdCurrencyFormat.format(productData.original_price) : ""}</p>
            )}
            {productData?.original_price !== 0 && (
              <Button
                type='primary'
                id='custom-btn'
                // onClick={() => addProductToCart()}
                href='#banner-combo-wrapper'
              >
                {getTranslatedText('btn_buy_now')}
              </Button>
            )}
          </div>
          <Row id='carousel-item-control-wrapper' gutter={[16, 16]}>
            {productData.images && productData.images.map(item => (
              <Col
                md={8}
                xs={4}
              >
                <img src={item.url} alt='' />
              </Col>
            ))}
          </Row>
        </Col>
        <Col
          id='product-thumbnail-wrapper'
          md={12}
          xs={24}
        >
          <Carousel
            arrows
            nextArrow={
              <Button
                id='control-btn-right'
              >
                <RightOutlined />
              </Button>
            }
            prevArrow={
              <Button
                id='control-btn-left'
              >
                <LeftOutlined />
              </Button>
            }
          >
            {productData.images && productData.images.map(item =>(
              <img
                id='product-thumbnail-image'
                src={item.url}
                alt=''
              />
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row
        id='mobile-carousel-wrapper'
        gutter={16}
      >
        <Col
          id='product-thumbnail-wrapper'
          md={24}
          xs={24}
        >
          <Carousel
            arrows
            nextArrow={
              <Button
                id='control-btn-right'
              >
                <RightOutlined />
              </Button>
            }
            prevArrow={
              <Button
                id='control-btn-left'
              >
                <LeftOutlined />
              </Button>
            }
          >
            {productData.images && productData.images.map(item =>(
              <img
                id='product-thumbnail-image'
                src={item.url}
                alt=''
              />
            ))}
          </Carousel>
        </Col>
        <Col
          id='product-description-wrapper'
          md={24}
          xs={24}
        >
          <div>
            <h3>{(productData) ? productData.name : ''}</h3>
            <div
              id='text-wrapper'
              dangerouslySetInnerHTML={(productData) ? {
                __html: productData[`description_${current_language}`]
              } : {
                __html: '<p/>'
              }}
            >
            </div>
          </div>
          <div id='control-container-wrapper'>
            {productData && productData.price !== 0 ? (
                <div id='price-control-container-wrapper'>
                  <p id='promotion-price'>{(productData) ? usdCurrencyFormat.format(productData.price) : ""}</p>
                  <p id='original-price'>{(productData) ? usdCurrencyFormat.format(productData.original_price) : ""}</p>
                </div>  
              ) : (
                <p id='original-price'>{(productData && productData?.original_price !== 0) ? usdCurrencyFormat.format(productData.original_price) : ""}</p>
            )}
            {productData?.original_price !== 0 && (
              <Button
                type='primary'
                id='custom-btn'
                // onClick={() => addProductToCart()}
                href='#banner-combo-wrapper'
              >
                {getTranslatedText('btn_buy_now')}
              </Button>
            )}
          </div>
          <Row id='carousel-item-control-wrapper' gutter={[16,16]}>
            {productData.images && productData.images.map(item => (
              <Col
                md={8}
                xs={8}
              >
                <img src={item.url} alt='' />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};


function mapStateToProps(state) {
  return {
    current_language: state.utilityReducer.language
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
    },
    dispatch
    ),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailCarouselComponent);