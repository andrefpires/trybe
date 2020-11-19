import './App.css';

const arrTasks = ['Arrumar cama', 'Sair pra passear com o cachorro', 'Reunião de sprint', 'Tomar remédio'];

const tasks = () => arrTasks.map((element) => <li>{element}</li>)

function App() {
  return (
    <div className='app'>
      <h1 className='title'>Lista de compras</h1>
      <ul className='list'>
        {tasks()}
      </ul>
    </div>
  );
}

export default App;
