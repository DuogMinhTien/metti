import React, { useState, useEffect } from 'react';
import CryptoJS from "crypto-js";
import $ from 'jquery';
import { updateTime } from '../../../services/fiservService';

import '../styles/fiserv-prepayment-styles.less';
import env from '../../../env';

function FiservPrePaymentForm(props) {

  const {
    totalOrder,
  } = props;

  const [transactionTime, setTransactionTime] = useState('');

  useEffect(() => {
    const timeUpdate = updateTime();
    setTransactionTime(timeUpdate);
  }, []);

  function handleOnPayFiserv(e) {
    // e.preventDefault();
    var paymentForm = $("#paymentForm");
    console.log(paymentForm);
    paymentForm.attr('action', env.FISERV_GATEWAY);
    var paymentParameters = paymentForm.serializeArray().reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
    const sharedSecret = 'sharedsecret';
    var messageSignatureContent = [];
    const ignoreSignatureParameteres = ["hashExtended"];
    Object.keys(paymentParameters).filter(key => !ignoreSignatureParameteres.includes(key)).sort().forEach((key, index) => {
      messageSignatureContent.push(paymentParameters[key]);
    });
    /* Calculate Message Signature */
    const messageSignature = CryptoJS.HmacSHA256(messageSignatureContent.join("|"), sharedSecret);
    const messageSignatureBase64 = CryptoJS.enc.Base64.stringify(messageSignature);
    $("input[name='hashExtended']").val(messageSignatureBase64);
  };

  return (
    <React.Fragment>
      <form
        id="paymentForm"
        onSubmit={(e) => handleOnPayFiserv(e)}
        method='post'
        action='#'
      >
        <input type="hidden" name="hash_algorithm" value="HMACSHA256" />
        <input type="hidden" name="checkoutoption" value="combinedpage" />
        <input type="hidden" name="hashExtended" value='' />
        <p>
          <input type="hidden" name="storename" value="80004160" />
        </p>
        <p className='item-paymentForm'>
          <label for="paymentMethod">Payment Method:</label>
          <select name="paymentMethod">
            <option value="V">Visa</option>
            <option value="M">Mastercard</option>
            <option value="BLIK">BLIK</option>
          </select>
        </p>
        <p className='item-paymentForm'>
          <label for="timezone">Timezone:</label>
          <select name="timezone">
            <option value="Europe/Berlin">Europe/Berlin</option>
            <option value="Asia/Dubai">Asia/Dubai</option>
          </select>
        </p>
        <p>
          <input type="hidden" name="txndatetime" value={transactionTime}/>
        </p>
        <p className='item-paymentForm'>
          <label for="chargetotal">Transaction Type:</label>
          <select name="txntype">
            <option value="sale">Sale</option>
          </select>
        </p>
        <p className='item-paymentForm'>
          <label for="chargetotal">Transaction Amount: ($)</label>
          <input type="text" name="chargetotal" value={totalOrder.toString()} readOnly />
        </p>
        <p>
          <input type='hidden' name="authenticateTransaction" value="false" />
        </p>
        <p className='item-paymentForm'>
          <label for="currency">Currency (see ISO4217):</label>
          <select name="currency">
            <option value="978">EUR (978)</option>
            <option value="985">PLN (985)</option>
            <option value="784">AED (784)</option>
            <option value="048">BHD (048)</option>
            <option value="840">USD (840)</option>
          </select>
        </p>
        <p>
          <input
            type="hidden"
            name="responseFailURL"
            size="60"
            value={env.API_URL + '/api/v1/order/fiserv-failure'}
          />
        </p>
        <p>
          <input
            type="hidden"
            name="responseSuccessURL"
            size="60"
            value={env.API_URL + '/api/v1/order/fiserv-success'}
          />
        </p>
        <p>
          <input type="hidden" value="false" />
        </p>
        <p>
          <input className='btn-submit-paymentForm' type="submit" id="submit" value="Submit" />
        </p>
      </form>
    </React.Fragment>
  );
};

export default FiservPrePaymentForm;