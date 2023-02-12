export const CONTACT_SUBMIT_REQUEST = 'CONTACT_SUBMIT_REQUEST';
export const CONTACT_SUBMIT_SUCCESS = 'CONTACT_SUBMIT_SUCCESS';
export const CONTACT_SUBMIT_FAILURE = 'CONTACT_SUBMIT_FAILURE';


export const EMAIL_SUBCRIBLE_REQUEST = 'EMAIL_SUBCRIBLE_REQUEST';
export const EMAIL_SUBCRIBLE_SUCCESS = 'EMAIL_SUBCRIBLE_SUCCESS';
export const EMAIL_SUBCRIBLE_FAILURE = 'EMAIL_SUBCRIBLE_FAILURE';


export function postContactSubmit(payload) {
  return {
    type: CONTACT_SUBMIT_REQUEST,
    payload: payload
  };
};

export function postEmailSubcrible(payload) {
  return {
    type: EMAIL_SUBCRIBLE_REQUEST,
    payload: payload,
  };
};
