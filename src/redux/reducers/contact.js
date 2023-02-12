import * as actionTypes from '../actions';
import _ from 'lodash';
import { message } from 'antd';
import { getTranslatedText } from '../../services/appService';

const initialState = {
  isLoading: false,
  isSuccess: false,
  contactSubmit: null,
  emailSubcrible: null,
};

export default function contactReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case actionTypes.CONTACT_SUBMIT_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;
    case actionTypes.CONTACT_SUBMIT_SUCCESS:
      message.success(getTranslatedText('contact_submit_success'));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.contactSubmit = action.payload;
      return newState;
    case actionTypes.CONTACT_SUBMIT_FAILURE:
      message.error(action.payload.join(', '));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;
    case actionTypes.EMAIL_SUBCRIBLE_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;
    case actionTypes.EMAIL_SUBCRIBLE_SUCCESS:
      message.success(getTranslatedText('subcrible_submit_success'))
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.emailSubcrible = action.payload;
      return newState;
    case actionTypes.EMAIL_SUBCRIBLE_FAILURE:
      message.error(action.payload.join(', '));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;
    default:
      return state;
  }
}