export const GET_TECHNOLOGY_LIST_REQUEST = 'GET_TECHNOLOGY_LIST_REQUEST';
export const GET_TECHNOLOGY_LIST_SUCCESS = 'GET_TECHNOLOGY_LIST_SUCCESS';
export const GET_TECHNOLOGY_LIST_FAILURE = 'GET_TECHNOLOGY_LIST_FAILURE';

export function getTechnologyList(bodyRequest) {
  return {
    type: GET_TECHNOLOGY_LIST_REQUEST,
    payload: bodyRequest
  };
};