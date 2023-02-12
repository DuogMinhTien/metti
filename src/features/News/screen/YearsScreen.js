import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNewsCategories } from '../../../redux/actions';
import { Layout, Row, Col, Spin, List } from 'antd';
import '../styles/news-screen-styles.less';
import NewsItem from '../component/NewsItem';
import { getTranslatedText } from '../../../services/appService';

const { Content } = Layout;

function YearsScreen(props) {
  const { actions, categories, isLoading } = props;

  useEffect(() => {
    actions.getNewsCategories();
    //eslint-disable-next-line
  }, []);

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
            <h1 className="mb-6 pl-7 xl:mb-10 lg:text-left text-greyText text-19 lg:text-28 xl:text-40">
              {getTranslatedText('news_title')}
            </h1>
            <div className="w-full">
              {categories?.map((item, index) => (
                <div className="w-full py-5 border-b" key={index}>
                  <List
                    className="px-3"
                    header={
                      <div className="w-full pl-4">
                        <h1 className="text-white font-bold bg-primary w-24 xl:w-52 py-2 rounded-3xl">
                          {item.name}
                        </h1>
                      </div>
                    }
                    dataSource={item?.news || []}
                    grid={{
                      gutter: 16,
                      xs: 1,
                      md: 2,
                      lg: 2,
                      xl: 3,
                      xxl: 3
                    }}
                    pagination={{
                      pageSize: 9,
                      total: item?.news.length,
                      hideOnSinglePage: true,
                      style: { textAlign: 'center' }
                    }}
                    renderItem={news => (
                      <List.Item>
                        <NewsItem news={news} />
                      </List.Item>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Content>
    </Spin>
  );
}

function mapStateToProps(state) {
  return {
    categories: state.newsReducer.categories,
    isLoading: state.newsReducer.isLoading,
    current_language: state.utilityReducer.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getNewsCategories
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(YearsScreen);
