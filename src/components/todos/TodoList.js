import React, { useState } from 'react';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState();
  axios
    .get('http://localhost:4001/todo/all')
    .then((response) => {
      // Update the books state
      setTodos(response.data);
    })
    .catch((error) => console.error(`There was an error retrieving the book list: ${error}`));

  return (
    <ul>
      {todos ? todos.map((todo) => (
        <li>
          {todo.id}
          {' '}
          {todo.task}
          {' '}
          {todo.done}
        </li>
      )) : ''}
    </ul>
  );
}

export default TodoList;
