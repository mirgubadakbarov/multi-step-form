import React from "react";
import style from "./step5.module.css";
import thanksIcon from "../../assets/images/icon-thank-you.svg";

const Step5 = ({ title, subTitle }) => {
  return (
    <div className={style.main}>
      <img src={thanksIcon} alt="" className={style.icon} />
      <h1 className={style.title}>{title}</h1>
      <p className={style.subtitle}>{subTitle}</p>
    </div>
  );
};

export default Step5;
