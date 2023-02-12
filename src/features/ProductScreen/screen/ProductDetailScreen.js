import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductDetail, addItemToCart } from '../../../redux/actions';
import { useParams, useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';

import '../styles/product-screen-styles.less';

import routes from '../../../constant/routes';

import ProductDetailCarouselComponent from '../component/ProductDetailCarouselComponent';
import ProductTechnologyComponent from '../component/ProductTechnologyComponent';
import ProductManualComponent from '../component/ProductManualComponent';
import { getTranslatedText, dataURItoBlod } from '../../../services/appService';
import CarouselNavigatorComponent from '../../../components/CarouselNavigatorComponent/CarouselNavigatorComponent';
import PDFRender from '../../../components/PDFRender/PDFRender';

const { Content } = Layout;

function ProductDetailComponent(props) {
  const { actions, product, current_language, setAboutUsKey } = props;

  const [productDetail, setProductDetail] = useState({});
  const [productTechnologies, setProductTechnologies] = useState([]);
  const [showPDF, onShowPDF] = useState(false);
  // eslint-disable-next-line
  const [productReviewers, setProductReviewers] = useState([]);
  const [productManuals, setProductManuals] = useState(null);

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const payload = {
      id: parseInt(params.product_id)
    };
    actions.getProductDetail(payload);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (product) {
      setProductDetail(product);
      setProductTechnologies(product.technologies);
      setProductReviewers(product.reviews);
      setProductManuals(product.user_manuals);
    }
  }, [product]);

  useEffect(() => {
    if (current_language === 'en' && productDetail?.pdf_file) onShowPDF(true);
    if (current_language === 'vi' && productDetail?.pdd_file_vi)
      onShowPDF(true);
  }, [current_language, productDetail]);

  function addProductToCart() {
    if (productDetail.price === 0) {
      const getInforProductToAddToCart = {
        id: productDetail.id,
        price: productDetail.original_price,
        code: productDetail.code,
        name: productDetail.name,
        avatar: productDetail.avatar,
        quantity: 1
      };
      actions.addItemToCart(getInforProductToAddToCart);
      history.push(routes.cart);
    } else {
      const getInforProductToAddToCart = {
        id: productDetail.id,
        price: productDetail.price,
        code: productDetail.code,
        name: productDetail.name,
        avatar: productDetail.avatar,
        quantity: 1
      };
      actions.addItemToCart(getInforProductToAddToCart);
      history.push(routes.cart);
    }
  }

  function goToAboutUsScreen() {
    history.push(routes.about_us);
    setAboutUsKey('5');
  }

  return (
    <React.Fragment>
      <Content id="product-detail-wrapper">
        <ProductDetailCarouselComponent
          productData={productDetail}
          addProductToCart={addProductToCart}
        />
        <ProductTechnologyComponent productTech={productTechnologies} />
        <ProductManualComponent productManuals={productManuals} />

        {current_language === 'en' ? (
          // eslint-disable-next-line
          <React.Fragment>
            {!!productDetail?.link_video_en && (
              <CarouselNavigatorComponent
                video_array={productDetail.link_video_en.split(',')}
              />
            )}
          </React.Fragment>
        ) : (
          // eslint-disable-next-line
          <React.Fragment>
            {!!productDetail?.link_video_vi && (
              <CarouselNavigatorComponent
                video_array={productDetail.link_video_vi.split(',')}
              />
            )}
          </React.Fragment>
        )}
        <div id="button-license-wrapper">
          {current_language === 'en' ? (
            <button onClick={() => goToAboutUsScreen()}>
              {productDetail?.name} {getTranslatedText('btn_license')}
            </button>
          ) : (
            <button onClick={() => goToAboutUsScreen()}>
              {getTranslatedText('btn_license')} {productDetail?.name}
            </button>
          )}
        </div>
        <div id="banner-combo-wrapper">
          <img alt="" src={productDetail?.banner_detail} />
          {productDetail?.banner_detail !== '' && (
            <div id="control-banner-combo-wrapper">
              {productDetail?.price === 0 &&
              productDetail?.original_price === 0 ? null : (
                <>
                  <p>*{getTranslatedText('form_address_text')}</p>
                  <Button onClick={() => addProductToCart()}>
                    {getTranslatedText('btn_buy_now')}
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
        {showPDF && (
          <div>
            <PDFRender
              file={
                current_language === 'en'
                  ? dataURItoBlod(productDetail?.pdf_file)
                  : dataURItoBlod(productDetail?.pdf_file_vi)
              }
              onlyFirstPage
            />
            <div className="w-full mt-5">
              <a
                href={
                  current_language === 'en'
                    ? productDetail?.download_pdf_file
                    : productDetail?.download_pdf_file_vi
                }
                download
                target="_blank"
                rel="noreferrer">
                <p className="w-1/2 md:w-3/12 mx-auto bg-primary text-white px-4 py-2 shadow-base rounded-lg text-center text-sm md:text-xl font-semibold">
                  {getTranslatedText('download_pdf_title')}
                </p>
              </a>
            </div>
          </div>
        )}
        <div></div>
      </Content>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    product: state.productReducer.product_detail,
    current_language: state.utilityReducer.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getProductDetail,
        addItemToCart
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailComponent);
