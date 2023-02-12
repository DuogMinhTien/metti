import * as actionTypes from '../actions';
import _ from 'lodash';
import { message } from 'antd';


const initialState = {
  isLoading: false,
  isSuccess: false,
  technologies: [],
  technology: null
};

export default function technologyReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case actionTypes.GET_TECHNOLOGY_LIST_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      return newState;
    
    case actionTypes.GET_TECHNOLOGY_LIST_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      newState.technologies = action.payload;
      return newState;
    
    case actionTypes.GET_TECHNOLOGY_LIST_FAILURE:
      message.error(action.payload.join(', '));
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      return newState;
    
    default:
      return state;
  };
}; 
