import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItemToCart } from '../../redux/actions';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'antd';

import routes from '../../constant/routes';

import './styles/custom-style.less';
import { getTranslatedText } from '../../services/appService';
import HTMLParser from '../HTMLParser';
import { PRODUCT_TYPE } from '../../constant';

function HotProductComponent(props) {
  const { position, productData, actions, current_language } = props;

  const history = useHistory();

  const [wrapPosition, setWrapPosition] = useState('left');

  useEffect(() => {
    if (position === 'right') {
      setWrapPosition('right');
    } else {
      setWrapPosition('left');
    }
    // eslint-disable-next-line
  }, [wrapPosition]);

  function goToProductDetail() {
    switch (productData?.type) {
      case PRODUCT_TYPE.NEW:
        history.push(
          routes.new_product_screen.replace(':product_id', productData.id)
        );
        break;
      case PRODUCT_TYPE.OLD:
      default:
        history.push(
          routes.product_detail.replace(':product_id', productData.id)
        );
        break;
    }
  }

  function addProductToCart() {
    if (productData.price === 0) {
      const getInfoProductToAddToCart = {
        id: productData.id,
        price: productData.original_price,
        code: productData.code,
        name: productData.name,
        avatar: productData.avatar,
        quantity: 1
      };
      actions.addItemToCart(getInfoProductToAddToCart);
      history.push(routes.cart);
    } else {
      const getInfoProductToAddToCart = {
        id: productData.id,
        price: productData.price,
        code: productData.code,
        name: productData.name,
        avatar: productData.avatar,
        quantity: 1
      };
      actions.addItemToCart(getInfoProductToAddToCart);
      history.push(routes.cart);
    }
  }

  return (
    <React.Fragment>
      <Row
        gutter={16}
        id={`banner-${wrapPosition}`}
        className="custom-hot-product-wrapper">
        <Col id="custom-product-picture-wrapper" md={24} xs={24}>
          <div id="product-picture-wrapper">
            <img src={productData?.background || productData?.avatar} alt="" />
          </div>
        </Col>
        <Col md={8} xs={12} id={`product-des-wrapper-${wrapPosition}`}>
          <h3 style={{ color: `${productData?.description_color}` }}>
            {productData?.name || ''}
          </h3>
          <HTMLParser
            style={{ color: `${productData?.description_color}` }}
            className="text-wrapper break-words truncate"
            content={
              current_language === 'en'
                ? productData?.description_en
                : productData?.description_vi
            }
          />

          <div className="mt-2" id="button-wrapper">
            {productData?.original_price !== 0 && (
              <Button
                type="primary"
                id="btn-buy"
                onClick={() => addProductToCart()}>
                {getTranslatedText('btn_buy')}
              </Button>
            )}
            {productData && productData.hide_detail === 0 ? (
              <Button id="btn-more" onClick={goToProductDetail}>
                {getTranslatedText('btn_learn_more')}
              </Button>
            ) : null}
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    current_language: state.utilityReducer.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addItemToCart
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotProductComponent);
