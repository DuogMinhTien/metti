import React from 'react';

import {
  Form,
  Row,
  Col,
  Input,
  Select,
} from 'antd';
import { getTranslatedText } from '../../../services/appService';


function DeliveryForm(props) {

  const {
    formItemDisable,
  } = props;

  return (
    <React.Fragment>
      <Row id='custom-form' gutter={16}>
        <Col
          md={24}
          xs={24}
          lg={24}
        >
          <Form.Item
            label={getTranslatedText('full_name_lable')}
            name='order_name'
            rules={[{ required: true, message: getTranslatedText('rule_require') }]}
          >
            <Input
              disabled={formItemDisable}
            />
          </Form.Item>
        </Col>
        <Col
          md={24}
          xs={24}
          lg={24}
        >
          <Form.Item
            label={getTranslatedText('email_lable')}
            name='order_email'
            rules={[{ required: true, message: getTranslatedText('rule_require') }]}
          >
            <Input
              disabled={formItemDisable}
            />
          </Form.Item>
        </Col>
        <Col
          md={24}
          xs={24}
          lg={24}
        >
          <Form.Item
            label={getTranslatedText('phone_lable')}
            name='order_phone'
            rules={[{ required: true, message: getTranslatedText('rule_require') }]}
          >
            <Input
              disabled={formItemDisable}
            />
          </Form.Item>
        </Col>
        <Col
          md={24}
          xs={24}
          lg={24}
        >
          <Form.Item
            label="Address"
            name='order_address'
            rules={[{ required: true, message: getTranslatedText('rule_require') }]}
          >
            <Input
              disabled={formItemDisable}
            />
          </Form.Item>
        </Col>
        {/*State Province*/}
        <Col
          md={12}
          xs={12}
          lg={8}
        >
          <Form.Item
            label={getTranslatedText('city_lable')}
            name='order_province'
            rules={[{ required: true, message: getTranslatedText('rule_require') }]}
          >
            <Input
              disabled={formItemDisable}
            />
          </Form.Item>
        </Col>
        <Col
          md={24}
          xs={24}
          lg={8}
        >
          <Form.Item
            label={getTranslatedText('province_lable')}
            name='order_district'
            rules={[{ required: true, message: getTranslatedText('rule_require') }]}
          >
            <Input
              disabled={formItemDisable}
            />
          </Form.Item>
        </Col>
        <Col
          md={12}
          xs={12}
          lg={8}
        >
          <Form.Item
            label={getTranslatedText('zip_code_lable')}
            name='order_ward'
            rules={[{ required: true, message: getTranslatedText('rule_require') }]}
          >
            <Input
              disabled={formItemDisable}
            />
          </Form.Item>
        </Col>
        <Col
          md={24}
          xs={24}
          lg={8}
        >
          <Form.Item
            label={getTranslatedText('country_lable')}
            name='order_country'
            rules={[{ required: true, message: getTranslatedText('rule_require') }]}
          >
            <Select disabled={formItemDisable}>
              <Select.Option value="Afghanistan">Afghanistan</Select.Option>
              <Select.Option value="Åland Islands">Åland Islands</Select.Option>
              <Select.Option value="Albania">Albania</Select.Option>
              <Select.Option value="Algeria">Algeria</Select.Option>
              <Select.Option value="American Samoa">
                American Samoa
              </Select.Option>
              <Select.Option value="Andorra">Andorra</Select.Option>
              <Select.Option value="Angola">Angola</Select.Option>
              <Select.Option value="Anguilla">Anguilla</Select.Option>
              <Select.Option value="Antarctica">Antarctica</Select.Option>
              <Select.Option value="Antigua and Barbuda">
                Antigua and Barbuda
              </Select.Option>
              <Select.Option value="Argentina">Argentina</Select.Option>
              <Select.Option value="Armenia">Armenia</Select.Option>
              <Select.Option value="Aruba">Aruba</Select.Option>
              <Select.Option value="Australia">Australia</Select.Option>
              <Select.Option value="Austria">Austria</Select.Option>
              <Select.Option value="Azerbaijan">Azerbaijan</Select.Option>
              <Select.Option value="Bahamas">Bahamas</Select.Option>
              <Select.Option value="Bahrain">Bahrain</Select.Option>
              <Select.Option value="Bangladesh">Bangladesh</Select.Option>
              <Select.Option value="Barbados">Barbados</Select.Option>
              <Select.Option value="Belarus">Belarus</Select.Option>
              <Select.Option value="Belgium">Belgium</Select.Option>
              <Select.Option value="Belize">Belize</Select.Option>
              <Select.Option value="Benin">Benin</Select.Option>
              <Select.Option value="Bermuda">Bermuda</Select.Option>
              <Select.Option value="Bhutan">Bhutan</Select.Option>
              <Select.Option value="Bolivia">Bolivia</Select.Option>
              <Select.Option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </Select.Option>
              <Select.Option value="Botswana">Botswana</Select.Option>
              <Select.Option value="Bouvet Island">Bouvet Island</Select.Option>
              <Select.Option value="Brazil">Brazil</Select.Option>
              <Select.Option value="British Indian Ocean Territory">
                British Indian Ocean Territory
              </Select.Option>
              <Select.Option value="Brunei Darussalam">
                Brunei Darussalam
              </Select.Option>
              <Select.Option value="Bulgaria">Bulgaria</Select.Option>
              <Select.Option value="Burkina Faso">Burkina Faso</Select.Option>
              <Select.Option value="Burundi">Burundi</Select.Option>
              <Select.Option value="Cambodia">Cambodia</Select.Option>
              <Select.Option value="Cameroon">Cameroon</Select.Option>
              <Select.Option value="Canada">Canada</Select.Option>
              <Select.Option value="Cape Verde">Cape Verde</Select.Option>
              <Select.Option value="Cayman Islands">
                Cayman Islands
              </Select.Option>
              <Select.Option value="Central African Republic">
                Central African Republic
              </Select.Option>
              <Select.Option value="Chad">Chad</Select.Option>
              <Select.Option value="Chile">Chile</Select.Option>
              <Select.Option value="China">China</Select.Option>
              <Select.Option value="Christmas Island">
                Christmas Island
              </Select.Option>
              <Select.Option value="Cocos (Keeling) Islands">
                Cocos (Keeling) Islands
              </Select.Option>
              <Select.Option value="Colombia">Colombia</Select.Option>
              <Select.Option value="Comoros">Comoros</Select.Option>
              <Select.Option value="Congo">Congo</Select.Option>
              <Select.Option value="Congo, The Democratic Republic of The">
                Congo, The Democratic Republic of The
              </Select.Option>
              <Select.Option value="Cook Islands">Cook Islands</Select.Option>
              <Select.Option value="Costa Rica">Costa Rica</Select.Option>
              <Select.Option value="Cote D'ivoire">Cote D'ivoire</Select.Option>
              <Select.Option value="Croatia">Croatia</Select.Option>
              <Select.Option value="Cuba">Cuba</Select.Option>
              <Select.Option value="Cyprus">Cyprus</Select.Option>
              <Select.Option value="Czech Republic">
                Czech Republic
              </Select.Option>
              <Select.Option value="Denmark">Denmark</Select.Option>
              <Select.Option value="Djibouti">Djibouti</Select.Option>
              <Select.Option value="Dominica">Dominica</Select.Option>
              <Select.Option value="Dominican Republic">
                Dominican Republic
              </Select.Option>
              <Select.Option value="Ecuador">Ecuador</Select.Option>
              <Select.Option value="Egypt">Egypt</Select.Option>
              <Select.Option value="El Salvador">El Salvador</Select.Option>
              <Select.Option value="Equatorial Guinea">
                Equatorial Guinea
              </Select.Option>
              <Select.Option value="Eritrea">Eritrea</Select.Option>
              <Select.Option value="Estonia">Estonia</Select.Option>
              <Select.Option value="Ethiopia">Ethiopia</Select.Option>
              <Select.Option value="Falkland Islands (Malvinas)">
                Falkland Islands (Malvinas)
              </Select.Option>
              <Select.Option value="Faroe Islands">Faroe Islands</Select.Option>
              <Select.Option value="Fiji">Fiji</Select.Option>
              <Select.Option value="Finland">Finland</Select.Option>
              <Select.Option value="France">France</Select.Option>
              <Select.Option value="French Guiana">French Guiana</Select.Option>
              <Select.Option value="French Polynesia">
                French Polynesia
              </Select.Option>
              <Select.Option value="French Southern Territories">
                French Southern Territories
              </Select.Option>
              <Select.Option value="Gabon">Gabon</Select.Option>
              <Select.Option value="Gambia">Gambia</Select.Option>
              <Select.Option value="Georgia">Georgia</Select.Option>
              <Select.Option value="Germany">Germany</Select.Option>
              <Select.Option value="Ghana">Ghana</Select.Option>
              <Select.Option value="Gibraltar">Gibraltar</Select.Option>
              <Select.Option value="Greece">Greece</Select.Option>
              <Select.Option value="Greenland">Greenland</Select.Option>
              <Select.Option value="Grenada">Grenada</Select.Option>
              <Select.Option value="Guadeloupe">Guadeloupe</Select.Option>
              <Select.Option value="Guam">Guam</Select.Option>
              <Select.Option value="Guatemala">Guatemala</Select.Option>
              <Select.Option value="Guernsey">Guernsey</Select.Option>
              <Select.Option value="Guinea">Guinea</Select.Option>
              <Select.Option value="Guinea-bissau">Guinea-bissau</Select.Option>
              <Select.Option value="Guyana">Guyana</Select.Option>
              <Select.Option value="Haiti">Haiti</Select.Option>
              <Select.Option value="Heard Island and Mcdonald Islands">
                Heard Island and Mcdonald Islands
              </Select.Option>
              <Select.Option value="Holy See (Vatican City State)">
                Holy See (Vatican City State)
              </Select.Option>
              <Select.Option value="Honduras">Honduras</Select.Option>
              <Select.Option value="Hong Kong">Hong Kong</Select.Option>
              <Select.Option value="Hungary">Hungary</Select.Option>
              <Select.Option value="Iceland">Iceland</Select.Option>
              <Select.Option value="India">India</Select.Option>
              <Select.Option value="Indonesia">Indonesia</Select.Option>
              <Select.Option value="Iran, Islamic Republic of">
                Iran, Islamic Republic of
              </Select.Option>
              <Select.Option value="Iraq">Iraq</Select.Option>
              <Select.Option value="Ireland">Ireland</Select.Option>
              <Select.Option value="Isle of Man">Isle of Man</Select.Option>
              <Select.Option value="Israel">Israel</Select.Option>
              <Select.Option value="Italy">Italy</Select.Option>
              <Select.Option value="Jamaica">Jamaica</Select.Option>
              <Select.Option value="Japan">Japan</Select.Option>
              <Select.Option value="Jersey">Jersey</Select.Option>
              <Select.Option value="Jordan">Jordan</Select.Option>
              <Select.Option value="Kazakhstan">Kazakhstan</Select.Option>
              <Select.Option value="Kenya">Kenya</Select.Option>
              <Select.Option value="Kiribati">Kiribati</Select.Option>
              <Select.Option value="Korea, Democratic People's Republic of">
                Korea, Democratic People's Republic of
              </Select.Option>
              <Select.Option value="Korea, Republic of">
                Korea, Republic of
              </Select.Option>
              <Select.Option value="Kuwait">Kuwait</Select.Option>
              <Select.Option value="Kyrgyzstan">Kyrgyzstan</Select.Option>
              <Select.Option value="Lao People's Democratic Republic">
                Lao People's Democratic Republic
              </Select.Option>
              <Select.Option value="Latvia">Latvia</Select.Option>
              <Select.Option value="Lebanon">Lebanon</Select.Option>
              <Select.Option value="Lesotho">Lesotho</Select.Option>
              <Select.Option value="Liberia">Liberia</Select.Option>
              <Select.Option value="Libyan Arab Jamahiriya">
                Libyan Arab Jamahiriya
              </Select.Option>
              <Select.Option value="Liechtenstein">Liechtenstein</Select.Option>
              <Select.Option value="Lithuania">Lithuania</Select.Option>
              <Select.Option value="Luxembourg">Luxembourg</Select.Option>
              <Select.Option value="Macao">Macao</Select.Option>
              <Select.Option value="Macedonia, The Former Yugoslav Republic of">
                Macedonia, The Former Yugoslav Republic of
              </Select.Option>
              <Select.Option value="Madagascar">Madagascar</Select.Option>
              <Select.Option value="Malawi">Malawi</Select.Option>
              <Select.Option value="Malaysia">Malaysia</Select.Option>
              <Select.Option value="Maldives">Maldives</Select.Option>
              <Select.Option value="Mali">Mali</Select.Option>
              <Select.Option value="Malta">Malta</Select.Option>
              <Select.Option value="Marshall Islands">
                Marshall Islands
              </Select.Option>
              <Select.Option value="Martinique">Martinique</Select.Option>
              <Select.Option value="Mauritania">Mauritania</Select.Option>
              <Select.Option value="Mauritius">Mauritius</Select.Option>
              <Select.Option value="Mayotte">Mayotte</Select.Option>
              <Select.Option value="Mexico">Mexico</Select.Option>
              <Select.Option value="Micronesia, Federated States of">
                Micronesia, Federated States of
              </Select.Option>
              <Select.Option value="Moldova, Republic of">
                Moldova, Republic of
              </Select.Option>
              <Select.Option value="Monaco">Monaco</Select.Option>
              <Select.Option value="Mongolia">Mongolia</Select.Option>
              <Select.Option value="Montenegro">Montenegro</Select.Option>
              <Select.Option value="Montserrat">Montserrat</Select.Option>
              <Select.Option value="Morocco">Morocco</Select.Option>
              <Select.Option value="Mozambique">Mozambique</Select.Option>
              <Select.Option value="Myanmar">Myanmar</Select.Option>
              <Select.Option value="Namibia">Namibia</Select.Option>
              <Select.Option value="Nauru">Nauru</Select.Option>
              <Select.Option value="Nepal">Nepal</Select.Option>
              <Select.Option value="Netherlands">Netherlands</Select.Option>
              <Select.Option value="Netherlands Antilles">
                Netherlands Antilles
              </Select.Option>
              <Select.Option value="New Caledonia">New Caledonia</Select.Option>
              <Select.Option value="New Zealand">New Zealand</Select.Option>
              <Select.Option value="Nicaragua">Nicaragua</Select.Option>
              <Select.Option value="Niger">Niger</Select.Option>
              <Select.Option value="Nigeria">Nigeria</Select.Option>
              <Select.Option value="Niue">Niue</Select.Option>
              <Select.Option value="Norfolk Island">
                Norfolk Island
              </Select.Option>
              <Select.Option value="Northern Mariana Islands">
                Northern Mariana Islands
              </Select.Option>
              <Select.Option value="Norway">Norway</Select.Option>
              <Select.Option value="Oman">Oman</Select.Option>
              <Select.Option value="Pakistan">Pakistan</Select.Option>
              <Select.Option value="Palau">Palau</Select.Option>
              <Select.Option value="Palestinian Territory, Occupied">
                Palestinian Territory, Occupied
              </Select.Option>
              <Select.Option value="Panama">Panama</Select.Option>
              <Select.Option value="Papua New Guinea">
                Papua New Guinea
              </Select.Option>
              <Select.Option value="Paraguay">Paraguay</Select.Option>
              <Select.Option value="Peru">Peru</Select.Option>
              <Select.Option value="Philippines">Philippines</Select.Option>
              <Select.Option value="Pitcairn">Pitcairn</Select.Option>
              <Select.Option value="Poland">Poland</Select.Option>
              <Select.Option value="Portugal">Portugal</Select.Option>
              <Select.Option value="Puerto Rico">Puerto Rico</Select.Option>
              <Select.Option value="Qatar">Qatar</Select.Option>
              <Select.Option value="Reunion">Reunion</Select.Option>
              <Select.Option value="Romania">Romania</Select.Option>
              <Select.Option value="Russian Federation">
                Russian Federation
              </Select.Option>
              <Select.Option value="Rwanda">Rwanda</Select.Option>
              <Select.Option value="Saint Helena">Saint Helena</Select.Option>
              <Select.Option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </Select.Option>
              <Select.Option value="Saint Lucia">Saint Lucia</Select.Option>
              <Select.Option value="Saint Pierre and Miquelon">
                Saint Pierre and Miquelon
              </Select.Option>
              <Select.Option value="Saint Vincent and The Grenadines">
                Saint Vincent and The Grenadines
              </Select.Option>
              <Select.Option value="Samoa">Samoa</Select.Option>
              <Select.Option value="San Marino">San Marino</Select.Option>
              <Select.Option value="Sao Tome and Principe">
                Sao Tome and Principe
              </Select.Option>
              <Select.Option value="Saudi Arabia">Saudi Arabia</Select.Option>
              <Select.Option value="Senegal">Senegal</Select.Option>
              <Select.Option value="Serbia">Serbia</Select.Option>
              <Select.Option value="Seychelles">Seychelles</Select.Option>
              <Select.Option value="Sierra Leone">Sierra Leone</Select.Option>
              <Select.Option value="Singapore">Singapore</Select.Option>
              <Select.Option value="Slovakia">Slovakia</Select.Option>
              <Select.Option value="Slovenia">Slovenia</Select.Option>
              <Select.Option value="Solomon Islands">
                Solomon Islands
              </Select.Option>
              <Select.Option value="Somalia">Somalia</Select.Option>
              <Select.Option value="South Africa">South Africa</Select.Option>
              <Select.Option value="South Georgia and The South Sandwich Islands">
                South Georgia and The South Sandwich Islands
              </Select.Option>
              <Select.Option value="Spain">Spain</Select.Option>
              <Select.Option value="Sri Lanka">Sri Lanka</Select.Option>
              <Select.Option value="Sudan">Sudan</Select.Option>
              <Select.Option value="Suriname">Suriname</Select.Option>
              <Select.Option value="Svalbard and Jan Mayen">
                Svalbard and Jan Mayen
              </Select.Option>
              <Select.Option value="Swaziland">Swaziland</Select.Option>
              <Select.Option value="Sweden">Sweden</Select.Option>
              <Select.Option value="Switzerland">Switzerland</Select.Option>
              <Select.Option value="Syrian Arab Republic">
                Syrian Arab Republic
              </Select.Option>
              <Select.Option value="Taiwan, Province of China">
                Taiwan, Province of China
              </Select.Option>
              <Select.Option value="Tajikistan">Tajikistan</Select.Option>
              <Select.Option value="Tanzania, United Republic of">
                Tanzania, United Republic of
              </Select.Option>
              <Select.Option value="Thailand">Thailand</Select.Option>
              <Select.Option value="Timor-leste">Timor-leste</Select.Option>
              <Select.Option value="Togo">Togo</Select.Option>
              <Select.Option value="Tokelau">Tokelau</Select.Option>
              <Select.Option value="Tonga">Tonga</Select.Option>
              <Select.Option value="Trinidad and Tobago">
                Trinidad and Tobago
              </Select.Option>
              <Select.Option value="Tunisia">Tunisia</Select.Option>
              <Select.Option value="Turkey">Turkey</Select.Option>
              <Select.Option value="Turkmenistan">Turkmenistan</Select.Option>
              <Select.Option value="Turks and Caicos Islands">
                Turks and Caicos Islands
              </Select.Option>
              <Select.Option value="Tuvalu">Tuvalu</Select.Option>
              <Select.Option value="Uganda">Uganda</Select.Option>
              <Select.Option value="Ukraine">Ukraine</Select.Option>
              <Select.Option value="United Arab Emirates">
                United Arab Emirates
              </Select.Option>
              <Select.Option value="United Kingdom">
                United Kingdom
              </Select.Option>
              <Select.Option value="United States">United States</Select.Option>
              <Select.Option value="United States Minor Outlying Islands">
                United States Minor Outlying Islands
              </Select.Option>
              <Select.Option value="Uruguay">Uruguay</Select.Option>
              <Select.Option value="Uzbekistan">Uzbekistan</Select.Option>
              <Select.Option value="Vanuatu">Vanuatu</Select.Option>
              <Select.Option value="Venezuela">Venezuela</Select.Option>
              <Select.Option value="Viet Nam">Viet Nam</Select.Option>
              <Select.Option value="Virgin Islands, British">
                Virgin Islands, British
              </Select.Option>
              <Select.Option value="Virgin Islands, U.S.">
                Virgin Islands, U.S.
              </Select.Option>
              <Select.Option value="Wallis and Futuna">
                Wallis and Futuna
              </Select.Option>
              <Select.Option value="Western Sahara">
                Western Sahara
              </Select.Option>
              <Select.Option value="Yemen">Yemen</Select.Option>
              <Select.Option value="Zambia">Zambia</Select.Option>
              <Select.Option value="Zimbabwe">Zimbabwe</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DeliveryForm;