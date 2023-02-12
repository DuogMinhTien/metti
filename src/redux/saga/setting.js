import { put } from 'redux-saga/effects';
import * as actionType from '../actions/index';

// eslint-disable-next-line
export default {
  getSettingConfig: function* (action) {
    try {
      let response = yield global.apiService.apiCall('get', 'setting');
      if (response.data) {
        let settingConfigData = response.data;
        if (settingConfigData.isSuccess) {
          yield put({
            type: actionType.GET_SETTING_CONFIG_SUCCESS,
            payload: settingConfigData.data
          })
        } else {
          yield put({
            type: actionType.GET_SETTING_CONFIG_FAILURE,
            payload: settingConfigData.errors
          })
        }
      } else {
        yield put({
          type: actionType.GET_SETTING_CONFIG_FAILURE,
          payload: ['Something went wrong!']
        });
      };
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_SETTING_CONFIG_FAILURE,
        payload: ['Something went wrong!']
      });
    };
  }
};
