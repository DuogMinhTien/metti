export const VERIFY_CUSTOMER_REQUEST = 'VERIFY_CUSTOMER_REQUEST';
export const VERIFY_CUSTOMER_SUCCESS = 'VERIFY_CUSTOMER_SUCCESS';
export const VERIFY_CUSTOMER_FAILURE = 'VERIFY_CUSTOMER_FAILURE';

export const SUBMIT_ADDRESS_REQUEST = 'SUBMIT_ADDRESS_REQUEST';
export const SUBMIT_ADDRESS_SUCCESS = 'SUBMIT_ADDRESS_SUCCESS';
export const SUBMIT_ADDRESS_FAILURE = 'SUBMIT_ADDRESS_FAILURE';

export const GET_CUSTOMER_INFOR_REQUEST = 'GET_CUSTOMER_INFOR_REQUEST';
export const GET_CUSTOMER_INFOR_SUCCESS = 'GET_CUSTOMER_INFOR_SUCCESS';
export const GET_CUSTOMER_INFOR_FAILURE = 'GET_CUSTOMER_INFOR_FAILURE';

export const GET_GIFT_TOTAL_LEFT_REQUEST = 'GET_GIFT_TOTAL_LEFT_REQUEST';
export const GET_GIFT_TOTAL_LEFT_SUCCESS = 'GET_GIFT_TOTAL_LEFT_SUCCESS';
export const GET_GIFT_TOTAL_LEFT_FAILURE = 'GET_GIFT_TOTAL_LEFT_FAILURE';

export const GET_EVENT_GALLERY_REQUEST = 'GET_EVENT_GALLERY_REQUEST';
export const GET_EVENT_GALLERY_SUCCESS = 'GET_EVENT_GALLERY_SUCCESS';
export const GET_EVENT_GALLERY_FAILURE = 'GET_EVENT_GALLERY_FAILURE';

export function verifyCustomerAction(requestBody) {
  return {
    type: VERIFY_CUSTOMER_REQUEST,
    payload: requestBody
  };
};

export function submitAddressAction(request) {
  return {
    type: SUBMIT_ADDRESS_REQUEST,
    payload: request
  };
};

export function getCustomerInfoAction(param) {
  return {
    type: GET_CUSTOMER_INFOR_REQUEST,
    payload: param,
  };
};

export function getGiftTotalLeftAction() {
  return {
    type: GET_GIFT_TOTAL_LEFT_REQUEST,
  };
};

export function getEventGalleryAction(payload) {
  return {
    type: GET_EVENT_GALLERY_REQUEST,
    payload: payload,
  };
};


