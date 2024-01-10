import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeScreen from './screens/home/HomeScreen'
import ClientesScreen from './screens/clientes/ClientesScreen'
import DefaultLayout from './layout/default/DefaultLayout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<p>Esto es app.jsx</p>}/>
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/clientes' element={<ClientesScreen />} />
        </Route>
      </Routes>
    </>
  )
}

export default App