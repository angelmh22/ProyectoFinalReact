import './App.css';
import BuscaPeli from './components/BuscaPersonaje';

// https://api.disneyapi.dev/characters/308

// https://api.disneyapi.dev/character?name=Mickey%20Mouse

function App() {
  return (
    <div className="App">
      <h2>(Componente Principal)</h2>
      <BuscaPeli />
    </div>
  );
}

export default App;
