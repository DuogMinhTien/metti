import * as actionTypes from '../actions';
import _ from 'lodash';
import { message } from 'antd';


const initialState = {
  isLoading: false,
  isSuccess: false,
  banners: [],
};

export default function bannerReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case actionTypes.GET_BANNER_LIST_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;
    
    case actionTypes.GET_BANNER_LIST_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.banners = action.payload;
      return newState;
    
    case actionTypes.GET_BANNER_LIST_FAILURE:
      message.error(action.payload.join(','));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;
    
    default:
      return state;
  };
}; 
