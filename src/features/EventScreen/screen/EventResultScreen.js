import React from 'react';
import {
  useHistory,
} from 'react-router-dom';
import {
  Row,
  Col,
  Button,
} from 'antd';

import '../styles/event-result-screen-styles.less';
import { getTranslatedText } from '../../../services/appService';
import routes from '../../../constant/routes';

function EventResultScreen() {

  const history = useHistory();

  return (
    <React.Fragment>
      <Row
        id='event-result-screen-wrapper'
        gutter={16}
      >
        <Col
          id='title-event-result-screen-wrapper'
          xs={24}
          md={24}
          lg={24}
        >
          <div
            id='content-title-event-result-screen-wrapper'
          >
            <p>METTICARE</p>
          </div>
        </Col>
        <Col
          id='content-event-result-screen-wrapper'
          xs={24}
          md={24}
          lg={12}
        >
          <div
            id='text-content-event-result-screen-wrapper'
          >
            <p>
              {getTranslatedText('event_result_text')}
            </p>
          </div>
          <h3>SAGAHA FOUNDATION.</h3>
          <div
            id='row-button-content-event-result-screen-wrapper'
          >
            <Button
              id='comeback-btn'
              onClick={() => history.push(routes.event)}
            >
              {getTranslatedText('event_back_btn')}
            </Button>
            <Button
              id='return-homepage-btn'
              onClick={() => history.push(routes.home)}
            >
              {getTranslatedText('event_homepage_btn')}
            </Button>
          </div>
        </Col>
        <Col
          id='image-event-result-screen-wrapper'
          xs={24}
          md={24}
          lg={12}
        >
          <div>
            <img src='../../assets/event/event_result.jpeg' alt='' />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default EventResultScreen;