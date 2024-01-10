import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <h2>Header</h2>
      <nav>
        <ul>
          <Link to='/home'>HomeScreen</Link>
          <Link to='/clientes'>ClientesScreen</Link>
          <Link to='/'>App</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header