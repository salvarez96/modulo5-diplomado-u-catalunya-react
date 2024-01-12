import { useFormik } from "formik"

function Step1() {

  const formik = useFormik({
    initialValues: {
      nombres: '',
      apellidos: ''
    },
    onSubmit: (values) => {
      console.log('Mostrando resultados: ', values);
    }
  })

  return (
    <div>
      <div>
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre" defaultValue={formik.initialValues.nombres} onBlur={formik.handleBlur} />
      </div>
      <br />
      <div>
        <label htmlFor="apellidos">Apellidos: </label>
        <input type="text" name="apellidos" id="apellidos" defaultValue={formik.initialValues.apellidos} onBlur={formik.handleBlur} />
      </div>
    </div>
  )
}

export default Step1