export const LOAD_CART_FROM_LOCAL_STORAGE = 'LOAD_CART_FROM_LOCAL_STORAGE';

export const ADD_ITEM_TO_CART_REQUEST = 'ADD_ITEM_TO_CART_REQUEST';
export const ADD_ITEM_TO_CART_SUCCESS = 'ADD_ITEM_TO_CART_SUCCESS';
export const ADD_ITEM_TO_CART_FAILURE = 'ADD_ITEM_TO_CART_FAILURE';

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const DELETE_ITEM_IN_CART = 'DELETE_ITEM_IN_CART';

export function loadCartFromLocalStorage() {
  return {
    type: LOAD_CART_FROM_LOCAL_STORAGE
  }
};

export function addItemToCart(payload) {
  return {
    type: ADD_ITEM_TO_CART_REQUEST,
    payload: payload,
  };
};

export function increaseQuantityAction(payload) {
  return {
    type: INCREASE_QUANTITY,
    payload: payload
  };
};

export function decreaseQuantityAction(payload) {
  return {
    type: DECREASE_QUANTITY,
    payload: payload
  };
};

export function deleteItemInCartAction(payload) {
  return {
    type: DELETE_ITEM_IN_CART,
    payload: payload,
  }
};
