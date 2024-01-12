import { useFormik } from "formik"

function Step3() {

  const formik = useFormik({
    initialValues: {
      direccion: '',
      celular: ''
    },
    onSubmit: (values) => {
      console.log('Mostrando resultados: ', values);
    }
  })

  return (
    <div>
      <div>
        <label htmlFor="direccion">Dirección: </label>
        <input type="text" name="direccion" id="direccion" defaultValue={formik.initialValues.direccion} onBlur={formik.handleBlur} />
      </div>
      <br />
      <div>
        <label htmlFor="celular">Celular: </label>
        <input type="text" name="celular" id="celular" defaultValue={formik.initialValues.celular} onBlur={formik.handleBlur} />
      </div>
    </div>
  )
}

export default Step3