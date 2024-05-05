import React, {useState} from "react"
import style from "./step3.module.css"
import Layout from "../layout"

import JSON from "../../../db.json"
import CheckBox from "../customInputs/checkBox"
const {step3} = JSON
import {useForm} from "react-hook-form"

const Step3 = ({onStepSubmit, data, ...props}) => {
  const {billingType} = data.step2

  const [selectedAddons, setSelectedAddons] = useState(
    data.step3.selectedAddons ?? []
  )

  const changeSelectedAddons = (checked, selectedAddon) => {
    if (checked) {
      setSelectedAddons([...selectedAddons, selectedAddon])
    } else {
      setSelectedAddons(
        selectedAddons.filter((addon) => addon.id !== selectedAddon.id)
      )
    }
  }

  const checkSelected = (id) => {
    return selectedAddons.some((s) => s.id === id)
  }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   onStepSubmit("step3", "step4", { selectedAddons });
  // };

  const onSubmit = () => {
    onStepSubmit("step3", "step4", {selectedAddons})
  }

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm(data)

  return (
    <Layout {...props} handleFormSubmit={handleSubmit(onSubmit)}>
      <div className={style.step_3}>
        {step3 &&
          step3[billingType].map((item) => (
            <CheckBox
              id={item.id}
              key={item.id}
              checkSelected={checkSelected}
              item={item}
              register={register}
              errors={errors}
              onChange={changeSelectedAddons}
              required={selectedAddons.length == 0}
            />
          ))}
      </div>
    </Layout>
  )
}

export default Step3
