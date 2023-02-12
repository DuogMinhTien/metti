export const GET_NEWS_CATEGORIES_REQUEST = 'GET_NEWS_CATEGORIES_REQUEST';
export const GET_NEWS_CATEGORIES_SUCCESS = 'GET_NEWS_CATEGORIES_SUCCESS';
export const GET_NEWS_CATEGORIES_FAILURE = 'GET_NEWS_CATEGORIES_FAILURE';

export const GET_NEWS_LIST_REQUEST = 'GET_NEWS_LIST_REQUEST';
export const GET_NEWS_LIST_SUCCESS = 'GET_NEWS_LIST_SUCCESS';
export const GET_NEWS_LIST_FAILURE = 'GET_NEWS_LIST_FAILURE';

export const GET_NEWS_DETAIL_REQUEST = 'GET_NEWS_DETAIL_REQUEST';
export const GET_NEWS_DETAIL_SUCCESS = 'GET_NEWS_DETAIL_SUCCESS';
export const GET_NEWS_DETAIL_FAILURE = 'GET_NEWS_DETAIL_FAILURE';

export function getNewsCategories() {
  return {
    type: GET_NEWS_CATEGORIES_REQUEST
  }
};

export function getNewsList(payload) {
  return {
    type: GET_NEWS_LIST_REQUEST,
    payload: payload
  }
};

export function getNewsDetail(slug) {
  return {
    type: GET_NEWS_DETAIL_REQUEST,
    payload: slug
  }
};