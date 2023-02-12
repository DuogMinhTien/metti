import React from 'react';
import {
  Col,
  Row,
  Carousel,
} from 'antd';

import {
  getTranslatedText,
} from '../../../services/appService';

function ProductGiftSet() {

  return (
    <React.Fragment>
      <Col
          id='carousel-gift-form-verify-customer-wrapper'
          xs={24}
          md={24}
          lg={0}
        >
          <Carousel
            className='slick-carousel-gift-form-verify-customer-wrapper'
            dots={false}
            autoplay
          >
            <div className='content-slick-carousel-gift-form-verify-customer-wrapper'>
              <img src='../../assets/event/vihara_bottle_2_mobile.jpg' alt='' />
              <div className='image-text-wrapper'>
                <p>{getTranslatedText('product_vihara')}</p>
              </div>
              <div className='price-wrapper'>
                <p>{getTranslatedText('product_vihara_bonus_info')}</p>
              </div>
            </div>
            <div className='content-slick-carousel-gift-form-verify-customer-wrapper'>
              <img src='../../assets/event/maskbigcmobile.jpg' alt='' />
              <div className='image-text-wrapper'>
                <p>{getTranslatedText('product_mask_bigc')}</p>
              </div>
              <div className='price-wrapper'>
                <p>$8</p>
              </div>
            </div>
            <div className='content-slick-carousel-gift-form-verify-customer-wrapper'>
              <img src='../../assets/event/maskmobile.jpg' alt='' />
              <div className='image-text-wrapper'>
                <p>{getTranslatedText('product_mask')}</p>
              </div>
              <div className='price-wrapper'>
                <p>$5</p>
              </div>
            </div>
            <div className='content-slick-carousel-gift-form-verify-customer-wrapper'>
              <img src='../../assets/event/shieldmobile.jpg' alt='' />
              <div className='image-text-wrapper'>
                <p>{getTranslatedText('product_shield')}</p>
              </div>
              <div className='price-wrapper'>
                <p>$2</p>
              </div>
            </div>
          </Carousel>
          <div id='text-carousel-gift-form-verify-customer-wrapper'>
            <p className='p-text-carousel-gift-form-verify-customer-wrapper'>
              {getTranslatedText('form_verify_text_1')}
            </p>
            <p className='p-text-carousel-gift-form-verify-customer-wrapper'>
              {getTranslatedText('form_verify_text_2')}
            </p>
          </div>
        </Col>
        <Col
          id='image-grid-form-verify-customer-wrapper'
          xs={0}
          md={0}
          lg={13}
        >
          <Row
            id='row-image-grid-form-verify-customer-wrapper'
            gutter={[0, 0]}
          >
            <Col
              xs={0}
              md={0}
              lg={16}
            >
              <div>
                <img src='../../assets/event/vihara_bottle_2_desktop.jpg' alt='' />
                <div id='big-image-text-wrapper'>
                  <p>{getTranslatedText('product_vihara')}</p>
                </div>
                <div id='big-image-price-wrapper'>
                <p>{getTranslatedText('product_vihara_bonus_info')}</p>
                </div>
              </div>
            </Col>
            <Col
              xs={0}
              md={0}
              lg={8}
            >
              <div className='small-gift-wrapper'>
                <img src='../../assets/event/maskBigC75.jpg' alt='' />
                <div className='small-image-text-wrapper'>
                  <p>{getTranslatedText('product_mask_bigc')}</p>
                </div>
                <div className='small-image-price-wrapper'>
                  <p>$8</p>
                </div>
              </div>
              <div className='small-gift-wrapper'>
                <img src='../../assets/event/mask75.jpg' alt='' />
                <div className='small-image-text-wrapper'>
                  <p>{getTranslatedText('product_mask')}</p>
                </div>
                <div className='small-image-price-wrapper'>
                  <p>$5</p>
                </div>
              </div>
              <div className='small-gift-wrapper'>
                <img src='../../assets/event/shield75.jpg' alt='' />
                <div className='small-image-text-wrapper'>
                  <p>{getTranslatedText('product_shield')}</p>
                </div>
                <div className='small-image-price-wrapper'>
                  <p>$2</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
    </React.Fragment>
  )
};

export default ProductGiftSet;