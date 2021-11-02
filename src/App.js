//import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoForm from './component/Form';
import Todo from './component/Todo';


function App() {
  const [todos, setTodos] = React.useState([]);

  const addToDo = text => {
    const newTodos = [...todos, {
      text: text,
      isCompleted: false
    }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (<div className="todo-list"> {todos.map((todo, i) => <Todo index = {i} todo = {todo} remove = {removeTodo}/>)}
            <TodoForm addToDo = {addToDo}/> 
          </div>);

}; 

export default App;