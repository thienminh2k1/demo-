import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './component/TodoList';
import Loading from './component/Loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then(response => {
        setTodos(response.data)
      })  
  }, []);

  return <div> {todos ? <TodoList todos={todos}/> : <Loading/> }</div>;
    
}

export default App;
