import React, {useContext, useEffect, useState} from 'react';
import style from './../style/css/main.module.css'
import Button from "./io/button/Button";
import TodoTable from "./ui/todos/TodoTable";
import AddNewTodo from "./ui/addNewTodo/AddNewTodo";
import TodosOverText from "./ui/todos/TodosOverText";
import {todoApi} from "../requests/AxiosRequest";
import Login from "./ui/login/Login";
import UserContext from "../context/UserContext";

const Main = () => {
    const [newTodoVisibility, setNewTodoVisibility] = useState(false);
    const [DeleteMode, setDeleteMode] = useState(false);
    const [todos, setTodos] = useState();
    const ctx = useContext(UserContext)

    useEffect(() => {
        ctx.login('', '');
    }, []);

    useEffect(() => {
        todoApi.getAll()
            .then(err => {
                setTodos(err.data);
            });
    }, [newTodoVisibility, ctx.userName])

    const loginRender = () => {
        return (
            <Login/>
        );
    }

    const todoTableRender = () => {
        return (
            <>
                <TodosOverText userName={ctx.userName}/>
                <div className={style.logoutButton}>
                    <Button type="trigger" onClick={() => ctx.logout()}>Logout</Button>
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
            {ctx.loggedIn === false ? loginRender() : todoTableRender()}
        </>
    );
}

export default Main;
