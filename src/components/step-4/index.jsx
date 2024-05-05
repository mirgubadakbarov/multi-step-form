import React from "react"
import style from "./step4.module.css"
import Layout from "../layout"
import {useForm} from "react-hook-form"

const Step4 = ({onStepSubmit, data, ...props}) => {
  const {billingType, activePlan} = data.step2
  const {selectedAddons} = data.step3

  const total = () => {
    return selectedAddons.reduce(
      (acc, curr) => acc + curr.priceAmount,
      activePlan.priceAmount
    )
  }

  const onSubmit = () => {
    onStepSubmit("step4", "step5")
  }

  const {handleSubmit} = useForm()

  return (
    <Layout {...props} handleFormSubmit={handleSubmit(onSubmit)}>
      <div className={style.step_4}>
        <div className={style.main_row}>
          <div className={style.top_row}>
            <h4 className={style.title}>
              {activePlan.title} ( {billingType} )
            </h4>
            <h6 className={style.price}>{activePlan.price}</h6>
          </div>
          <div className={style.bottom_row}>
            {selectedAddons.length > 0 &&
              selectedAddons.map((item) => (
                <div key={item.id} className={style.row_item}>
                  <h4 className={style.title}>{item.title}</h4>
                  <h6 className={style.price}>{item.price}</h6>
                </div>
              ))}
          </div>
        </div>

        <div className={style.total_row}>
          <h6 className={style.title}>Total (per {billingType})</h6>
          <h6 className={style.total}>
            +$
            {total()}/{billingType === "monthly" ? "mo" : "yr"}
          </h6>
        </div>
      </div>
    </Layout>
  )
}

export default Step4
