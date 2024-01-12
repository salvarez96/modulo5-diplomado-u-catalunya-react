function Button({step, setStep}) {

  const handleBack = () => {
    step > 1 ? setStep(step - 1) : ''
  }

  const handleNext = () => {
    step < 4 ? setStep(step + 1) : ''
  }

  return (
    <>
      <button type="button" onClick={handleBack} style={{marginRight: '18px'}}>Atrás</button>
      <button type="button" onClick={handleNext}>Siguiente</button>
    </>
  )
}


export default Button