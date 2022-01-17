import MyModal from "../../modal/MyModal";
import axios from "axios";
import {useState} from "react";

const AddNewTodo = (props) =>{

    const [insertTask,setTask] = useState('')
    const [insertPriority,setPriority] = useState('')

    function submitHandler(e){
        e.preventDefault();
        const get = {task: insertTask, priority: insertPriority};
        axios
            .post('http://localhost:4001/todo/add',get);
        props.backDropClick();
    }

    return(
        <MyModal backDropClick={props.backDropClick} >
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => setTask(e.target.value)}/>
                <select name="priority" onChange={(e) => setPriority(e.target.value)} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <button type="submit"  >Neues Todo anlegen</button>
            </form>
        </MyModal>
    );
}

export default AddNewTodo;
