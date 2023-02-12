import { put } from 'redux-saga/effects';
import * as actionType from '../actions/index';

// eslint-disable-next-line
export default {
  getProductList: function* (action) {
    try {
      let response = yield global.apiService.apiCall(
        'get',
        'product/list',
        action.payload
      );
      if (response.data) {
        let productListData = response.data;
        if (productListData.isSuccess) {
          yield put({
            type: actionType.GET_PRODUCTS_LIST_SUCCESS,
            payload: productListData.data
          });
        } else {
          yield put({
            type: actionType.GET_PRODUCTS_LIST_FAILURE,
            payload: productListData.errors
          });
        }
      } else {
        yield put({
          type: actionType.GET_PRODUCTS_LIST_FAILURE,
          payload: ['Something went wrong!']
        });
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_PRODUCTS_LIST_FAILURE,
        payload: ['Something went wrong!']
      });
    }
  },
  getProductListByCategory: function* (action) {
    try {
      let response = yield global.apiService.apiCall(
        'get',
        'product/list',
        action.payload
      );
      if (response.data) {
        let productListData = response.data;
        if (productListData.isSuccess) {
          yield put({
            type: actionType.GET_PRODUCTS_LIST_BY_CATEGORY_SUCCESS,
            payload: productListData.data
          });
        } else {
          yield put({
            type: actionType.GET_PRODUCTS_LIST_BY_CATEGORY_FAILURE,
            payload: productListData.errors
          });
        }
      } else {
        yield put({
          type: actionType.GET_PRODUCTS_LIST_BY_CATEGORY_FAILURE,
          payload: ['Something went wrong!']
        });
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_PRODUCTS_LIST_FAILURE,
        payload: ['Something went wrong!']
      });
    }
  },
  getProductById: function* (action) {
    try {
      let response = yield global.apiService.apiCall(
        'get',
        'product/item',
        action.payload
      );
      if (response.data) {
        console.log(response);
        let productDetailData = response.data;
        if (productDetailData.isSuccess) {
          yield put({
            type: actionType.GET_PRODUCT_DETAIL_SUCCESS,
            payload: productDetailData.data
          });
        } else {
          yield put({
            type: actionType.GET_PRODUCT_DETAIL_FAILURE,
            payload: productDetailData.errors
          });
        }
      } else {
        yield put({
          type: actionType.GET_PRODUCT_DETAIL_FAILURE,
          payload: ['Something went wrong!']
        });
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_PRODUCT_DETAIL_FAILURE,
        payload: ['Something went wrong!']
      });
    }
  },
  getProductCategories: function* (action) {
    try {
      let response = yield global.apiService.apiCall(
        'get',
        'product/categories',
        action.payload
      );
      if (response.data) {
        let productDetailData = response.data;
        if (productDetailData.isSuccess) {
          yield put({
            type: actionType.GET_PRODUCT_CATEGORIES_SUCCESS,
            payload: productDetailData.data
          });
        } else {
          yield put({
            type: actionType.GET_PRODUCT_CATEGORIES_FAILURE,
            payload: productDetailData.errors
          });
        }
      } else {
        yield put({
          type: actionType.GET_PRODUCT_CATEGORIES_FAILURE,
          payload: ['Something went wrong!']
        });
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_PRODUCT_CATEGORIES_FAILURE,
        payload: ['Something went wrong!']
      });
    }
  }
};
