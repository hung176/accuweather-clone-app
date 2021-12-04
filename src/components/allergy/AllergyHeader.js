import React from "react";

const AllergyHeader = ({ t }) => {
  return (
    <div className="p-3 font-semibold border-b-2 border-gray-200">
      {t("allergy")}
    </div>
  );
};

export default AllergyHeader;
