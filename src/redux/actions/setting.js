export const GET_SETTING_CONFIG_REQUEST = 'GET_SETTING_CONFIG_REQUEST';
export const GET_SETTING_CONFIG_SUCCESS = 'GET_SETTING_CONFIG_SUCCESS';
export const GET_SETTING_CONFIG_FAILURE = 'GET_SETTING_CONFIG_FAILURE';

export function getSettingConfigAction() {
  return {
    type: GET_SETTING_CONFIG_REQUEST,
  };
};