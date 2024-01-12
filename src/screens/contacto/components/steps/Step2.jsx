import { useFormik } from "formik"

function Step2() {

  const formik = useFormik({
    initialValues: {
      correo: '',
      telefono: ''
    },
    onSubmit: (values) => {
      console.log('Mostrando resultados: ', values);
    }
  })

  return (
    <div>
      <div>
        <label htmlFor="correo">Correo: </label>
        <input type="text" name="correo" id="correo" defaultValue={formik.initialValues.correo} onBlur={formik.handleBlur} />
      </div>
      <br />
      <div>
        <label htmlFor="telefono">Telefono: </label>
        <input type="text" name="telefono" id="telefono" defaultValue={formik.initialValues.telefono} onBlur={formik.handleBlur} />
      </div>
    </div>
  )
}

export default Step2