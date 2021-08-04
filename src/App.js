import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [todos, setTodos] = React.useState([]); 
  const [value, setValue] = React.useState(''); 
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text: value, isCompleted: false}];
    setTodos(newTodos);
    setValue('');
  };

  const removeTodo = e => {
    const index = Number(e.target.id);
    //console.log(e);
    //alert(JSON.stringify(todos));
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  };

  return (
    <>
      {todos.map((todos,i) => 
        <div 
          className="todo" 
          key={i}
          id = {i}
          onClick= {removeTodo}> {todos.text} </div>)}

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="newtask" 
          value={value} 
          placeholder="Enter a new task"
          onChange={e => setValue(e.target.value)}/> 
      </form>
    

    </>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


  );
}

export default App;
