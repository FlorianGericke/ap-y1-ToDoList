import React, { useState } from 'react';
import axios from 'axios';
import style from './../../style/css/todos/TodoList.module.css'
import TodoTableRow from './TodoTableRow';

function TodoTable() {
  const [todos, setTodos] = useState('');
  axios
    .get('http://localhost:4001/todo/all')
    .then((response) => {
      // Update the books state
      setTodos(response.data);
    })
    .catch((error) => console.error(`There was an error retrieving the book list: ${error}`));

  function setDone(x){
    axios
        .put('http://localhost:4001/todo/done/' + x);
  }

  return (
    <table className={style.list}>
      {todos ? todos.map((todo) => <TodoTableRow onClick={setDone} >{todo}</TodoTableRow>) : ''}
    </table>
  );
}

export default TodoTable;
