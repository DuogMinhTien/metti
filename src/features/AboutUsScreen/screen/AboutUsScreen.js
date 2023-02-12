import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAboutUsList } from '../../../redux/actions';
import { Layout, Tabs } from 'antd';

import '../styles/about-us-screen-styles.less';

import AboutMettiPaneComponent from '../component/AboutMettiPaneComponent';

const { Content } = Layout;

const { TabPane } = Tabs;

function AboutUsScreen(props) {
  const { actions, about_uses, current_language, aboutUsKey, setAboutUsKey } =
    props;

  // eslint-disable-next-line

  useEffect(() => {
    actions.getAboutUsList({
      show_home: 0
    });
    // eslint-disable-next-line
  }, []);

  function handleOnTabChange(activeKey) {
    setAboutUsKey(activeKey);
  }

  return (
    <React.Fragment>
      <Content id="about-us-screen-wrapper">
        <div id="heading-banner-wrapper">
          <img src={'../../assets/aboutus/banner.png'} alt="" />
        </div>
        <Content id="tabs-about-us-wrapper">
          <Tabs
            className="about-us-tabs-wrapper"
            activeKey={aboutUsKey}
            onChange={activeKey => handleOnTabChange(activeKey)}>
            {about_uses &&
              about_uses.map(item => (
                <TabPane
                  tab={item[`title_${current_language}`]}
                  key={`${item.order}`}>
                  <AboutMettiPaneComponent
                    content={item[`description_${current_language}`]}
                  />
                </TabPane>
              ))}
          </Tabs>
        </Content>
      </Content>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    about_uses: state.aboutUsReducer.aboutUses,
    current_language: state.utilityReducer.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getAboutUsList
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
