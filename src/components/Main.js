import React from 'react';
import style from './../style/css/main.module.css'

import TodosOverText from "./todos/TodosOverText";
import Button from "./io/button/Button";
import TodoTable from "./todos/TodoTable";


const Main = () => {

    function onClick(){
        window.alert('add klicked')
    }

    return(
        <React.Fragment>
            <TodosOverText />
            <div className={style.div}>
                <Button onClick={onClick} />
                <TodoTable />
            </div>
        </React.Fragment>
    );
}

export default Main;
