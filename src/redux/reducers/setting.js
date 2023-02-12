import * as actionTypes from '../actions';
import _ from 'lodash';
import { message } from 'antd';


const initialState = {
  isLoading: false,
  isSuccess: false,
  shipFee: null,
  taxFee: null,
  lockCountGift: null,
  list_event_video: null,
};

export default function settingConfigReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case actionTypes.GET_SETTING_CONFIG_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;
    
    case actionTypes.GET_SETTING_CONFIG_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      action.payload.forEach(item => {
        if (item.key === 'ship_fee') {
          newState.shipFee = parseFloat(item.value);
        };
        if (item.key === 'tax_fee') {
          newState.taxFee = parseFloat(item.value);
        };
        if (item.key === 'lock_count_gift') {
          newState.lockCountGift = parseFloat(item.value);
        };
        if (item.key === 'list_event_video') {
          newState.list_event_video = item.value
        };
      });
      return newState;
    
    case actionTypes.GET_SETTING_CONFIG_FAILURE:
      message.error(action.payload.join(','));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;
    
    default:
      return state;
  };
}; 
