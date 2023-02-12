import { combineReducers } from 'redux';
import bannerReducer from './banner';
import partnerReducer from './partner';
import productReducer from './product';
import technologyReducer from './technology';
import orderReducer from './order';
import contactReducer from './contact';
import cartReducer from './cart';
import utilityReducer from './utility';
import aboutUsReducer from './about-us';
import eventReducer from './event';
import settingConfigReducer from './setting';
import newsReducer from './news';

// eslint-disable-next-line
export default combineReducers({
  bannerReducer,
  partnerReducer,
  productReducer,
  technologyReducer,
  orderReducer,
  contactReducer,
  cartReducer,
  utilityReducer,
  aboutUsReducer,
  eventReducer,
  settingConfigReducer,
  newsReducer,
});