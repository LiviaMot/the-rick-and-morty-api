import './style.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h3>Minha Home</h3>

      <Link to='/rick-and-morty'>
        <button type="button">Navegar para a API</button>
      </Link>
    </>
  )
}