import React, {useEffect, useState} from 'react';
import style from './../style/css/main.module.css'

import Button from "./io/button/Button";
import TodoTable from "./ui/todos/TodoTable";
import AddNewTodo from "./ui/addNewTodo/AddNewTodo";
import TodosOverText from "./ui/todos/TodosOverText";
import {authApi, todoApi} from "../requests/AxiosRequest";


const Main = () => {
    const [newTodoVisibility, setNewTodoVisibility] = useState(false);
    const [DeleteMode, setDeleteMode] = useState(false);
    const [todos, setTodos] = useState();

    // Login only with page reload
    useEffect(() => {
        authApi.login('Florian','123')
            .then(resolve => console.log(resolve))
            .catch(err => console.log('Error while login',err));
    }, []);

    useEffect(() => {
        todoApi.getAll()
            .then(err => {
                setTodos(err.data);
            });
    }, [newTodoVisibility])

    return (
        <>
            <TodosOverText/>
            <div className={style.div}>
                <div className={style.buttonsDiv}>
                    <Button type="trigger" onClick={() => setNewTodoVisibility(true)}>Neues Todo</Button>
                    <div className={style.Spacer}/>
                    <Button type="toggle" toggle={setDeleteMode}>Lösch Modus</Button>
                </div>
                {newTodoVisibility ? <AddNewTodo backDropClick={() => {
                    setNewTodoVisibility(false);
                }}/> : ''}
                <TodoTable todos={todos} refresh={() =>{
                    todoApi.getAll()
                        .then(err => {
                            setTodos(err.data);
                        });
                }}  todoChange={setNewTodoVisibility} setDeleteMode={DeleteMode}/>
            </div>
        </>
    );
}
export default Main;
