import MyModal from "../../modal/MyModal";
import axios from "axios";
import {useState} from "react";

import style from './../../../style/css/ui/addNewTodo/addNewTodo.module.css';
import Button from "../../io/button/Button";

const AddNewTodo = (props) =>{

    const [insertTask,setTask] = useState('')
    const [insertPriority,setPriority] = useState('')

    function submitHandler(e){
        // e.preventDefault();
        const get = {task: insertTask, priority: insertPriority};
        axios
            .post('http://localhost:4001/todo/add',get);
        props.backDropClick();
    }

    return(
        <MyModal backDropClick={props.backDropClick} >
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
