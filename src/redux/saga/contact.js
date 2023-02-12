import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions';

// eslint-disable-next-line
export default {
  postContactSubmit: function* (action) {
    let bodyRequest = action.payload;
    try {
      let response = yield global.apiService.apiCall('post', 'contact/submit', bodyRequest);
      if (response.data) {
        let contactSubmitData = response.data;
        if (contactSubmitData.isSuccess) {
          yield put({
            type: actionTypes.CONTACT_SUBMIT_SUCCESS,
            payload: contactSubmitData.data,
          });
        } else {
          yield put({
            type: actionTypes.CONTACT_SUBMIT_FAILURE,
            payload: contactSubmitData.errors
          });
        }
      } else {
        yield put({
          type: actionTypes.CONTACT_SUBMIT_FAILURE,
          payload: ['Something went wrong']
        });
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actionTypes.CONTACT_SUBMIT_FAILURE,
        payload: ['Something went wrong']
      });
    };
  },
  postEmailSubcrible: function* (action) {
    let bodyRequest = action.payload;
    try {
      let response = yield global.apiService.apiCall('post', 'contact/subscribe', bodyRequest);
      if (response.data) {
        let emailSubcibleData = response.data;
        if (emailSubcibleData.isSuccess) {
          yield put({
            type: actionTypes.EMAIL_SUBCRIBLE_SUCCESS,
            payload: emailSubcibleData.data
          });
        } else {
          yield put({
            type: actionTypes.EMAIL_SUBCRIBLE_FAILURE,
            payload: emailSubcibleData.errors
          });
        }
      } else {
        yield put({
          type: actionTypes.EMAIL_SUBCRIBLE_FAILURE,
          payload: ['Something went wrong']
        });
      }
    } catch (errors) {
      yield put({
        type: actionTypes.EMAIL_SUBCRIBLE_FAILURE,
        payload: ['Something went wrong']
      });
    };
  }
};