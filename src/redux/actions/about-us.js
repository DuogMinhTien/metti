export const GET_ABOUT_US_LIST_REQUEST = 'GET_ABOUT_US_LIST_REQUEST';
export const GET_ABOUT_US_LIST_SUCCESS = 'GET_ABOUT_US_LIST_SUCCESS';
export const GET_ABOUT_US_LIST_FAILURE = 'GET_ABOUT_US_LIST_FAILURE';

export function getAboutUsList(bodyRequest) {
  return {
    type: GET_ABOUT_US_LIST_REQUEST,
    payload: bodyRequest,
  }
};