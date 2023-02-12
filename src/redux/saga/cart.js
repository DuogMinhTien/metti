import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions';

// eslint-disable-next-line
export default {
  addItemToCart: function* (action) {
    let cartItem = action.payload;
    yield put({
      type: actionTypes.ADD_ITEM_TO_CART_SUCCESS,
      payload: cartItem
    });
  }
};