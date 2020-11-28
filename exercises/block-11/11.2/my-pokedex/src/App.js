import Pokemon from '../components/Pokemon'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My pokedex</h1>
      </header>
      <div>
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
