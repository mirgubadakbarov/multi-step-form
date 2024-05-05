import React, {useState} from "react"
import style from "./step2.module.css"
import Layout from "../layout"
import JSON from "../../../db.json"
import Button from "../custombutton"
import {useForm} from "react-hook-form"
import {YEARLY, MONTHLY, default_plan, default_billing_type} from "./constants"
import Radio from "../customInputs/radio/Radio"

const {step2} = JSON

const Step2 = ({onStepSubmit, data, ...props}) => {
  const [activePlan, setActivePlan] = useState(
    data.step2.activePlan ?? default_plan
  )
  const [billingType, setBillingType] = useState(
    data.step2.billingType ?? default_billing_type
  )
  const [checked, setChecked] = useState(billingType === MONTHLY ? false : true)

  const changePlan = (id) => {
    setActivePlan(id)
  }

  const changeBillingType = () => {
    billingType === MONTHLY ? setBillingType(YEARLY) : setBillingType(MONTHLY)
    setChecked(!checked)
  }

  const onSubmit = () => {
    onStepSubmit("step2", "step3", {billingType, activePlan})
  }

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm(data)
  return (
    <Layout {...props} handleFormSubmit={handleSubmit(onSubmit)}>
      <div className={style.step_2}>
        <div className={style.radio_group}>
          {step2[billingType].map((item) => (
            <Radio
              key={item.id}
              onChange={changePlan}
              item={item}
              activePlan={activePlan}
              billingType={billingType}
              register={register}
              required
              defaultChecked={activePlan == item}
              errors={errors}
            />
          ))}
        </div>
        <div className={style.billing_group}>
          <div className={style.billing_group_option}>
            <span className={`${billingType !== MONTHLY && style.disabled}`}>
              Monthly
            </span>
            <Button checked={checked} onClick={() => changeBillingType()} />
            <span
              className={`${style.billing_button} ${
                billingType !== YEARLY && style.disabled
              }`}
            >
              Yearly
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Step2
