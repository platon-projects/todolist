import './App.css';
import React from 'react';
import './Todo/TodoList';
import TodoList from './Todo/TodoList';
function App() {
  const [todos,setTodos] = React.useState([
    {id:1,complete: false,title:'buy food'},
    {id:2,complete: false,title:'visit doctor'},
    {id:3,complete: false,title:'Do some chores'}
  ]);
  function toggleTodo(id){
    setTodos( todos.map((todo)=>{
      if(todo.id === id){
        todo.complete = !todo.complete;
      }
      return todo;
    }))
  }
  return (
    <div className="wrapper">
      <h1>New app</h1>
      <TodoList todos={todos} onToggle = {toggleTodo}/>
    </div>
  );
}

export default App;
