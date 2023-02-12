import React, { useState, useEffect } from 'react';
import { enquireScreen } from 'enquire-js';
import {
  Row,
  Col,
  Carousel
} from 'antd';

import TeamMemberCard from '../../../components/TeamMemberCard/TeamMemberCard';
import { getTranslatedText } from '../../../services/appService';


function ProductDevelopTeamComponent(props) {

  const {
    productDevTeam,
  } = props;

  const [isMobile, setIsMobile] = useState(false);
  const [slideToShow, setSlideToShow] = useState(null);

  // CHECK MOBILE SCREEN
  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(b);
    });
  }, []);

  //SET NUMBER OF STYLE
  useEffect(() => {
    if (isMobile) {
      setSlideToShow(1);
    } else {
      setSlideToShow(3);
    };
  }, [isMobile]);

  return (
    <React.Fragment>
      <Row id='product-team-wrapper' gutter={16}>
        <Col md={24} xs={24}>
          <h3>{getTranslatedText('product_testimonial')}</h3>
        </Col>
        <Col id='sub-text-heading' xs={24} md={24}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </Col>
        <Col md={24}>
          <Carousel
            slidesToShow={slideToShow}
            className='team-card-custom-carousel'
            dots={false}
            arrows
          >
            {productDevTeam && productDevTeam.map(item => (
              <TeamMemberCard
                teamMember={item}
              />
            ))}
          </Carousel>
          {/* <Button
            id='btn-custom-left'
          >
            <LeftOutlined />
          </Button>
          <Button
            id='btn-custom-right'
          >
            <RightOutlined />
          </Button> */}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductDevelopTeamComponent;