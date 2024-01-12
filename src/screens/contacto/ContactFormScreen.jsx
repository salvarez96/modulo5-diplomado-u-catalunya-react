import { useState } from "react"
import UseFormikForm from "../../components/UseFormikForm"

function ContactFormScreen() {

  const [formValues, setFormValues] = useState({})

  const handleChange = (obj) => {
    const key = obj.target.name
    const value = obj.target.value
    setFormValues({...formValues, [key]: value})
  }

  const handleSubmit = () => {
    console.log('Mostrando en consola los values: ', formValues);
  }

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" name="nombre" id="nombre" onBlur={(e) => handleChange(e)} />
        </div>
        <br />
        <div>
          <label htmlFor="apellidos">Apellidos: </label>
          <input type="text" name="apellidos" id="apellidos" onBlur={(e) => handleChange(e)} />
        </div>
        <br />
        <div>
          <label htmlFor="telefono">Telefono: </label>
          <input type="tel" name="telefono" id="telefono" onBlur={(e) => handleChange(e)} />
        </div>
        <br />
        <div>
          <label htmlFor="direccion">Dirección: </label>
          <input type="text" name="direccion" id="direccion" onBlur={(e) => handleChange(e)} />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" onBlur={(e) => handleChange(e)} />
        </div>
        <br />
        <button type="button" onClick={handleSubmit}>Enviar</button>
      </form>
      <br />
      <UseFormikForm />
    </>
  )
}

export default ContactFormScreen