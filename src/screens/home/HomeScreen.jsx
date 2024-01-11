import { useState } from "react"

function HomeScreen() {

  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hola mundo desde HomeScreen</p>
      <p>Contador está en: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}

export default HomeScreen