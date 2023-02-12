import { put } from 'redux-saga/effects';
import * as actionType from '../actions/index';

// eslint-disable-next-line
export default {
  getBannerList: function* (action) {
    try {
      let response = yield global.apiService.apiCall('get', 'banner/list', action.payload);
      if (response.data) {
        let bannerData = response.data;
        if (bannerData.isSuccess) {
          yield put({
            type: actionType.GET_BANNER_LIST_SUCCESS,
            payload: bannerData.data
          })
        } else {
          yield put({
            type: actionType.GET_BANNER_LIST_FAILURE,
            payload: bannerData.errors
          })
        }
      } else {
        yield put({
          type: actionType.GET_BANNER_LIST_FAILURE,
          payload: ['Something went wrong!']
        });
      };
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_BANNER_LIST_FAILURE,
        payload: ['Something went wrong!']
      });
    };
  }
};
