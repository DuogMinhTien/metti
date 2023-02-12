import { put } from 'redux-saga/effects';
import * as actionType from '../actions/index';

// eslint-disable-next-line
export default {
  getNewsCategoriesSaga: function* (action) {
    try {
      let response = yield global.apiService.apiCall('get', 'news/categories');
      if (response.data) {
        let newsCategoriesData = response.data;
        if (newsCategoriesData.isSuccess) {
          yield put({
            type: actionType.GET_NEWS_CATEGORIES_SUCCESS,
            payload: newsCategoriesData.data
          })
        } else {
          yield put({
            type: actionType.GET_NEWS_CATEGORIES_FAILURE,
            payload: newsCategoriesData.errors
          })
        }
      } else {
        yield put({
          type: actionType.GET_NEWS_CATEGORIES_FAILURE,
          payload: ['Something went wrong!']
        });
      };
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_NEWS_CATEGORIES_FAILURE,
        payload: ['Something went wrong!']
      });
    };
  },
  getNewsList: function* (action) {
    try {
      let response = yield global.apiService.apiCall('get', 'news/posts', action.payload);
      if (response.data) {
        let newsListData = response.data;
        if (newsListData.isSuccess) {
          yield put({
            type: actionType.GET_NEWS_LIST_SUCCESS,
            payload: newsListData.data
          })
        } else {
          yield put({
            type: actionType.GET_NEWS_LIST_FAILURE,
            payload: newsListData.errors
          })
        }
      } else {
        yield put({
          type: actionType.GET_NEWS_LIST_FAILURE,
          payload: ['Something went wrong!']
        });
      };
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_NEWS_LIST_FAILURE,
        payload: ['Something went wrong!']
      });
    };
  },
  getNewsDetail: function* (action) {
    try {
      let response = yield global.apiService.apiCall('get', `news/post/${action.payload}`);
      if (response.data) {
        let newsListData = response.data;
        if (newsListData.isSuccess) {
          yield put({
            type: actionType.GET_NEWS_DETAIL_SUCCESS,
            payload: newsListData.data
          })
        } else {
          yield put({
            type: actionType.GET_NEWS_DETAIL_FAILURE,
            payload: newsListData.errors
          })
        }
      } else {
        yield put({
          type: actionType.GET_NEWS_DETAIL_FAILURE,
          payload: ['Something went wrong!']
        });
      };
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_NEWS_DETAIL_FAILURE,
        payload: ['Something went wrong!']
      });
    };
  }
};
