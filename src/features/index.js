import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import route from '../constant/routes';

import HomePageScreen from '../features/HomeScreen/screen/HomePageScreen';
import ProductScreen from '../features/ProductScreen/screen/ProductScreen';
import ProductDetailScreen from './ProductScreen/screen/ProductDetailScreen';
import AboutUsScreen from './AboutUsScreen/screen/AboutUsScreen';
import TechnologyScreen from './TechnologyScreen/screen/TechnologyScreen';
import ContactScreen from './ContactScreen/screen/ContactScreen';
import CartScreen from './CartScreen/screen/CartScreen';
import NewCheckoutScreen from './CheckoutScreen/screen/NewCheckoutScreen';
import OrderStatusSuccess from '../components/OrderStatus/OrderStatusSuccess';
import EventScreen from './EventScreen/screen/EventScreen';
import EventResultScreen from './EventScreen/screen/EventResultScreen';
import PaymentFiservSuccess from './PaymentFiservStatus/PaymentFiservSuccess';
import PaymentFiservFailure from './PaymentFiservStatus/PaymentFiservFailure';
import YearsScreen from './News/screen/YearsScreen';
import NewsScreen from './News/screen/NewsScreen';
import NewsView from './News/screen/NewsView';
import NewProductDetailScreen from './ProductScreen/screen/NewProductDetailScreen';

const RouterContainer = () => {
  const [aboutUsKey, setAboutUsKey] = useState('1');

  return (
    <Switch>
      <Route exact path={route.home} component={HomePageScreen} />
      <Route exact path={route.product} component={ProductScreen} />
      <Route exact path={route.product_by_category} component={ProductScreen} />
      <Route exact path={route.product_detail}>
        <ProductDetailScreen setAboutUsKey={setAboutUsKey} />
      </Route>
      <Route exact path={route.about_us}>
        <AboutUsScreen setAboutUsKey={setAboutUsKey} aboutUsKey={aboutUsKey} />
      </Route>
      <Route exact path={route.technoloygy} component={TechnologyScreen} />
      <Route exact path={route.contact} component={ContactScreen} />
      <Route exact path={route.cart} component={CartScreen} />
      <Route exact path={route.checkout} component={NewCheckoutScreen} />
      <Route exact path={route.event} component={EventScreen} />
      <Route exact path={route.event_address} component={EventScreen} />
      <Route exact path={route.event_result} component={EventResultScreen} />
      <Route exact path={route.order_success} component={OrderStatusSuccess} />
      <Route
        path={route.payment_fiserv_success}
        component={PaymentFiservSuccess}
      />
      <Route
        path={route.payment_fiserv_failure}
        component={PaymentFiservFailure}
      />
      <Route path={route.news} exact component={YearsScreen} />
      <Route path={route.news_year} component={NewsScreen} />
      <Route path={route.news_detail} component={NewsView} />
      <Route
        path={route.new_product_screen}
        component={NewProductDetailScreen}
      />
    </Switch>
  );
};

export default RouterContainer;
