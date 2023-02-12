import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import routes from "../../../constant/routes";
import { truncateText, getTranslatedText } from "../../../services/appService";
import "./styles/custom-styles.less";

function NewsItem({ news, current_language }) {
  return (
    <Link to={routes.news_detail.replace(":slug", news?.slug)}>
      <div className="w-full mb-10 mx-auto flex flex-col items-center px-4">
        <div className="w-full relative">
          <img className="news-image" src={news?.thumbnail} alt={news?.name} />
          <div className="absolute top-0 right-7 md:right-20 xl:right-20 2xl:right-6 bg-primary grid grid-cols-1 divide-y-2">
            <span className="text-white font-semibold py-2 px-3">
              {moment(news.event_time || news.created_at).format("DD")}
            </span>
            <span className="text-white font-bold py-2 px-3">
              {moment(news.event_time || news.created_at).format("MM")}
            </span>
          </div>
          {news?.upcoming === 1 && (
            <p className="absolute top-2 left-2 text-white bg-secondary px-5 py-2 rounded-3xl">
              {getTranslatedText("incoming_title")}
            </p>
          )}
        </div>
        <p className="uppercase w-full font-bold text-left mt-2">
          {current_language === "en"
            ? truncateText(news?.name, 85)
            : truncateText(news?.name_vi, 85)}
        </p>
      </div>
    </Link>
  );
}

function mapStateToProps(state) {
  return {
    current_language: state.utilityReducer.language,
  };
}

export default connect(mapStateToProps, null)(NewsItem);
