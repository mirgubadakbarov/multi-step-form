import React from "react";
import style from "./checkbox.module.css";

const CheckBox = ({
  id,
  item,
  errors,
  register,
  onChange,
  checkSelected,
  required,
}) => {
  return (
    <label
      className={`${style.label_item} ${
        checkSelected(item.id) && style.active
      } ${errors[id] ? style.error : ""}`}
      htmlFor={item.id}
      key={item.id}
      onClick={(e) => onChange(e.target.checked, item)}
    >
      <input
        defaultChecked={checkSelected(item.id)}
        id={id}
        type="checkbox"
        className="item-input"
        {...register(`${id}`, { required })}
      />
      <div className={style.input_body}>
        <h4 className={style.title}>{item.title}</h4>
        <p className={style.subtitle}>{item.description}</p>
      </div>
      <p className={style.price}>{item.price}</p>
    </label>
  );
};

export default CheckBox;
