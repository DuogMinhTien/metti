import { put } from "redux-saga/effects";
import * as actionType from "../actions/index";

// eslint-disable-next-line
export default {
  getPartnerList: function* (action) {
    try {
      let response = yield global.apiService.apiCall(
        "get",
        "partner/list",
        action.payload
      );
      if (response.data) {
        let partnerListData = response.data;
        if (partnerListData.isSuccess) {
          yield put({
            type: actionType.GET_PARTNER_LIST_SUCCESS,
            payload: partnerListData.data,
          });
        } else {
          yield put({
            type: actionType.GET_PARTNER_LIST_FAILURE,
            payload: partnerListData.errors,
          });
        }
      } else {
        yield put({
          type: actionType.GET_PARTNER_LIST_FAILURE,
          payload: ["Something went wrong!"],
        });
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_PARTNER_LIST_FAILURE,
        payload: ["Something went wrong!"],
      });
    }
  },
  getPartnerById: function* (action) {},
};
