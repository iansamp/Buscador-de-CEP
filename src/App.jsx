import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './App.css';
import api from './services/api';
import Map from './Map'

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if(input === ''){
      alert('Preencha algum CEP')
    }

    try{
      const response = await api.get(`${input}`)
      setCep(response.data)
      setInput('')
    }catch{
      alert("Error: Formato de CEP inválido.")
      setInput('')
      setCep('')
    }
  }

  return(
    <div className="app">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite o CEP"
        value={input}
        maxLength="9"
        onChange={(e) => setInput(e.target.value)}
        />
        <button className='buttonSearch' type="submit" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <div className="content">
        {Object.keys(cep).length > 0 && (
          <main className='main'>
            <h2>CEP: {cep.cep}</h2>
            <span>{cep.city}-{cep.state}</span>
            <span>{cep.neighborhood}</span>
            <span>{cep.street}</span>
          </main>
        )}

        {Object.keys(cep).length > 0 && (
          <div className='map'><Map/></div>
        )}
      </div>    
    </div>
    
  )
   
}

export default App
