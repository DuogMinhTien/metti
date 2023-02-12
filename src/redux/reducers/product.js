import * as actionTypes from '../actions';
import _ from 'lodash';
import { message } from 'antd';


const initialState = {
  isLoading: false,
  isSuccess: false,
  products: [],
  product_detail: null,
  categories: []
};


export default function productReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case actionTypes.GET_PRODUCTS_LIST_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;

    case actionTypes.GET_PRODUCTS_LIST_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.products = action.payload;
      return newState;
    
    case actionTypes.GET_PRODUCTS_LIST_FAILURE:
      message.error(action.payload.join(', '));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;

    case actionTypes.GET_PRODUCTS_LIST_BY_CATEGORY_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;

    case actionTypes.GET_PRODUCTS_LIST_BY_CATEGORY_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.products = action.payload;
      return newState;
    
    case actionTypes.GET_PRODUCTS_LIST_BY_CATEGORY_FAILURE:
      message.error(action.payload.join(', '));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;
    
    case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;

    case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.product_detail = action.payload;
      return newState;
    
    case actionTypes.GET_PRODUCT_DETAIL_FAILURE:
      message.error(action.payload.join(', '));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;

    case actionTypes.GET_PRODUCT_CATEGORIES_REQUEST:
      newState = _.cloneDeep(state);
      newState.categories = [];
      newState.isLoading = true;
      return newState;

    case actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.categories = action.payload;
      return newState;

    case actionTypes.GET_PRODUCT_CATEGORIES_FAILURE:
      message.error(action.payload.join(', '));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;
    default:
      return state;
  };
};