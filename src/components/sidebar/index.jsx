import React from "react";
import style from "./sidebar.module.css";

const Items = [
  {
    id: "step1",
    number: 1,
    subtitle: "Step 1",
    title: "Your Info",
  },
  {
    id: "step2",
    number: 2,
    subtitle: "Step 2",
    title: "Select Plan",
  },
  {
    id: "step3",
    number: 3,
    subtitle: "Step 3",
    title: "Add-Ons",
  },
  {
    id: "step4",
    number: 4,
    subtitle: "Step 4",
    title: "Summary",
  },
];

const Sidebar = ({ activeStep }) => {
  return (
    <div className={style.sidebar}>
      {Items &&
        Items.map((item) => (
          <div key={item.id} className={style.item}>
            <span
              className={`${style.item_number} ${
                activeStep === item.id && style.active
              }`}
            >
              {item.number}
            </span>

            <div className="item_body">
              <h5 className={style.subtitle}>{item.subtitle}</h5>
              <h3 className={style.title}>{item.title}</h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
