import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions/index';

// eslint-disable-next-line
export default {
  postOrder: function* (action) {
    let bodyRequest = action.payload;
    try {
      let response = yield global.apiService.apiCall('post', 'order', bodyRequest);
      if (response.data) {
        let orderBodyResponse = response.data;
        if (orderBodyResponse.isSuccess) {
          yield put({
            type: actionTypes.POST_ORDER_SUCCESS,
            payload: orderBodyResponse.data,
          });
        } else {
          yield put({
            type: actionTypes.POST_ORDER_FAILURE,
            payload: orderBodyResponse.errors
          })
        }
      } else {
        yield put({
          type: actionTypes.POST_ORDER_FAILURE,
          payload: ['Something went wrong!']
        })
      };
    } catch (errors) {
      console.log(errors);
      yield put({
        type: actionTypes.POST_ORDER_FAILURE,
        payload: ['Something went wrong!']
      });
    }
  }
};
