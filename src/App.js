import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './component/TodoList';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then(response => {
        setTodos(response.data)
      })  
  }, []);

  return <div>{todos && <TodoList TODO={todos}/>}</div>;
    
}

export default App;
