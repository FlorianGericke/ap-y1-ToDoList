import MyModal from "../../modal/MyModal";


const AddNewTodo = (props) =>{

    return(
        <MyModal backDropClick={props.backDropClick} >
            <form action={"/add"} method={"POST"}>
                <input type={"text"} name={'task'}/>
                <select name={"priority"} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <button type={"submit"}>Neues Todo anlegen</button>
            </form>
        </MyModal>
    );
}

export default AddNewTodo;
