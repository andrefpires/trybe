import React, { useState, useEffect } from 'react';

function Greeting({ initialName = window.localStorage.getItem('name') }) {
  // 🐨 inicialize o estado com o valor que vem do localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] = React.useState(initialName);

  // 🐨 Utilize o hook useEffect para atualizar a
  // propriedade `name` no localStorage quando o estado for alterado
  // 💰 window.localStorage.setItem('name', name)
  useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
