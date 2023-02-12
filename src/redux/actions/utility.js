export const GET_CURRENT_LANGUAGE = 'GET_CURRENT_LANGUAGE';
export const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE';


export const getCurrentLanguage = () => ({
  type: GET_CURRENT_LANGUAGE,
});

export const setCurrentLanguage = (payload) => ({
  type: SET_CURRENT_LANGUAGE,
  payload: payload,
});
