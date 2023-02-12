import React, { useEffect, useState } from 'react';
import { Button, Spin } from 'antd';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItemToCart } from '../../../redux/actions';
import HTMLParser from '../../../components/HTMLParser';
import { useFetchDetailProduct } from '../../../hooks/api/useProduct';
import { dataURItoBlod, getTranslatedText } from '../../../services/appService';

import newProductLogo from '../../../assets/images/newProductLogo.png';
import PriceLabel from '../component/PriceLabel';

import routes from '../../../constant/routes';
import { colorBaseOnId } from '../../../services/appService';
import '../styles/new-product-screen-styles.less';
import PDFRender from '../../../components/PDFRender/PDFRender';

const TranslateContent = ({
  currentLang,
  dataKeyEn,
  dataKeyVi,
  ContentEn,
  ContentVi,
  ...props
}) => {
  if (currentLang === 'en' && dataKeyEn) {
    return <ContentEn />;
  }
  if (currentLang === 'vi' && dataKeyVi) {
    return <ContentVi />;
  }
  return null;
};

const NewProductDetailScreen = ({ current_language, actions }) => {
  const params = useParams();
  const history = useHistory();
  const { data, isLoading } = useFetchDetailProduct(params?.product_id);
  const [showPDF, onShowPDF] = useState(false);

  const handleAddProductToCart = () => {
    if (data.price === 0) {
      const payload = {
        id: data.id,
        price: data.original_price,
        code: data.code,
        name: data.name,
        avatar: data.avatar,
        quantity: 1
      };
      actions.addItemToCart(payload);
      history.push(routes.cart);
    } else {
      const payload = {
        id: data.id,
        price: data.price,
        code: data.code,
        name: data.name,
        avatar: data.avatar,
        quantity: 1
      };
      actions.addItemToCart(payload);
      history.push(routes.cart);
    }
  };

  useEffect(() => {
    if (current_language === 'en' && data?.pdf_file) onShowPDF(true);
    if (current_language === 'vi' && data?.pdd_file_vi)
      onShowPDF(true);
  }, [current_language, data]);

  return (
    <div>
      {isLoading ? (
        <Spin spinning={isLoading}>
          <div className="w-full bg-white min-h-screen"></div>
        </Spin>
      ) : (
        <div className="w-full bg-white pt-6 lg:pt-14 xl:pt-32 pb-20">
          <div className="w-full max-w-screen-2xl mx-auto lg:px-20 2xl:px-0">
            <div className="w-full flex flex-col xl:flex-row xl:gap-20 2xl:gap-40">
              <div className="w-full xl:w-1/3 px-4 lg:px-0">
                <div className="w-full text-left">
                  <p className="uppercase font-bold lg:text-2xl">
                    {current_language === 'en'
                      ? data?.series_en
                      : data?.series_vi}
                  </p>
                  <p className="font-extralight lg:text-2xl">
                    {current_language === 'en'
                      ? data?.distribution_en
                      : data?.distribution_vi}
                  </p>
                  <p className="uppercase font-bold text-primary mt-5 mb-2 text-5xl lg:text-6xl">
                    {data?.name}
                  </p>
                </div>
                <div className="w-full">
                  <div className="image-container flex justify-center xl:justify-start">
                    <img
                      className="w-full"
                      src={data?.avatar || data?.background}
                      alt="productWellness"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-5">
                    {(data?.price !== 0 || data?.original_price) !== 0 && (
                      <PriceLabel
                        promotionPrice={data?.price}
                        originalPrice={data?.original_price}
                      />
                    )}
                    {(data?.original_price !== 0 || data?.price !== 0) && (
                      <Button
                        className="lg:text-2xl h-10 lg:h-12 mx-20 md:mx-48 lg:mx-20"
                        type="primary"
                        onClick={handleAddProductToCart}>
                        <p>{getTranslatedText('btn_buy_now')}</p>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-2/3 text-left mt-14 xl:-mt-1">
                <div className="w-full mb-8 uppercase px-4 lg:px-0 lg:px-0 lg:text-2xl">
                  <p className="font-extralight xl:text-left uppercase">
                    {data?.code}
                  </p>
                  <p className="font-bold xl:text-left uppercase">
                    {current_language === 'en'
                      ? data?.title_en
                      : data?.title_vi}
                  </p>
                  <p className="font-extralight xl:text-left uppercase">
                    <span className="font-bold xl:text-left">
                      {getTranslatedText('new_product_sku')}:
                    </span>{' '}
                    {data?.sku}
                  </p>
                  <p className="font-extralight xl:text-left uppercase">
                    <span className="font-bold">
                      {getTranslatedText('new_product_size')}:
                    </span>{' '}
                    {`${data?.size} caps`}
                  </p>
                </div>
                <div className="w-full px-4 lg:px-0 lg:px-0 mb-6 font-extralight lg:text-2xl text-container">
                  <HTMLParser
                    className="w-full break-words"
                    content={
                      current_language === 'en'
                        ? data?.description_en
                        : data?.description_vi
                    }
                  />
                </div>
                {data?.[`amino_acid_${current_language}`] && (
                  <div className="w-full px-4 font-extralight bg-green-base py-7 text-white lg:text-2xl">
                    <HTMLParser
                      className="w-full break-words"
                      content={data?.[`amino_acid_${current_language}`]}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="w-full mt-10 flex flex-col xl:flex-row-reverse xl:gap-20 2xl:gap-40">
              <div className="w-full xl:w-2/3 text-left px-4 lg:px-0">
                <p className="uppercase font-bold lg:text-2xl uppercase">
                  {getTranslatedText('new_product_benefit')}
                </p>
                <p className="my-2 font-extralight lg:text-2xl">
                  {getTranslatedText('new_product_effect')}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-8">
                  {data?.benefit?.map(item => (
                    <div
                      className="w-full text-center py-2.5 px-10 lg:py-6"
                      style={{ backgroundColor: colorBaseOnId(item.id) }}
                      key={item.id}>
                      <p className="uppercase text-white font-bold text-2xl lg:text-4xl break-words">
                        {current_language === 'en'
                          ? item?.title_en
                          : item?.title_vi}
                      </p>
                    </div>
                  ))}
                </div>
                <TranslateContent
                  currentLang={current_language}
                  dataKeyEn={data?.recommend_dosage_en}
                  dataKeyVi={data?.recommend_dosage_vi}
                  ContentEn={() => (
                    <div>
                      <p className="uppercase font-bold lg:text-2xl">
                        {getTranslatedText('new_product_recommended_dosage')}:
                      </p>
                      <p className="font-extralight lg:text-2xl">
                        {data?.recommend_dosage_en}
                      </p>
                    </div>
                  )}
                  ContentVi={() => (
                    <div>
                      <p className="uppercase font-bold lg:text-2xl">
                        {getTranslatedText('new_product_recommended_dosage')}:
                      </p>
                      <p className="font-extralight lg:text-2xl">
                        {data?.recommend_dosage_vi}
                      </p>
                    </div>
                  )}
                />
              </div>
              <div className="w-full xl:w-1/3 mt-8">
                <div className="image-container px-4 lg:px-0">
                  <img
                    className="w-full"
                    src={
                      current_language === 'en'
                        ? data?.supplement_facts_en
                        : data?.supplement_facts_vi
                    }
                    alt=""
                  />
                </div>
                <TranslateContent
                  currentLang={current_language}
                  dataKeyEn={data?.directions_en}
                  dataKeyVi={data?.directions_vi}
                  ContentEn={() => (
                    <div className="w-full mt-10 text-left px-4 lg:px-0 lg:text-2xl">
                      <p className="uppercase font-bold mb-1 text-green-base">
                        {getTranslatedText('new_product_directions')}:
                      </p>
                      <HTMLParser
                        className="w-full break-words"
                        content={data?.directions_en}
                      />
                    </div>
                  )}
                  ContentVi={() => (
                    <div className="w-full mt-10 text-left px-4 lg:px-0 lg:text-2xl">
                      <p className="uppercase font-bold mb-1 text-green-base">
                        {getTranslatedText('new_product_directions')}:
                      </p>
                      <HTMLParser
                        className="w-full break-words"
                        content={data?.directions_vi}
                      />
                    </div>
                  )}
                />

                <div className="w-full flex gap-0.5 lg:gap-1 mt-10 px-4 lg:px-0 flex-wrap">
                  {data?.images.length !== 0 ? (
                    <>
                      {data?.images.map(item => (
                        <img
                          className="w-16 lg:w-20"
                          key={item}
                          src={item.url || newProductLogo}
                          alt=""
                        />
                      ))}
                    </>
                  ) : (
                    [1, 2, 3, 4, 5].map(item => (
                      <img
                        className="w-16 lg:w-20"
                        key={item}
                        src={newProductLogo}
                        alt=""
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
          {showPDF && (
            <div>
              <PDFRender
                file={
                  current_language === 'en'
                    ? dataURItoBlod(data?.pdf_file)
                    : dataURItoBlod(data?.pdf_file_vi)
                }
                onlyFirstPage
              />
              <div className="w-full mt-5">
                <a
                  href={
                    current_language === 'en'
                      ? data?.download_pdf_file
                      : data?.download_pdf_file_vi
                  }
                  download
                  target="_blank"
                  rel="noreferrer">
                  <p className="w-1/2 md:w-3/12 mx-auto bg-primary text-white px-4 py-2 shadow-base rounded-lg text-center text-sm md:text-xl font-semibold">
                    {getTranslatedText('download_pdf_title')}
                  </p>
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    current_language: state.utilityReducer.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addItemToCart
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProductDetailScreen);
