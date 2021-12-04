import React, { useState } from "react";
import HeaderCard from "./HeaderCard";
import ListWeatherParams from "./ListWeatherParams";
import { useTranslation } from "react-i18next";

const AccordionCard = ({ params, paramsIndex }) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [rotate, setRotate] = useState("");

  const weatherArr = Object.keys(paramsIndex).map((p) => ({
    name: t(p),
    value: params[p],
  }));

  const onAction = () => {
    setIsActive(!isActive);

    setRotate(isActive ? "" : "transform rotate-180");
  };
  return (
    <div className="w-full bg-white p-3 mb-4">
      <HeaderCard params={params} rotate={rotate} onAction={onAction} />

      {isActive && (
        <div>
          <ListWeatherParams weatherArr={weatherArr} />
        </div>
      )}
    </div>
  );
};

export default AccordionCard;
