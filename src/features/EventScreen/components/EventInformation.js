import React from 'react';
import {
  Row,
  Col,
} from 'antd';
import { getTranslatedText } from '../../../services/appService';

function EventInformation(props) {

  const {
    current_language,
    total_gift_left,
    lock_count_gift,
  } = props;

  return (
    <React.Fragment>
      <Row
        id='row-event-information-wrapper'
        gutter={16}
      >
        <Col
          id='intro-row-event-information-wrapper'
          xs={24}
          md={24}
          lg={13}
        >
          <div id='title-intro-row-event-information-wrapper'>
            <p>METTICARE</p>
          </div>
          <div id='text-intro-row-event-information-wrapper'>
            {current_language === 'en' ? (
              <React.Fragment>
                <p><b>STOP</b> the spread of <b>COVID-19</b> with <b>SAGAHA FOUNDATION</b></p>
                <p><b>SAGAHA FOUNDATION</b> is proud to launch the solution to
                <b> HELP STOP</b> the spread of <b>COVID-19 </b></p>

                <p>Register on our website, <b>METTITECH.COM</b> to receive your <b>FREE</b> COVID prevention gift set and be a part of the solution</p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p><b>NGĂN CHẶN</b> sự lây lan <b>COVID-19</b> với <b>SAGAHA FOUNDATION</b></p>
                <p><b>SAGAHA FOUNDATION</b> tự hào ra mắt <b>GIẢI PHÁP GIÚP NGĂN
                  CHẶN</b> lây lan <b>COVID-19</b></p>

                  <p>Đăng ký trên trang web của chúng tôi, <b>METTITECH.COM</b>, để
                  nhận bộ quà tặng phòng ngừa COVID <b>MIỄN PHÍ</b> của bạn và
                  trở thành một phần của giải pháp
                </p>
              </React.Fragment>
            )}
          </div>
        </Col>
        <Col
          id='gift-info-row-event-information-wrapper'
          xs={24}
          md={24}
          lg={11}
        >
          <h3>{getTranslatedText('total_value_of_gift')}</h3>
          <div
            id='row-gift-info-row-event-information-wrapper'
          >
            <div className='item-gift-info-row-event-information-wrapper'>
              <p className='title-gift-info-row-event-information-wrapper'>$1.5M</p>
              <p className='text-gift-info-row-event-information-wrapper'>{getTranslatedText('text_total_value_of_gift')}</p>
            </div>
            <div className='item-gift-info-row-event-information-wrapper'>
              {lock_count_gift === 1 ? (
                <p className='title-gift-info-row-event-information-wrapper'>10000</p>
              ) : (
                <p className='title-gift-info-row-event-information-wrapper'>{total_gift_left}</p>
              )}
              <p className='text-gift-info-row-event-information-wrapper'>{getTranslatedText('text_total_gift')}</p>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default EventInformation;