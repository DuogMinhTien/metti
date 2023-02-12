import { put } from 'redux-saga/effects';
import * as actionType from '../actions/index';

// eslint-disable-next-line
export default {
  getAboutUsList: function* (action) {
    try {
      let response = yield global.apiService.apiCall('get', 'about-us/list', action.payload);
      if (response.data) {
        let aboutUsData = response.data;
        if (aboutUsData.isSuccess) {
          yield put({
            type: actionType.GET_ABOUT_US_LIST_SUCCESS,
            payload: aboutUsData.data
          })
        } else {
          yield put({
            type: actionType.GET_ABOUT_US_LIST_FAILURE,
            payload: aboutUsData.errors
          })
        }
      } else {
        yield put({
          type: actionType.GET_ABOUT_US_LIST_FAILURE,
          payload: ['Something went wrong!']
        });
      };
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_ABOUT_US_LIST_FAILURE,
        payload: ['Something went wrong!']
      });
    };
  }
};
