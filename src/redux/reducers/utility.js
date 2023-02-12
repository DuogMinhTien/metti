import * as actionTypes from '../actions';

const currentLanguageState = {
  language: 'en',
};

export default function utilityReducer(state = currentLanguageState, action) {
  switch(action.type) {
    case actionTypes.GET_CURRENT_LANGUAGE:
       let lang = localStorage.getItem('current_language') || 'en';
       return {
         ...state,
         language: lang,
       }
    case actionTypes.SET_CURRENT_LANGUAGE:
      localStorage.setItem('current_language', action.payload);
       return {
         ...state,
         language: action.payload
       }
    default:
      return state;
  };
};
