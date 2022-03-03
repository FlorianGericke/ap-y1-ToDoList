import React, {useState} from 'react';
import style from './../style/css/main.module.css'

import Button from "./io/button/Button";
import TodoTable from "./todos/TodoTable";
import AddNewTodo from "./ui/addNewTodo/AddNewTodo";
import TodosOverText from "./todos/TodosOverText";


const Main = () => {
    const [newTodoVisibility, setNewTodoVisibility] = useState(false);
    const [DeleteMode, setDeleteMode] = useState(false);
    const [render, rendernew] = useState();



    return(
        <>
            <TodosOverText/>
            <div className={style.div}>
                <div className={style.buttonsDiv}>
                    <Button type="trigger" onClick={() => setNewTodoVisibility(true)}>Neues Todo</Button>
                    <div className={style.Spacer}/>
                    <Button type="toggle" toggle={setDeleteMode} >Lösch Modus</Button>
                </div>
                {newTodoVisibility ? <AddNewTodo backDropClick={() => {
                    setNewTodoVisibility(false);
                    window.location.reload();
                }} /> : ''}
                <TodoTable setDeleteMode={DeleteMode} />
            </div>
        </>
    );
}
export default Main;
