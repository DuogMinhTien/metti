import * as actionTypes from '../actions';
import _ from 'lodash';
import { message } from 'antd';
import routes from "../../constant/routes";

const initialState = {
  isLoading: false,
  isSuccess: false,
  order: null,
};

export default function orderReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case actionTypes.POST_ORDER_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;
    case actionTypes.POST_ORDER_SUCCESS:
      window.location.href = routes.order_success;
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.carts = [];
      newState.order = action.payload;
      localStorage.removeItem('cart');
      return newState;
    case actionTypes.POST_ORDER_FAILURE:
      message.error(action.payload.join(', '));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;
    default:
      return state;
  }
}