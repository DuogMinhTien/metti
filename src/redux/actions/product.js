export const GET_PRODUCTS_LIST_REQUEST = 'GET_PRODUCTS_LIST_REQUEST';
export const GET_PRODUCTS_LIST_SUCCESS = 'GET_PRODUCTS_LIST_SUCCESS';
export const GET_PRODUCTS_LIST_FAILURE = 'GET_PRODUCTS_LIST_FAILURE';

export const GET_PRODUCTS_LIST_BY_CATEGORY_REQUEST = 'GET_PRODUCT_LIST_BY_CATEGORY_REQUEST';
export const GET_PRODUCTS_LIST_BY_CATEGORY_SUCCESS = 'GET_PRODUCT_LIST_BY_CATEGORY_SUCCESS';
export const GET_PRODUCTS_LIST_BY_CATEGORY_FAILURE = 'GET_PRODUCT_LIST_BY_CATEGORY_FAILURE';

export const GET_PRODUCT_DETAIL_REQUEST = 'GET_PRODUCT_DETAIL_REQUEST';
export const GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';
export const GET_PRODUCT_DETAIL_FAILURE = 'GET_PRODUCT_DETAIL_FAILURE';

export const GET_PRODUCT_CATEGORIES_REQUEST = 'GET_PRODUCT_CATEGORIES_REQUEST';
export const GET_PRODUCT_CATEGORIES_SUCCESS = 'GET_PRODUCT_CATEGORIES_SUCCESS';
export const GET_PRODUCT_CATEGORIES_FAILURE = 'GET_PRODUCT_CATEGORIES_FAILURE';

export function getProductList(payload) {
  return {
    type: GET_PRODUCTS_LIST_REQUEST,
    payload: payload,
  }
};

export function getProductDetail(payload) {
  return {
    type: GET_PRODUCT_DETAIL_REQUEST,
    payload: payload,
  };
};

// payload = {category_id: category_id}
export function getProductListByCategory(payload) {
  return {
    type: GET_PRODUCTS_LIST_BY_CATEGORY_REQUEST,
    payload: payload,
  };
};


export function getProductCategories() {
  return {
    type: GET_PRODUCT_CATEGORIES_REQUEST,
    payload: {},
  };
};
