import React from "react";
import style from "./layout.module.css";
import Header from "../header";

const Layout = ({
  onBack,
  handleFormSubmit,
  title,
  subTitle,
  backButton,
  nextButton,
  children,
}) => {
  return (
    <form className={style.step_form} onSubmit={handleFormSubmit}>
      <Header title={title} subTitle={subTitle} />
      <div className={style.step_body}>{children}</div>
      <div className={style.step_footer}>
        {backButton && (
          <button onClick={onBack} className={style.back}>
            Go Back
          </button>
        )}
        {nextButton ? (
          <button className={style.next} type="submit">
            Next Step
          </button>
        ) : (
          <button className={style.confirm} type="submit">
            Confirm
          </button>
        )}
      </div>
    </form>
  );
};

export default Layout;
