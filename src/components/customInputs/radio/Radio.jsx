import React from "react"
import style from "./radio.module.css"
import {Icons, YEARLY} from "../../step-2/constants"

const Radio = ({
  item,
  billingType,
  activePlan,
  onChange,
  errors,
  register,
  required,
  defaultChecked,
}) => {
  return (
    <label
      onClick={() => onChange(item)}
      key={item.id}
      className={`${style.radio_label} ${
        item.id === activePlan.id ? style.active_radio : ""
      }  ${errors["plan-type"] ? style.error : ""} `}
    >
      <input
        type="radio"
        name="plan-type"
        defaultChecked={defaultChecked}
        className={style.radio_input}
        {...register("plan-type", {required})}
      />
      <img src={Icons[item.id]} alt="" className={style.icon} />
      <h3 className={style.title}>{item.title}</h3>
      <h6 className={style.subtitle}>{item.price}</h6>
      {billingType === YEARLY && (
        <p className={style.description}>{item.description}</p>
      )}
    </label>
  )
}

export default Radio
