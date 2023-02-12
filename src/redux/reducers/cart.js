import * as actionTypes from '../actions';
import { message } from 'antd';
import _ from 'lodash';
import { getTranslatedText } from '../../services/appService';

const initialState = {
  isLoading: false,
  isSuccess: false,
  carts: [],
  productIdArray: [],
};

export default function cartReducer(state = initialState, action) {
  let newState = {};
  let currentItem = null;
  switch (action.type) {
    case actionTypes.LOAD_CART_FROM_LOCAL_STORAGE:
      if(localStorage.getItem('cart')) {
        newState = _.cloneDeep(state);
        let cartStorage = JSON.parse(localStorage.getItem('cart'));
        newState = cartStorage;
        return newState;
      } else {
        return state;
      }

    case actionTypes.ADD_ITEM_TO_CART_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;
    case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
      newState = _.cloneDeep(state);
      currentItem = action.payload;
      if (newState.productIdArray.includes(currentItem.id)) {
        newState.carts.forEach(element => {
          if (element.id === currentItem.id) {
            element.quantity = element.quantity + currentItem.quantity;
          }
        });
      } else {
        newState.productIdArray.push(currentItem.id);
        newState.carts.push(currentItem);
      }
      newState.isLoading = false;
      newState.isSuccess = true;
      localStorage.setItem('cart', JSON.stringify(newState));
      message.success(getTranslatedText('put_item_to_cart_success_message'));
      return newState;
    case actionTypes.INCREASE_QUANTITY:
      newState = _.cloneDeep(state);
      currentItem = action.payload;
      newState.carts.forEach(element => {
        if (element.id === currentItem.id) {
          element.quantity = element.quantity + 1;
        };
      });
      newState.isLoading = false;
      newState.isSuccess = true;
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    case actionTypes.DECREASE_QUANTITY:
      newState = _.cloneDeep(state);
      currentItem = action.payload;
      newState.carts.forEach(element => {
        if (element.id === currentItem.id) {
          if (element.quantity > 1) {
            element.quantity = element.quantity - 1;
          }
        };
      });
      newState.isLoading = false;
      newState.isSuccess = true;
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    
    case actionTypes.DELETE_ITEM_IN_CART:
      newState = _.cloneDeep(state);
      currentItem = action.payload;
      _.remove(newState.carts, function(element) {
        return element.id === currentItem.id;
      });
      _.remove(newState.productIdArray, function(element) {
        return element === currentItem.id;
      })
      newState.isLoading = false;
      newState.isSuccess = true;
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};