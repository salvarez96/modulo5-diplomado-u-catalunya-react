import { useState } from "react"
import Step1 from "./components/steps/Step1"
import Step2 from "./components/steps/Step2"
import Step3 from "./components/steps/Step3"
import Button from "./components/Button"

function SteptedContactForm() {

  const [step, setStep] = useState(1)

  return (
    <>
      { step === 1 && <Step1 /> }
      { step === 2 && <Step2 /> }
      { step === 3 && <Step3 /> }
      { step === 4 &&
        <>
          <Step1 />
          <Step2 />
          <Step3 />
        </>
      }
      <br />
      <Button step={step} setStep={setStep} />
    </>
  )
}

export default SteptedContactForm