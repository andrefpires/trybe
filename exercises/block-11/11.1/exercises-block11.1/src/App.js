import './App.css';

const arrTasks = ['Arrumar cama', 'Sair pra passear com o cachorro', 'Reunião de sprint', 'Tomar remédio'];

const tasks = () => arrTasks.map((element) => <li>{element}</li>)
const title = <h1 className='titlesAndTexts'>Lista de compras</h1>
const JSX = <h1 className ='titlesAndTexts'>Hello JSX!</h1>
const JSX2 = (
  <div>
      <h1 className='titlesAndTexts'>Title</h1>
      <p className='titlesAndTexts'>Paragraph</p>
      <ul className='lists'>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
      </ul>
  </div>
)

function App() {
  return (
    <div className='app'>
      {title}
      <ul className='lists'>
        {tasks()}
      </ul>
      {JSX}
      {JSX2}
    </div>
  );
}

export default App;
