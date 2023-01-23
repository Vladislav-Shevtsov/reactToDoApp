//Default import 
import './App.css';
//import react
import React from 'react';
//import js components
import Header from './components/Header/Header'
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/ToDoList/TodoList';
//import useState
import { useState } from 'react';


function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Dinner with wife',
      completed: false
    },
    {
      id: 2,
      title: 'Do the important stuff',
      completed: false
    },
    {
      id: 3,
      title: 'Safe the world',
      completed: true 
    }
  ])

  console.log(todo);

  // state = {
  //   todos: [{
  //     idL: 1,
  //     title: 'This is the title',
  //     completed: false
  //   },
  //   {
  //     idL: 2,
  //     title: 'Dinner with wife',
  //     completed: false
  //   },
  //   {
  //     idL: 3,
  //     title: 'Make the history',
  //     completed: false
  //   }
  // ]
  // }
  //console.log(state.todos)
  return (
    <div className="App">

      <Header />
      <AddTodo setTodo = {setTodo} todo={todo}/>
      <TodoList todo= {todo} setTodo= {setTodo}/>     
        
    </div>
  );
}

export default App; 
