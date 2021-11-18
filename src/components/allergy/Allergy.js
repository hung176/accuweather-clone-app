import React from 'react';
import AllergyHeader from './AllergyHeader';
import AllergyParams from './AllergyParams';
import { allergyIndex } from '../../consts/weatherParamsIndex';

const Allergy = ({ oneDayForecast }) => {
  const { loading, error, conditions } = oneDayForecast;

  return (
    <div>
      {!loading && (
        <div className="w-full bg-white mt-4">
          <AllergyHeader />
          <div>
            <AllergyParams allergy={conditions.allergy} allergyIndex={allergyIndex} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Allergy;