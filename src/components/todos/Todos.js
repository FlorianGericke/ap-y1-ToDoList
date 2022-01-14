import React from 'react';
import TodosOverText from './TodosOverText';
import TodoList from './TodoList';


const Todos = () => {
    return(
        <React.Fragment>
            <TodosOverText/>
            <TodoList/>
        </React.Fragment>
    );
};

export default Todos;
