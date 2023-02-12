import React from 'react';
import { getTranslatedText } from '../../../services/appService';

const PriceLabel = ({ promotionPrice, originalPrice }) => {
  return (
    <div className="flex row items-center justify-center lg:justify-start gap-2.5 mt-2">
      <p className="uppercase font-bold lg:text-2xl">
        {getTranslatedText('new_product_price')}:
      </p>
      {promotionPrice !== 0 ? (
        <div className="flex row items-center py-5 shadow bg-ligth-gray gap-4 px-6 rounded-4xl">
          <p className="uppercase font-bold text-4xl text-primary">
            {`$ ${promotionPrice}`}
          </p>
          <p className="uppercase font-bold text-xl line-through">
            {`$ ${originalPrice}`}
          </p>
        </div>
      ) : (
        <div className="flex row items-center py-5 shadow bg-ligth-gray gap-4 px-6 rounded-4xl">
          <p className="uppercase font-bold text-4xl">{`$ ${originalPrice}`}</p>
        </div>
      )}
    </div>
  );
};

export default PriceLabel;
