import { put } from 'redux-saga/effects';
import * as actionType from '../actions/index';

// eslint-disable-next-line
export default {
  verifyCustomer: function* (action) {
    try {
      let response = yield global.apiService.apiCall('post', 'customer/register', action.payload);
      if (response.data) {
        let verifyData = response.data;
        if (verifyData.isSuccess) {
          yield put({
            type: actionType.VERIFY_CUSTOMER_SUCCESS,
            payload: verifyData.data
          })
        } else {
          yield put({
            type: actionType.VERIFY_CUSTOMER_FAILURE,
            payload: verifyData.errors
          })
        }
      } else {
        yield put({
          type: actionType.VERIFY_CUSTOMER_FAILURE,
          payload: ['Something went wrong!']
        });
      };
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.VERIFY_CUSTOMER_FAILURE,
        payload: ['Something went wrong!']
      });
    };
  },
  getCustomerInfo: function* (action) {
    try {
      let response = yield global.apiService.apiCall('get', `customer/${action.payload.email}`);
      if (response.data) {
        let customerInfo = response.data;
        if (customerInfo.isSuccess) {
          yield put({
            type: actionType.GET_CUSTOMER_INFOR_SUCCESS,
            payload: customerInfo.data,
          })
        } else {
          yield put({
            type: actionType.GET_CUSTOMER_INFOR_FAILURE,
            payload: customerInfo.errors
          });
        }
      } else {
        yield put({
          type: actionType.GET_CUSTOMER_INFOR_FAILURE,
          payload: ['Something went wrong!']
        });  
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.GET_CUSTOMER_INFOR_FAILURE,
        payload: ['Something went wrong!']
      });
    }
  },
  submitAdress: function* (action) {
    try {
      let response = yield global.apiService.apiCall('put', `customer/${action.payload.email}`, action.payload.requestBody);
      if (response.data) {
        let submitAddress = response.data;
        if (submitAddress.isSuccess) {
          yield put({
            type: actionType.SUBMIT_ADDRESS_SUCCESS,
            payload: submitAddress.data,
          });
        } else {
          yield put({
            type: actionType.SUBMIT_ADDRESS_FAILURE,
            payload: submitAddress.errors
          });
        }
      } else {
        yield put({
          type: actionType.SUBMIT_ADDRESS_FAILURE,
          payload: ['Something went wrong!']
        });
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actionType.SUBMIT_ADDRESS_FAILURE,
        payload: ['Something went wrong!']
      });
    }
  },
  getTotalGiftLeft: function* (action) {
    try {
      let response = yield global.apiService.apiCall('get', 'total-gift');
      if (response.data) {
        let totalGiftLeft = response.data;
        if (totalGiftLeft.isSuccess) {
          yield put({
            type: actionType.GET_GIFT_TOTAL_LEFT_SUCCESS,
            payload: totalGiftLeft.data.total_gift,
          });
        } else {
          yield put({
            type: actionType.GET_GIFT_TOTAL_LEFT_FAILURE,
            payload: totalGiftLeft.errors,
          });
        };
      } else {
        yield put({
          type: actionType.GET_GIFT_TOTAL_LEFT_FAILURE,
          payload: ['Something went wrong!']
        });
      };
    } catch(error) {
      console.log(error);
      yield put({
        type: actionType.GET_GIFT_TOTAL_LEFT_FAILURE,
        payload: ['Something went wrong!']
      })
    }
  },
  getEventGallery: function* (action) {
    try {
      let response = yield global.apiService.apiCall('get', 'setting', action.payload);
      if (response.data) {
        let eventGallery = response.data;
        if (eventGallery.isSuccess) {
          yield put({
            type: actionType.GET_EVENT_GALLERY_SUCCESS,
            payload: eventGallery.data[0].value,
          });
        } else {
          yield put({
            type: actionType.GET_EVENT_GALLERY_FAILURE,
            payload: eventGallery.errors,
          });
        };
      } else {
        yield put({
          type: actionType.GET_EVENT_GALLERY_FAILURE,
          payload: ['Something went wrong!']
        });
      };
    } catch(error) {
      console.log(error);
      yield put({
        type: actionType.GET_EVENT_GALLERY_FAILURE,
        payload: ['Something went wrong!']
      })
    }
  }
};
