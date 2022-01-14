import React, { useState } from 'react';
import axios from 'axios';
import style from './../../style/css/todos/TodoList.module.css'
import ListItem from './ListItem';

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
    <ul className={style.listItem}>
      {todos ? todos.map((todo) => <ListItem>{todo}</ListItem>) : ''}
    </ul>
  );
}

export default TodoList;
