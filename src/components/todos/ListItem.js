import React from 'react';
import style from './../../style/css/todos/ListItem.module.css'

const ListItem = (props) => {
  return (
    <li className={style.ListItem}>
      {props.children.task}
    </li>
  );
}

export default ListItem;
