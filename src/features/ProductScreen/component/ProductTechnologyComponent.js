import React, { useState } from 'react';
import {
  Row,
  Col,
  Space,
} from 'antd';

import ProductTechDescriptionComponent from '../../../components/ProductTechDescriptionComponent/ProductTechDescriptionComponent';
import { getTranslatedText } from '../../../services/appService';

function ProductTechnologyComponent(props) {

  const {
    productTech,
  } = props;

  // eslint-disable-next-line
  const [arrayOrder, setArrayOrder] = useState([4,3,2,1]);

  return (
    <React.Fragment>
      <Row
        id='product-technology-wrapper'
        gutter={16}
      >
        <Col
          lg={24}
          md={24}
          xs={24}
          id='title-wrapper'
        >
          <h3>{getTranslatedText('product_technology')}</h3>
        </Col>
        <Col 
          id='banner-wrapper'
          lg={12}
          md={24}
          xs={24}
        >
          <div>
            <img src='../../assets/product/techProductBanner.png' alt='' />
          </div>
        </Col>
        <Col
          lg={12}
          md={24}
          xs={24}
          id='product-tech-wrapper'
        >
          <Space
            direction='vertical'
            size='large'
          >
            {productTech && productTech.map((item, index) => (
              <React.Fragment>
                {arrayOrder.map(number => (
                  <React.Fragment>
                    {item.order === number ? (
                      <ProductTechDescriptionComponent
                        techItem={item}
                        index={index}
                      />
                    ) : (
                      null
                    )}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </Space>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductTechnologyComponent;