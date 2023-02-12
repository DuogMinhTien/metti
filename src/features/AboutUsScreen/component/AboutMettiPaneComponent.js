import React from 'react';
import {
  Row,
  Col,
} from 'antd'; 

function AboutMettiPaneComponent(props) {

  const {
    content,
  } = props;

  return (
    <React.Fragment>
      <Row gutter={[16, 16]}>
        <Col className='col-text-second-wrapper' md={24}>
          <div
            className='text-des-wrapper'
            dangerouslySetInnerHTML={{__html: content}}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AboutMettiPaneComponent;