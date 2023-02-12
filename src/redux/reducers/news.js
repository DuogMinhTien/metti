import * as actionTypes from '../actions';
import _ from 'lodash';
import { message } from 'antd';

const initialState = {
  isLoading: false,
  isSuccess: false,
  categories: [],
  news: [],
  total_new: 0,
  current_page: 1,
  last_page: null,
  news_detail: '',
};

export default function newsReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case actionTypes.GET_NEWS_CATEGORIES_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;
    
    case actionTypes.GET_NEWS_CATEGORIES_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.categories = action.payload;
      return newState;
    
    case actionTypes.GET_NEWS_CATEGORIES_FAILURE:
      message.error(action.payload.join(','));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;
    
    case actionTypes.GET_NEWS_LIST_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;
    
    case actionTypes.GET_NEWS_LIST_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.news = action.payload.data;
      newState.current_page = action.payload.current_page;
      newState.total_new = action.payload.total;
      newState.last_page = action.payload.last_page;
      return newState;
    
    case actionTypes.GET_NEWS_LIST_FAILURE:
      message.error(action.payload.join(','));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;
    
    case actionTypes.GET_NEWS_DETAIL_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;
    
    case actionTypes.GET_NEWS_DETAIL_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.news_detail = action.payload;
      return newState;
    
    case actionTypes.GET_NEWS_DETAIL_FAILURE:
      message.error(action.payload.join(','));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;
    
    default:
      return state;
  };
}; 
