import React, {useEffect, useState} from 'react';
import style from './../../../style/css/ui/todos/TodoList.module.css'
import axios from "axios";
import TodoTableRow from './TodoTableRow';
import {todoApi} from "../../../requests/AxiosRequest";


function TodoTable(props) {
    const [todos, setTodos] = useState();

    function getTodoWithId(id) {
        return todos.filter(todo => todo.id === id)[0];
    }

    useEffect(() => {
        todoApi.getAll()
            .then(err => {
                setTodos(err.data);
            });
    }, [])


    function onClick(x) {
        if (!props.setDeleteMode) {
            if(getTodoWithId(x).done){
                todoApi.setUndone(x);
            }else{
                todoApi.setDone(x);
            }
        } else {
            todoApi.delete(x);
        }
        window.document.location.reload();
    }

    return (
        <div className={style.list}>
            <table>
                {todos ? todos.map((todo) => <TodoTableRow key={todo.id} showDelete={props.setDeleteMode}
                                                           onClick={onClick}>{todo}</TodoTableRow>) : ''}
            </table>
        </div>
    );
}

export default TodoTable;
