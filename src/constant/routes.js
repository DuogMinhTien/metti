const routes = {
  home: '/',
  product: '/product',
  product_by_category: '/product/category/:category_id',
  product_detail: '/product/detail/:product_id',
  checkout: '/checkout',
  cart: '/checkout/cart',
  about_us: '/about-us',
  technoloygy: '/technology',
  news: '/news',
  news_year: '/news/:year/:id',
  news_detail: '/news/:slug',
  contact: '/contact',
  order_success: '/checkout/success',
  event: '/event',
  event_address: '/event/:email',
  event_result: '/event/gift/result',
  payment_fiserv_success: '/order/fiserv-success',
  payment_fiserv_failure: '/order/fiserv-failure',
  new_product_screen: '/wellness-product/:product_id'
};

export default routes;
