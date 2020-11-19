import './App.css';

const arrTasks = ['Arrumar cama', 'Sair pra passear com o cachorro', 'Reunião de sprint', 'Tomar remédio'];

const tasks = () => arrTasks.map((element) => <li>{element}</li>)
const title = <h1 className='titles'>Lista de compras</h1>
const JSX = <h1 className ='titles'>Hello JSX!</h1>

function App() {
  return (
    <div className='app'>
      {title}
      <ul className='list'>
        {tasks()}
      </ul>
      {JSX}
    </div>
  );
}

export default App;
