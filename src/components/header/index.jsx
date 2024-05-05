import React from "react";
import style from "./header.module.css";

const Header = ({ title, subTitle }) => {
  return (
    <div className="step-header">
      <h2 className={style.step_title}>{title}</h2>
      <p className={style.step_subtitle}>{subTitle}</p>
    </div>
  );
};

export default Header;
