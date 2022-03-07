import React from 'react';
import style from '../../../style/css/ui/todos/TodoOvertext.module.css';

function TodosOverText(props) {
  return (
    <section className={style.summery}>
      <h1>
        Wilkommen auf {props.userName}s To-do liste
      </h1>
    </section>
  );
}

export default TodosOverText;
