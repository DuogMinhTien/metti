import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Tabs,
  Row,
  Col,
} from 'antd';
import { getTranslatedText } from '../../../services/appService';

const {
  TabPane,
} = Tabs;

function ProductManualComponent(props) {

  const {
    productManuals,
    current_language,
  } = props;

  return (
    <React.Fragment>
      <Row id='product-manual-wrapper' gutter={16}>
        <Col id='heading' md={24} xs={24}>
          <h3>{getTranslatedText('product_manual')}</h3>
        </Col>
        <Col md={24} xs={24}>
          <Tabs
            className='product-manual-tab-wrapper'
          >
            {productManuals && productManuals.map((item, index) => (
              <TabPane
                tab={(productManuals) ? item[`title_${current_language}`] : ''}
                key={index + 1}
              >
                <div
                  dangerouslySetInnerHTML={(productManuals) ? {
                    __html: item[`description_${current_language}`]
                  } : {
                    __html: '<p></p>'
                  }}
                >
                </div>
              </TabPane>  
            ))}
          </Tabs>
        </Col>
      </Row>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    current_language: state.utilityReducer.language
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
    },
    dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductManualComponent);