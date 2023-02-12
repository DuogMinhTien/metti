import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getCustomerInfoAction,
  getGiftTotalLeftAction,
  getEventGalleryAction,
} from "../../../redux/actions";
import { useRouteMatch, useHistory, Link } from "react-router-dom";
import { Row, Col, Modal, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import FormVerifyCustomer from "../components/FormVerifyCustomer";
import FormSubmitAddressReceiveGift from "../components/FormSubmitAddressReceiveGift";
import EventInformation from "../components/EventInformation";
import NotificationModal from "../components/NotificationModal";

import "../styles/event-screen-styles.less";
import routes from "../../../constant/routes";
import { getTranslatedText } from "../../../services/appService";
import CarouselNavigatorComponent from "../../../components/CarouselNavigatorComponent/CarouselNavigatorComponent";

function EventScreen(props) {
  const {
    actions,
    customer_info,
    isSuccess,
    error_message,
    current_language,
    total_gift_left,
    isNotJoinEvent,
    lock_count_gift,
    list_event_video,
    event_gallery,
  } = props;

  const [render, setRender] = useState("");
  const [visible, setVisible] = useState(false);
  const [formItemDisable, setFormItemDisable] = useState(false);

  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    setVisible(false);
    setFormItemDisable(false);
    actions.getGiftTotalLeftAction();
    actions.getEventGalleryAction({
      key: "event_gallery",
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isNotJoinEvent === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isNotJoinEvent]);

  useEffect(() => {
    if (total_gift_left === 0) {
      setFormItemDisable(true);
    }
  }, [total_gift_left]);

  useEffect(() => {
    if (match.params.email) {
      if (error_message) {
        setFormItemDisable(true);
        setRender("address-form");
      } else {
        actions.getCustomerInfoAction(match.params);
        setRender("address-form");
      }
    } else {
      setRender("verify-form");
    }
    // eslint-disable-next-line
  }, [match, error_message]);

  useEffect(() => {
    if (isSuccess) {
      if (match.params.email) {
        history.push(routes.event_result);
      }
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  return (
    <React.Fragment>
      <Row id="event-screen-wrapper" gutter={16}>
        <Col id="header-event-screen-wrapper" xs={24} md={24} lg={24}>
          <div id="content-header-event-screen-wrapper">
            <img
              id="banner-background-content-header-event-screen-wrapper"
              src="../../assets/event/banner_event.jpeg"
              alt=""
            />
            <p id="text-time-line">{getTranslatedText("event_time_line")}</p>
          </div>
        </Col>
        <Col id="event-information-wrapper" xs={24} md={24} lg={24}>
          <EventInformation
            current_language={current_language}
            total_gift_left={total_gift_left}
            lock_count_gift={lock_count_gift}
          />
        </Col>
        <Col id="event-video-wrapper" xs={24} md={24} lg={24}>
          <div id="container-event-video-wrapper">
            {list_event_video && (
              <CarouselNavigatorComponent
                video_array={list_event_video.split(",")}
              />
            )}
          </div>
          <div className="w-full text-center md:pt-5 pt-2">
            <Link to={routes.news}>
              <button className="bg-primary font-bold rounded-3xl px-3 py-2 md:px-4 md:py-3 shadow text-white uppercase w-32 md:w-40 2xl:w-72 2xl:py-8 2xl:text-3xl 2xl:rounded-4xl">
                {getTranslatedText("btn_our_news")}
              </button>
            </Link>
          </div>
        </Col>
        <Col id="event-gallery-wrapper" xs={24} md={24} lg={24}>
          {event_gallery && (
            <div id="container-event-gallery-wrapper">
              <h1>{getTranslatedText("event_gallery")}</h1>
              <Carousel
                autoplay
                autoplaySpeed={3000}
                infinite
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
                }
              >
                {event_gallery.map((item) => (
                  <div className="item-image-carousel-wrapper">
                    <img src={item} alt="" />
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </Col>
        <Col id="event-form" xs={24} md={24} lg={24}>
          {render === "verify-form" ? (
            <FormVerifyCustomer formItemDisable={formItemDisable} />
          ) : (
            <FormSubmitAddressReceiveGift
              formItemDisable={formItemDisable}
              customer_info={customer_info}
            />
          )}
        </Col>
      </Row>
      <Modal
        visible={visible}
        destroyOnClose={true}
        footer={null}
        onCancel={() => setVisible(!visible)}
      >
        <NotificationModal />
      </Modal>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    customer_info: state.eventReducer.data,
    isSuccess: state.eventReducer.isSuccess,
    error_message: state.eventReducer.error,
    current_language: state.utilityReducer.language,
    total_gift_left: state.eventReducer.total_gift_left,
    lock_count_gift: state.settingConfigReducer.lockCountGift,
    isNotJoinEvent: state.eventReducer.isNotJoinEvent,
    list_event_video: state.settingConfigReducer.list_event_video,
    event_gallery: state.eventReducer.event_gallery,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getCustomerInfoAction,
        getGiftTotalLeftAction,
        getEventGalleryAction,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);
