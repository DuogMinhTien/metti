export const GET_BANNER_LIST_REQUEST = 'GET_BANNER_LIST_REQUEST';
export const GET_BANNER_LIST_SUCCESS = 'GET_BANNER_LIST_SUCCESS';
export const GET_BANNER_LIST_FAILURE = 'GET_BANNER_LIST_FAILURE';

export function getBannerList() {
  return {
    type: GET_BANNER_LIST_REQUEST,
  }
};