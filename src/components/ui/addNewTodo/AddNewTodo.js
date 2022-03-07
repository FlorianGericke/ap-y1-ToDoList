import React from 'react';
import MyModal from "../../modal/MyModal";
import {useState} from "react";
import style from './../../../style/css/ui/addNewTodo/addNewTodo.module.css';
import Button from "../../io/button/Button";
import {todoApi} from "../../../requests/AxiosRequest";

const AddNewTodo = (props) => {
    const [insertTask, setTask] = useState()
    const [insertPriority, setPriority] = useState()

    function submitHandler() {
        todoApi.add(insertTask, insertPriority)
            .then(resolve => {
                console.log(resolve);
                props.backDropClick();
            })
            .catch(err => console.log('Error while setUndone', err));
    }

    return (
        <MyModal backDropClick={props.backDropClick}>
            <form id="addForm" name="addForm" className={style.addForm} onSubmit={submitHandler}>
                <div className={style.userInput}>
                    <label htmlFor="task"><b> Was musst du noch erledigen</b></label>
                    <br/>
                    <input type="text" name="task" onChange={(e) => setTask(e.target.value)}/>
                </div>
                <br/>
                <div className={style.userInput}>
                    <label htmlFor="priority"><b>Dringlichkeit</b></label>
                    <br/>
                    <select name="priority" onChange={(e) => setPriority(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <br/>
                <Button onClick={() => submitHandler()}>Hinzufügen</Button>
            </form>
        </MyModal>
    );
}

export default AddNewTodo;
