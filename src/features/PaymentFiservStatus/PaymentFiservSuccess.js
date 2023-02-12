import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postOrder, getSettingConfigAction } from '../../redux/actions';
import { useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';
import { getTranslatedText } from '../../services/appService';
import routes from '../../constant/routes';

import './styles/payment-fiserv-result-styles.less';

function PaymentFiservSuccess(props) {
  const { actions, cart, shipFee, taxFee } = props;

  const [fiservTransactionId, setFiservTransactionId] = useState('');

  const history = useHistory();

  useEffect(() => {
    console.log(history);
    const query = new URLSearchParams(history.location.search);
    const fiservTransactionId = query.get('transaction_id');
    setFiservTransactionId(fiservTransactionId);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    actions.getSettingConfigAction();
    //eslint-disable-next-line
  }, []);

  function handleOnBackButtonClick() {
    const delivery_information = JSON.parse(
      localStorage.getItem('delivery_information')
    );
    const orderPayload = {
      ...delivery_information,
      detail: cart.carts,
      shipping: shipFee,
      tax: taxFee,
      type: 'fiserv',
      fiserv_transaction_code: fiservTransactionId
    };
    actions.postOrder(orderPayload);
    history.push(routes.home);
  }

  return (
    <React.Fragment>
      <Result
        className="payment-fiserv-result-wrapper"
        status="success"
        title={getTranslatedText('purchase_success')}
        subTitle={getTranslatedText('sub_purchase_success')}
        extra={[
          <Button onClick={() => handleOnBackButtonClick()}>
            {getTranslatedText('back_to_home')}
          </Button>
        ]}
      />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
    shipFee: state.settingConfigReducer.shipFee,
    taxFee: state.settingConfigReducer.taxFee
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        postOrder,
        getSettingConfigAction
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentFiservSuccess);
