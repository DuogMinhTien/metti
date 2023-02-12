import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

import { isMobileOnly, isTablet } from "react-device-detect";

import "./styles/carousel-navigator-component-styles.less";

function CarouselNavigatorComponent(props) {
  const { video_array } = props;

  const [slideToShow, setSlideToShow] = useState(4);
  const [carousel1, setCarousel1] = useState(null);
  const [carousel2, setCarousel2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setCarousel1(slider1.current);
    setCarousel2(slider2.current);
  }, []);

  useEffect(() => {
    if (isMobileOnly) {
      setSlideToShow(2);
    } else {
      if (isTablet) {
        setSlideToShow(3);
      } else {
        setSlideToShow(4);
      }
    }
  }, []);

  return (
    <React.Fragment>
      <div id="carousel-navigator-component-wrapper">
        <Carousel
          asNavFor={carousel2}
          ref={slider1}
          dots={false}
          arrows={video_array.length < 5 ? true : false}
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
          {video_array.map((item) => (
            <ReactPlayer className="video-frame" url={item} controls />
          ))}
        </Carousel>
        {video_array.length >= 5 && (
          <Carousel
            className="nav-carousel"
            asNavFor={carousel1}
            ref={slider2}
            slidesToShow={slideToShow}
            swipeToSlide={true}
            focusOnSelect={true}
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
            }
          >
            {video_array.map((item, index) => (
              <div className="container-carousel-item-wrapper">
                <ReactPlayer
                  className="small-video-frame-container-carousel-item-wrapper"
                  url={item}
                  controls={false}
                />
                <p className="pagination-container-carousel-item-wrapper">
                  {index + 1}
                </p>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </React.Fragment>
  );
}

export default CarouselNavigatorComponent;
