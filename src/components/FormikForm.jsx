import { Formik } from "formik"

function FormikForm() {

  const initialValues = {
    nombres: '',
    apellidos: '',
    telefono: '',
    direccion: '',
    email: ''
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log('Mostrando values: ', values);
        }}
      >
        {({
          values,
          handleBlur,
          handleChange,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre: </label>
              <input type="text" name="nombre" id="nombre" onBlur={handleBlur} onChange={handleChange} defaultValue={values.nombres} />
            </div>
            <br />
            <div>
              <label htmlFor="apellidos">Apellidos: </label>
              <input type="text" name="apellidos" id="apellidos" onBlur={handleBlur} onChange={handleChange} defaultValue={values.apellidos} />
            </div>
            <br />
            <div>
              <label htmlFor="telefono">Telefono: </label>
              <input type="tel" name="telefono" id="telefono" onBlur={handleBlur} onChange={handleChange} defaultValue={values.telefono} />
            </div>
            <br />
            <div>
              <label htmlFor="direccion">Dirección: </label>
              <input type="text" name="direccion" id="direccion" onBlur={handleBlur} onChange={handleChange} defaultValue={values.direccion} />
            </div>
            <br />
            <div>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" onBlur={handleBlur} onChange={handleChange} defaultValue={values.email} />
            </div>
            <br />
            <button type="submit">Enviar</button>
            <br />
          </form>
        )}
      </Formik>
    </>
  )
}

export default FormikForm