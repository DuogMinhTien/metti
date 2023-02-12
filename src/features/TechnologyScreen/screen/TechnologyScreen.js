import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getTechnologyList,
} from '../../../redux/actions';
import {
  Layout,
  Row,
  Col,
  Button,
  Modal,
} from 'antd';

import {
  PlayCircleFilled,
} from '@ant-design/icons';

import '../styles/technology-styles.less';

import TechCardComponent from '../component/TechCardComponent';
import { getTranslatedText } from '../../../services/appService';

import featureBanner from '../../../assets/images/feature_banner.png';

const {
  Content,
} = Layout;

function TechnologyScreen(props) {

  const {
    actions,
    technologies,
    current_language
  } = props;

  const [modalVisible, setModalVisible] = useState(false);
  // eslint-disable-next-line
  const [arrayOrder, setArrayOrder] = useState([4,3,2,1]);

  useEffect(() => {
    actions.getTechnologyList({
      show_technology: 1
    });
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Content id='technology-screen'>
        <Row id='technology-screen-wrapper' gutter={[16,24]}>
          <Col id='banner-wrapper' md={24}>
            <div id='banner-header-wrapper'>
              <img src={'../../assets/technology/banner.jpg'} alt='' />
              <div id='banner-des-wrapper'>
                <h2>{getTranslatedText('our_technology_title')}</h2>
                <div id='text-subheading-wrapper'>
                  <p>
                    {getTranslatedText('tech_screen_subtitle')}
                  </p>
                  <Button
                    id='tech-banner-btn'
                    type='primary'
                    onClick={() => setModalVisible(!modalVisible)}
                  >
                    <PlayCircleFilled /> {getTranslatedText('btn_watch_video')}
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col id='tech-cards-wrapper' md={24}>
            <Row gutter={[16,16]}>
              {technologies.map(item => (
                <React.Fragment>
                  {arrayOrder.map(number => (
                    <React.Fragment>
                      {item.order === number ? (
                        <Col
                          md={24}
                          xs={24}
                          lg={12}
                          className='col-card-wrapper'
                        >
                          <TechCardComponent
                            title={item[`title_${current_language}`]}
                            description={item[`description_${current_language}`]}
                          />
                        </Col>
                      ) : (
                        null
                      )}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </Row>
          </Col>
          <Col md={24} xs={24}>
            <div id='feature-banner'>
              <img src={featureBanner} alt='' />
            </div>
          </Col>
          <Col md={24}>
            {current_language === 'en' ? (
              <div id='tech-footer-banner'>
                <video
                  controls
                  width='100%'
                  poster={'../../assets/thumbnail.png'}
                >
                  <source
                    src={'../../assets/video2d.mp4'}
                    type='video/mp4'
                  />
                </video>
              </div>
            ) : (
              <div id='tech-footer-banner'>
                <video
                  controls
                  width='100%'
                  poster={'../../assets/thumbnail.png'}
                >
                  <source
                    src={'../../assets/video2dvi.mp4'}
                    type='video/mp4'
                  />
                </video>
              </div>
            )}
          </Col>
        </Row>
        <Modal
          visible={modalVisible}
          destroyOnClose
          closable
          onCancel={() => setModalVisible(!modalVisible)}
          footer={null}
        >
          {current_language === 'en' ? (
            <video
              autoPlay
              controls
              width='100%'
              poster={'../../assets/thumbnail.png'}
            >
              <source
                src={'../../assets/video2d.mp4'}
                type='video/mp4'
              />
            </video>
          ) : (
            <video
              autoPlay
              controls
              width='100%'
              poster={'../../assets/thumbnail.png'}
            >
              <source
                src={'../../assets/video2dvi.mp4'}
                type='video/mp4'
              />
            </video>
          )}
        </Modal>
      </Content>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    technologies: state.technologyReducer.technologies,
    current_language: state.utilityReducer.language,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getTechnologyList,
    },
    dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TechnologyScreen);