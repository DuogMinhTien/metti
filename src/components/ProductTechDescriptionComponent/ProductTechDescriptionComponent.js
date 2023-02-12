import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button,
  Divider,
} from 'antd';


function ProductTechDescriptionComponent(props) {

  const {
    techItem,
    index,
    current_language,
  } = props;

  return (
    <React.Fragment>
      <div className='card-wrapper'>
        <Button
          className='btn-custom'
        >
          {index + 1}
        </Button>
        <Divider
          className='line'
          type='vertical'
        />
        <div className='card-text-wrapper'>
          <h5>{techItem[`title_${current_language}`]}</h5>
          {/* <p dangerouslySetInnerHTML={{__html: techItem[`description_${current_language}`]}}/> */}
        </div>
      </div>
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
)(ProductTechDescriptionComponent);