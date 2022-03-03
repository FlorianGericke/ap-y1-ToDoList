import React from 'react';
import MyModal from "../../modal/MyModal";
import {useState} from "react";

import style from './../../../style/css/ui/addNewTodo/addNewTodo.module.css';
import Button from "../../io/button/Button";
import axios from "axios";

const todoApi = axios.create({
    baseURL:'http://localhost:4001/todo/',
    withCredentials: true
});

const AddNewTodo = (props) =>{

    const [insertTask,setTask] = useState('')
    const [insertPriority,setPriority] = useState('')

    function submitHandler(e){
        // e.preventDefault();
        todoApi.post('/add',{
            task: insertTask,
            priority: insertPriority
        }).then(() =>{
            props.backDropClick();
        });
    }

    return(
        <MyModal backDropClick={props.backDropClick}>
            <form id="addForm" name="addForm" className={style.addForm} onSubmit={submitHandler}>
                <div className={style.userInput}>
                    <label htmlFor="task"><b> Was musst du noch erledigen</b></label>
                    <br/>
                    <input type="text" name="task" onChange={(e) => setTask(e.target.value)}/>
                </div>
                <br/>
                <div  className={style.userInput}>
                    <label htmlFor="priority"><b>Dringlichkeit</b></label>
                    <br/>
                    <select name="priority"  onChange={(e) => setPriority(e.target.value)} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <br/>
                {/*<button type="submit"  >Neues Todo anlegen</button>*/}
                <Button onClick={() => submitHandler()}>Hinzufügen</Button>
            </form>
        </MyModal>
    );
}

export default AddNewTodo;
