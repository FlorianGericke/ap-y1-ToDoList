import React, { useState } from 'react';
import axios from 'axios';
import style from './../../style/css/todos/TodoList.module.css'
import TodoTableRow from './TodoTableRow';

function TodoTable(props) {
  const [todos, setTodos] = useState('');

  axios
    .get('http://localhost:4001/todo/all')
    .then((response) => {
      setTodos(response.data);
    })
    .catch((error) => console.error(`There was an error retrieving the book list: ${error}`));

  function getTodoWithId(id){
    return todos.filter(todo => todo.id === id)[0];
  }

  function setDone(x){
     if(!props.setDeleteMode){
         axios
             .put(`http://localhost:4001/todo/${getTodoWithId(x).done === 0 ? 'done' : 'unDone'}/${x}`);
     }else{
         axios
             .delete(`http://localhost:4001/todo/delete/${x}`);
     }
  }

  return (
      <div className={style.list}>
        <table>
          {todos ? todos.map((todo) => <TodoTableRow showDelete={props.setDeleteMode} onClick={setDone}>{todo}</TodoTableRow>) : ''}
        </table>
      </div>
  );
}

export default TodoTable;
