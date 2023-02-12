import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getCurrentLanguage,
  loadCartFromLocalStorage,
  getSettingConfigAction
} from './redux/actions';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.less';
import { Layout, Spin } from 'antd';

import RouteContainer from './features/index';

import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App(props) {
  const { isLoading, actions } = props;

  //GET CURRENT LANGUAGE
  useEffect(() => {
    actions.getCurrentLanguage();
    actions.loadCartFromLocalStorage();
    actions.getSettingConfigAction();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Layout>
        <Router>
          <ScrollToTop />
          <TopBar />
          <Spin spinning={isLoading}>
            <div className="w-full bg-white xl:min-h-screen">
              <RouteContainer />
            </div>
          </Spin>
          <Footer />
        </Router>
      </Layout>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoading:
      state.bannerReducer.isLoading ||
      state.partnerReducer.isLoading ||
      state.productReducer.isLoading ||
      state.technologyReducer.isLoading ||
      state.contactReducer.isLoading ||
      state.orderReducer.isLoading ||
      state.cartReducer.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getCurrentLanguage,
        loadCartFromLocalStorage,
        getSettingConfigAction
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
