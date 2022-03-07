import React, {useEffect, useState} from 'react';
import style from './../style/css/main.module.css'

import Button from "./io/button/Button";
import TodoTable from "./ui/todos/TodoTable";
import AddNewTodo from "./ui/addNewTodo/AddNewTodo";
import TodosOverText from "./ui/todos/TodosOverText";
import {authApi, todoApi} from "../requests/AxiosRequest";
import Login from "./ui/login/Login";

const Main = () => {
    const [newTodoVisibility, setNewTodoVisibility] = useState(false);
    const [DeleteMode, setDeleteMode] = useState(false);
    const [todos, setTodos] = useState();
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        todoApi.getAll()
            .then(err => {
                setTodos(err.data);
            });
    }, [newTodoVisibility,userName])

    const loginRender = () => {
        return (
            <Login setUserName={setUserName}  />
        );
    }

    const todoTableRender = () => {
        return (
            <>
                <TodosOverText userName={userName}/>
                <div className={style.logoutButton}>
                    <Button type="trigger" onClick={() => {
                        authApi.logout()
                            .then(resolve => {
                                console.log(resolve)
                            })
                            .catch(err => console.log('Error while login', err))
                            .finally(() => setUserName(null));
                    }}>Logout</Button>
                </div>
                <div className={style.div}>
                    <div className={style.buttonsDiv}>
                        <Button type="trigger" onClick={() => setNewTodoVisibility(true)}>Neues Todo</Button>
                        <div className={style.Spacer}/>
                        <Button type="toggle" toggle={setDeleteMode}>Lösch Modus</Button>
                    </div>
                    {newTodoVisibility ? <AddNewTodo backDropClick={() => {
                        setNewTodoVisibility(false);
                    }}/> : ''}
                    <TodoTable todos={todos} refresh={() => {
                        todoApi.getAll()
                            .then(err => {
                                setTodos(err.data);
                            });
                    }} todoChange={setNewTodoVisibility} setDeleteMode={DeleteMode}/>
                </div>
            </>
        );
    }

    return (
        <>
            {userName === null ? loginRender() : todoTableRender()}
        </>
    );
}
export default Main;
