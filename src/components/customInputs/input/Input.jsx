import React, {useEffect} from "react"
import style from "./customInput.module.css"

const CustomInput = ({
  id,
  label,
  type = "text",
  defaultValue,
  placeholder,
  register,
  errors,
}) => {
  return (
    <div className={style.form_item}>
      <div className={style.input_top}>
        <label htmlFor={id} className={style.form_label}>
          {label}
        </label>
        {errors[id] && (
          <span className={style.error_message}>{errors[id].message}</span>
        )}
      </div>
      <input
        className={`${style.form_input} ${errors[id] ? style.error : ""}`}
        defaultValue={defaultValue}
        id={id}
        name={id}
        type={type}
        {...register(id)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default CustomInput
