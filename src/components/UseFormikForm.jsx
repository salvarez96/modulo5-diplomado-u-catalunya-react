import { useFormik } from "formik"

function UseFormikForm() {

  const formik = useFormik({
    initialValues: {
      nombres: '',
      apellidos: '',
      telefono: '',
      direccion: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log('mostrando los datos de values: ', values);
    }
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" name="nombre" id="nombre" onChange={formik.handleChange} defaultValue={formik.values.nombres} />
        </div>
        <br />
        <div>
          <label htmlFor="apellidos">Apellidos: </label>
          <input type="text" name="apellidos" id="apellidos" onChange={formik.handleChange} defaultValue={formik.values.apellidos} />
        </div>
        <br />
        <div>
          <label htmlFor="telefono">Telefono: </label>
          <input type="tel" name="telefono" id="telefono" onChange={formik.handleChange} defaultValue={formik.values.telefono} />
        </div>
        <br />
        <div>
          <label htmlFor="direccion">Dirección: </label>
          <input type="text" name="direccion" id="direccion" onChange={formik.handleChange} defaultValue={formik.values.direccion} />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" onChange={formik.handleChange} defaultValue={formik.values.email} />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <br />
    </>
  )
}

export default UseFormikForm