import { put } from "redux-saga/effects";
import * as actionType from "../actions/index";

// eslint-disable-next-line
export default {
  getTechnologyList: function* (action) {
    try {
      let response = yield global.apiService.apiCall(
        "get",
        "technology/list",
        action.payload
      );
      if (response.data) {
        let technologyListData = response.data;
        if (technologyListData.isSuccess) {
          yield put({
            type: actionType.GET_TECHNOLOGY_LIST_SUCCESS,
            payload: technologyListData.data,
          });
        } else {
          yield put({
            type: actionType.GET_TECHNOLOGY_LIST_FAILURE,
            payload: technologyListData.errors,
          });
        }
      } else {
        yield put({
          type: actionType.GET_TECHNOLOGY_LIST_FAILURE,
          payload: ["Something went wrong!"],
        });
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_TECHNOLOGY_LIST_FAILURE,
        payload: ["Something went wrong!"],
      });
    }
  },
};
