import React, {useState} from 'react';
import style from './../style/css/main.module.css'

import TodosOverText from "./todos/TodosOverText";
import Button from "./io/button/Button";
import TodoTable from "./todos/TodoTable";
import MyModal from "./modal/MyModal";


const Main = () => {
    const [modalVisibility, setModalVisibility] = useState(false);



    return(
        <React.Fragment>
            <TodosOverText />
            <div className={style.div}>
                <Button onClick={()=>setModalVisibility(true)} />
                {modalVisibility ? <MyModal backDropClick={()=>setModalVisibility(false)} >
                    <form>
                        <input type={"text"}/>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </form>
                </MyModal> : ''}

                <TodoTable />
            </div>
        </React.Fragment>
    );
}

export default Main;
