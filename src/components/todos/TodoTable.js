import React, {useEffect, useState} from 'react';
import style from './../../style/css/todos/TodoList.module.css'
import axios from "axios";
import TodoTableRow from './TodoTableRow';

const todoApi = axios.create({
  baseURL:'http://localhost:4001/todo/',
  withCredentials: true
});







function TodoTable(props) {
    const [todos, setTodos] = useState();

    function getTodoWithId(id){
        return todos.filter(todo => todo.id === id)[0];
    }

    useEffect(() =>{todoApi.get('/all')
        .then( err =>{
            console.log(err);
            setTodos(err.data);
        });},[])


  function onClick(x){
     if(!props.setDeleteMode){
         todoApi.put(`/${getTodoWithId(x).done === false ? 'done' : 'unDone'}/${x}`);
     }else{
         todoApi.delete(`http://localhost:4001/todo/delete/${x}`);
     }
      window.document.location.reload();
  }

  return (
      <div className={style.list}>
        <table>
          {todos ? todos.map((todo) => <TodoTableRow showDelete={props.setDeleteMode} onClick={onClick}>{todo}</TodoTableRow>) : ''}
        </table>
      </div>
  );
}

export default TodoTable;
