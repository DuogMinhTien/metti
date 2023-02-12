import * as actionTypes from '../actions';
import _ from 'lodash';
import { message } from 'antd';
import { getTranslatedText } from '../../services/appService';


const initialState = {
  isLoading: false,
  isSuccess: false,
  data: null,
  error: null,
  total_gift_left: null,
  isNotJoinEvent: null, 
  event_gallery: null,
};

export default function eventReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case actionTypes.VERIFY_CUSTOMER_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      newState.isSuccess= false;
      return newState;

    case actionTypes.VERIFY_CUSTOMER_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.data = action.payload;
      newState.isNotJoinEvent = false;
      return newState;
    
    case actionTypes.VERIFY_CUSTOMER_FAILURE:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      newState.error = action.payload;
      newState.isNotJoinEvent = true;
      message.error(action.payload.join(','));
      return newState;

    case actionTypes.SUBMIT_ADDRESS_REQUEST:
      newState = _.cloneDeep(state);
      newState.isSuccess = false;
      newState.isLoading = true;
      return newState;

    case actionTypes.SUBMIT_ADDRESS_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.data = action.payload;
      message.success(getTranslatedText('request_success'));
      return newState;

    case actionTypes.SUBMIT_ADDRESS_FAILURE:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      newState.error = action.payload;
      message.error(action.payload.join(','));
      return newState;

    case actionTypes.GET_CUSTOMER_INFOR_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      newState.isSuccess= false;
      return newState;

    case actionTypes.GET_CUSTOMER_INFOR_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.data = action.payload;
      return newState;
    
    case actionTypes.GET_CUSTOMER_INFOR_FAILURE:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      newState.error = action.payload;
      message.error(action.payload.join(','));
      return newState;
    
    case actionTypes.GET_GIFT_TOTAL_LEFT_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      newState.isSuccess = false;
      return newState;
    
    case actionTypes.GET_GIFT_TOTAL_LEFT_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.total_gift_left = action.payload;
      return newState;

    case actionTypes.GET_GIFT_TOTAL_LEFT_FAILURE:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.error = action.error;
      return newState;

    case actionTypes.GET_EVENT_GALLERY_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;
    
    case actionTypes.GET_EVENT_GALLERY_SUCCESS:
    newState = _.cloneDeep(state);
    newState.isLoading = false;
    newState.event_gallery = action.payload;
    return newState;

    case actionTypes.GET_EVENT_GALLERY_FAILURE:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.error = action.error;
      return newState;
    default:
      return state;
  };
}; 
