import './App.css';
import React from 'react';
import './Todo/TodoList';
import AddTodo from './Todo/AddTodo';
import TodoList from './Todo/TodoList';
import Context from './context';
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
  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id!==id))
  }
  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      complete:false
    }]))
  }
  return (
    <Context.Provider value = {{removeTodo}}>
    <div className="wrapper">
      <h1>New app</h1>
      <AddTodo onCreate={addTodo}/>
      {todos.length ? <TodoList todos={todos} onToggle = {toggleTodo}/> : <p>You have not got todos</p>}
    </div>
    </Context.Provider>
  );
}

export default App;
