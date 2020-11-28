import Pokemon from './components/Pokemon';
import pokemons from './data';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>My pokedex</h1>
      </header>
      <div>
        { pokemons.map((element) => <Pokemon pokemon={element}/>) };
      </div>
    </div>
  );
}

export default App;
