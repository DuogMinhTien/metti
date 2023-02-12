import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNewsList } from '../../../redux/actions';
import { Layout, Row, Col, Spin, Pagination, Result } from 'antd';
import NewsItem from '../component/NewsItem';
import { useHistory, useParams } from 'react-router-dom';
import '../styles/news-screen-styles.less';
import { getTranslatedText, truncateText } from '../../../services/appService';

const { Content } = Layout;

const PAGE_SIZE = 15;

function NewsScreen(props) {
  const { actions, news, isLoading, current_page, total_new } = props;

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    actions.getNewsList({
      category_id: params?.id,
      page: 1
    });
  }, [params.id, actions]);

  const handleGoback = () => {
    history.goBack();
  };

  const handleOnPageChange = page => {
    actions.getNewsList({
      category_id: params?.id,
      page
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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
            <div className="w-full mb-5 px-3 flex justify-between items-center">
              <div className="flex items-center gap-5">
                <button onClick={handleGoback}>
                  <img
                    className="w-5 lg:w-10"
                    src="../../assets/arrow-bar-left.svg"
                    alt="icons"
                  />
                </button>
                <p className="text-greyText font-bold uppercase lg:text-40">
                  {getTranslatedText('news_list')}
                </p>
              </div>
              <p className="text-center text-white font-bold bg-primary w-24 xl:w-52 py-2 rounded-3xl">
                {truncateText(params?.year, 5)}
              </p>
            </div>
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {news?.length === 0 ? (
                <div className="w-full md:col-span-2 lg:col-span-3 flex justify-center">
                  <Result
                    className=""
                    status={'404'}
                    title={getTranslatedText('no_news_title')}
                  />
                </div>
              ) : (
                <>
                  {news?.map((item, index) => (
                    <NewsItem news={item} key={index} />
                  ))}
                </>
              )}
            </div>
            <Pagination
              total={total_new}
              pageSize={PAGE_SIZE}
              current={current_page}
              onChange={page => handleOnPageChange(page)}
            />
          </div>
        </Row>
      </Content>
    </Spin>
  );
}

function mapStateToProps(state) {
  return {
    news: state.newsReducer.news,
    current_page: state.newsReducer.current_page,
    total_new: state.newsReducer.total_new,
    last_page: state.newsReducer.last_page,
    isLoading: state.newsReducer.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getNewsList
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
