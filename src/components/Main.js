import React, {useState} from 'react';
import style from './../style/css/main.module.css'

import TodosOverText from "./todos/TodosOverText";
import Button from "./io/button/Button";
import TodoTable from "./todos/TodoTable";
import AddNewTodo from "./ui/addNewTodo/AddNewTodo";

const Main = () => {
    const [newTodoVisibility, setNewTodoVisibility] = useState(false);

    return(
        <React.Fragment>
            <TodosOverText />
            <div className={style.div}>
                <Button onClick={() => setNewTodoVisibility(true)} />
                {newTodoVisibility ? <AddNewTodo backDropClick={() => setNewTodoVisibility(false)} /> : ''}
                <TodoTable />
            </div>
        </React.Fragment>
    );
}
export default Main;
