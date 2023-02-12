import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getProductList,
  getProductListByCategory
} from '../../../redux/actions';
import { useParams } from 'react-router-dom';
import { Layout } from 'antd';

// import '../styles/homescreen-style.less';

import HotProductComponent from '../../../components/HotProduct/HotProduct';
import { getTranslatedText } from '../../../services/appService';

const { Content } = Layout;

function ProductScreen(props) {
  const { actions, products } = props;

  const params = useParams();

  useEffect(() => {
    if (params.category_id) {
      console.log(params);
      const payload = {
        category_id: params.category_id
      };
      actions.getProductListByCategory(payload);
    } else {
      actions.getProductList();
    }
    // eslint-disable-next-line
  }, [params.category_id]);

  if (products?.length === 0) {
    return (
      <Content>
        <div className="w-full pt-40 min-h-screen">
          <p className="md:text-3xl">{getTranslatedText('empty_product')}</p>
        </div>
      </Content>
    );
  }

  return (
    <Content>
      {products &&
        products.map((item, index) => (
          <HotProductComponent
            key={index}
            position="right"
            productData={item}
          />
        ))}
    </Content>
  );
}

function mapStateToProps(state) {
  return {
    products: state.productReducer.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getProductList,
        getProductListByCategory
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
