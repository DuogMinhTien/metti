import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNewsDetail } from '../../../redux/actions';
import { Layout, Row, Col, Spin } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import { getTranslatedText, dataURItoBlod } from '../../../services/appService';
import '../styles/news-screen-styles.less';
import PDFRender from '../../../components/PDFRender/PDFRender';
import HTMLParser from '../../../components/HTMLParser';

const { Content } = Layout;

const NewsView = props => {
  const { actions, news_detail, isLoading, current_language } = props;

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    const slug = params?.slug;
    actions.getNewsDetail(slug);
  }, [params.slug, actions]);

  const handleGoback = () => {
    history.goBack();
  };

  return (
    <Spin spinning={isLoading}>
      <Content>
        <Row className="pb-10" id="news-screen-wrapper" gutter={[16, 16]}>
          <Col md={24}>
            <div id="news-contact-wrapper">
              <img src={'../../assets/contact/13.jpg'} alt="" />
            </div>
          </Col>
          <div className="max-w-screen-xl w-full mx-auto pt-5 xl:pt-10 md:px-5 xl:px-0">
            <div className="flex items-center gap-5 px-3">
              <button onClick={handleGoback}>
                <img
                  className="w-10"
                  src="../../assets/arrow-bar-left.svg"
                  alt="icons"
                />
              </button>
              <p className="text-greyText font-bold uppercase lg:text-40">
                {current_language === 'en'
                  ? news_detail.name
                  : news_detail.name_vi}
              </p>
            </div>
            <div className="w-full mx-auto mt-4 pt-10 border-t-2 px-3">
              <HTMLParser
                className="w-full mb-4 text-left"
                content={
                  current_language === 'en'
                    ? news_detail.summary
                    : news_detail.summary_vi
                }
              />
              <div className="w-full mx-auto flex items-center justify-center">
                {!isLoading && (
                  <PDFRender
                    file={
                      current_language === 'en'
                        ? dataURItoBlod(news_detail?.pdf_file)
                        : dataURItoBlod(news_detail?.pdf_file_vi)
                    }
                  />
                )}
              </div>
              <p className="clear-both" />
            </div>
            <div className="w-full mx-auto px-3 mt-5">
              {current_language === 'en' ? (
                <a
                  href={news_detail?.download_pdf_file}
                  download
                  target="_blank"
                  rel="noreferrer">
                  <p className="text-center text-primary text-bold">
                    {getTranslatedText('download_pdf_title')}
                  </p>
                </a>
              ) : (
                <a
                  href={news_detail?.download_pdf_file_vi}
                  download
                  target="_blank"
                  rel="noreferrer">
                  <p className="text-center text-primary text-bold">
                    {getTranslatedText('download_pdf_title')}
                  </p>
                </a>
              )}
            </div>
          </div>
        </Row>
      </Content>
    </Spin>
  );
};

function mapStateToProps(state) {
  return {
    news_detail: state.newsReducer.news_detail,
    isLoading: state.newsReducer.isLoading,
    current_language: state.utilityReducer.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getNewsDetail
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsView);
