import React,{ useState } from 'react';
import imagenRickMorty from './img/rick-morty.png';
import Characters from './components/Characters';

import './App.css';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqapi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();
    
    setCharacters(characterApi.results)
  };
  
  return (
    <div className="App">
      <header className="App-header">
          <h1 className='title'>Rick & Morty</h1>
          {characters?(
            <Characters characters={characters} setCharacters={setCharacters} />
          ) : 
          <>
            <img src={ imagenRickMorty } alt='Rick and Morty' className='img-home' />
          </>}
          <button onClick={ reqapi } className='btn-search' >Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
