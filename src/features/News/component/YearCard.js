import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../../constant/routes';
import { truncateText } from '../../../services/appService';

import './styles/custom-styles.less';

function YearCard({ year, current_language }) {
  return (
    <div className='w-full relative mb-8 px-2 mx-auto flex flex-col items-center'>
      <img className='category-image' src={year?.thumbnail} alt={year?.name} />
      <Link to={routes.news_year.replace(':year', year?.name).replace(':id', year?.id)}>
        <p className='absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-white font-bold bg-primary w-24 xl:w-52 py-2 rounded-3xl'>
          {current_language === 'en' ? truncateText(year?.name, 5) : truncateText(year?.name_vi, 5)}
        </p>
      </Link>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    current_language: state.utilityReducer.language,
  };
};

export default connect(
  mapStateToProps,
  null
)(YearCard);