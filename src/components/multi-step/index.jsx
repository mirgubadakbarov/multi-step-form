import React, { useState } from "react";
import styles from "./StepForm.module.css";
import Sidebar from "../sidebar";
import Step1 from "../step-1";
import Step2 from "../step-2";
import Step3 from "../step-3";
import Step4 from "../step-4";
import Step5 from "../step-5";

const Steps = {
  step1: {
    component: Step1,
    title: "Personal Info",
    subTitle: "Please provider your name,email address and phone number.",
    backButton: false,
    nextButton: true,
  },
  step2: {
    component: Step2,
    title: "Select your plan",
    subTitle: "You have the option of monthly or yearly billing.",
    backButton: true,
    nextButton: true,
  },
  step3: {
    component: Step3,
    title: "Pick add-ons",
    subTitle: "Add-ons help enhance your gaming experience.",
    backButton: true,
    nextButton: true,
  },
  step4: {
    component: Step4,
    title: "Finishing up",
    subTitle: "Double-check everything looks OK before confirming.",
    backButton: true,
    nextButton: false,
  },
  step5: {
    component: Step5,
    title: "Thank you!",
    subTitle:
      "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,please feel free to email us seidvahidli@gmail.com",
    backButton: false,
    nextButton: false,
  },
};

const StepForm = () => {
  const [data, setData] = useState({ step1: {}, step2: {}, step3: {} });

  const [activeStep, setActiveStep] = useState("step1");
  const ActiveStep = Steps[activeStep].component;

  const handleStepSubmit = (stepId, nextStepId, stepData) => {
    setData({
      ...data,
      [stepId]: stepData,
    });
    setActiveStep(nextStepId);
  };

  const handleBack = () => {
    const currentStepNumber = Number(activeStep.slice(-1));
    setActiveStep(`step${currentStepNumber - 1}`);
  };

  return (
    <div className={styles.multi_step}>
      <Sidebar activeStep={activeStep} />
      <ActiveStep
        {...Steps[activeStep]}
        onStepSubmit={handleStepSubmit}
        data={data}
        onBack={handleBack}
      />
    </div>
  );
};

export default StepForm;
