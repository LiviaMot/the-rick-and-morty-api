import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
  return (
    <header>
      <h1>Rick and Morty API</h1>

      <nav>
        <ul>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/rick-and-morty'>
            <button>API</button>
          </Link>
        </ul>
      </nav>
    </header>
  )
}