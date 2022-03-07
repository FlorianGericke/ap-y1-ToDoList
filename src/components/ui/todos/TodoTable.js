import React from 'react';
import style from './../../../style/css/ui/todos/TodoList.module.css'
import TodoTableRow from './TodoTableRow';
import {todoApi} from "../../../requests/AxiosRequest";

function TodoTable(props) {
    function getTodoWithId(id) {
        return props.todos.filter(todo => todo.id === id)[0];
    }

    function onClick(x) {
        if (!props.setDeleteMode) {
            if (getTodoWithId(x).done) {
                todoApi.setUndone(x)
                    .then(resolve => console.log(resolve))
                    .catch(err => console.log('Error while setUndone', err))
                    .finally(() => props.refresh());
            } else {
                todoApi.setDone(x)
                    .then(resolve => console.log(resolve))
                    .catch(err => console.log('Error while setDone', err))
                    .finally(() => props.refresh());
            }
        } else {
            todoApi.delete(x)
                .then(resolve => console.log(resolve))
                .catch(err => console.log('Error while delete', err))
                .finally(() => props.refresh());
        }
    }

    return (
        <div className={style.list}>
            <table>
                {props.todos ? Array.from(props.todos).map((todo) =>
                    <tbody key={todo.id}>
                    <TodoTableRow key={todo.id}
                                  showDelete={props.setDeleteMode}
                                  onClick={onClick}>{todo}</TodoTableRow>
                    </tbody>) : ""}
            </table>
        </div>
    );

}

export default TodoTable;
