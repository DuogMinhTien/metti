export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILURE = 'POST_ORDER_FAILURE';

export function postOrder(payload) {
  return {
    type: POST_ORDER_REQUEST,
    payload: payload
  };
};