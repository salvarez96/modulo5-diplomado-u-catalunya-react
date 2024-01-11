import { useEffect } from "react"
import { useState } from "react"

function HomeScreen() {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  function saludar() {
    console.log('Mostrando saludo');
  }

  useEffect(() => {
    saludar()
  }, [count])

  return (
    <>
      <p>Hola mundo desde HomeScreen</p>
      <p>Contador está en: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Contador2 está en: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
    </>
  )
}

export default HomeScreen