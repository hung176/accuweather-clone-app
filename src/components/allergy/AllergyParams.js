import React from "react";
import AllergyItem from "./AllergyItem";

const AllergyParams = ({ allergy, t }) => {
  const allergyArr = Object.keys(allergy).map((a) => ({
    name: t(a),
    icon: allergy[a].icon,
    category: allergy[a].category,
  }));
  return (
    <div>
      {allergyArr.map((item) => (
        <div key={item.name} className="px-6 py-2">
          <AllergyItem allergyItem={item} />
        </div>
      ))}
    </div>
  );
};

export default AllergyParams;
