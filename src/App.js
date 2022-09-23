import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Bárbaro',
      corPrimaria: '#1a2e59',
      corSecundaria: '#455a88'
    },
    {
      nome: 'Bardo',
      corPrimaria: '#2a4350',
      corSecundaria: '#5a7a88'
    },
    {
      nome: 'Bruxo',
      corPrimaria: '#4d5937',
      corSecundaria: '#8e9580'
    },
    {
      nome: 'Clérigo',
      corPrimaria: '#6b3332',
      corSecundaria: '#86696b'
    },
    {
      nome: 'Guardião',
      corPrimaria: '#472e41',
      corSecundaria: '#705c6a'
    },
    {
      nome: 'Guerreiro',
      corPrimaria: '#64593b',
      corSecundaria: '#9a927d'
    },
    {
      nome: 'Paladino',
      corPrimaria: '#a76f40',
      corSecundaria: '#a3968b'
    }
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        personagens={personagens.filter(personagem => personagem.time === time.nome)}
      />)}   
      
      <Rodape />

    </div>
  );
}

export default App;
