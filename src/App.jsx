import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { getCharacters } from './api/character'

function App() {
  const [ conteudo, setConteudo ] = useState(<>Carregando..</>)

  async function TransformaEmLista() {
    const todosPersonagens = await getCharacters()

    return todosPersonagens.map(personagem => 
      <div className='card char' key={personagem.id}>
        <img src={personagem.image} alt={`Foto de ${personagem.name}`} />
        <h2>{personagem.name}</h2>
        <div className='char-info'>
          <span><b>Espécie: </b>{personagem.species}</span>
          <span><b>Gênero: </b>{personagem.gender}</span>
        </div>
        <div>
          <div className='lista-secundaria'>
            <b>Participações: </b>
            {/* 
              Desafio,traga as participações
              personagem.episode.map()
              - criar uma lista (ul > li)
            */}
          </div>
          <h5><b>Status: </b>{personagem.status}</h5>
        </div>
      </div>
    )
  }

  useEffect(() => {
    async function carregar() {
      setConteudo(
        await TransformaEmLista()
      )
    }
    carregar()
  }, [])

  return (
    <>
      <Header />
      <main>
        {/* Filtros */}
        <div className='lista-principal'>
          { conteudo }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App