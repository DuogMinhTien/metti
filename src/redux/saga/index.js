import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions';
import Banner from './banner';
import Partner from './partner';
import Product from './product';
import Technology from './technology';
import Order from './order';
import Contact from './contact';
import Cart from './cart';
import AboutUs from './about-us';
import Event from './event';
import SettingConfig from './setting';
import News from './news';

function* rootSaga() {
  yield takeEvery(actionTypes.GET_BANNER_LIST_REQUEST, Banner.getBannerList);
  yield takeEvery(actionTypes.GET_PARTNER_LIST_REQUEST, Partner.getPartnerList);
  yield takeEvery(actionTypes.GET_PRODUCTS_LIST_REQUEST, Product.getProductList);
  yield takeEvery(actionTypes.GET_PRODUCTS_LIST_BY_CATEGORY_REQUEST, Product.getProductListByCategory);
  yield takeEvery(actionTypes.GET_PRODUCT_DETAIL_REQUEST, Product.getProductById);
  yield takeEvery(actionTypes.GET_TECHNOLOGY_LIST_REQUEST, Technology.getTechnologyList);
  yield takeEvery(actionTypes.POST_ORDER_REQUEST, Order.postOrder);
  yield takeEvery(actionTypes.CONTACT_SUBMIT_REQUEST, Contact.postContactSubmit);
  yield takeEvery(actionTypes.EMAIL_SUBCRIBLE_REQUEST, Contact.postEmailSubcrible);
  yield takeEvery(actionTypes.ADD_ITEM_TO_CART_REQUEST, Cart.addItemToCart);
  yield takeEvery(actionTypes.GET_ABOUT_US_LIST_REQUEST, AboutUs.getAboutUsList);
  yield takeEvery(actionTypes.VERIFY_CUSTOMER_REQUEST, Event.verifyCustomer);
  yield takeEvery(actionTypes.GET_CUSTOMER_INFOR_REQUEST, Event.getCustomerInfo);
  yield takeEvery(actionTypes.SUBMIT_ADDRESS_REQUEST, Event.submitAdress);
  yield takeEvery(actionTypes.GET_GIFT_TOTAL_LEFT_REQUEST, Event.getTotalGiftLeft);
  yield takeEvery(actionTypes.GET_SETTING_CONFIG_REQUEST, SettingConfig.getSettingConfig);
  yield takeEvery(actionTypes.GET_EVENT_GALLERY_REQUEST, Event.getEventGallery);
  yield takeEvery(actionTypes.GET_NEWS_CATEGORIES_REQUEST, News.getNewsCategoriesSaga);
  yield takeEvery(actionTypes.GET_NEWS_LIST_REQUEST, News.getNewsList);
  yield takeEvery(actionTypes.GET_NEWS_DETAIL_REQUEST, News.getNewsDetail);
  yield takeEvery(actionTypes.GET_PRODUCT_CATEGORIES_REQUEST, Product.getProductCategories);
};

export default rootSaga;