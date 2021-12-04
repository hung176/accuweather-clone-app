import React from "react";
import AllergyHeader from "./AllergyHeader";
import AllergyParams from "./AllergyParams";
import { useTranslation } from "react-i18next";

const Allergy = ({ oneDayForecast }) => {
  const { loading, conditions } = oneDayForecast;
  const { t } = useTranslation();

  return (
    <div>
      {!loading && (
        <div className="w-full bg-white mt-4">
          <AllergyHeader t={t} />
          <div>
            <AllergyParams allergy={conditions.allergy} t={t} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Allergy;
