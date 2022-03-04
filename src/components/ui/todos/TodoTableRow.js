import React from 'react';
import style from './../../../style/css/ui/todos/ListItem.module.css'

const logoUnDone = require('./../../../resources/done/0.png');
const logoDone = require('./../../../resources/done/1.png');
const deleteIcon = require('./../../../resources/icon/delete.png');

const TodoTableRow = (props) => {
    let color;

    switch (props.children.priority) {
        case 2:
            color = {color: '#a0d7a1'};
            break;

        case 3:
            color = {color: '#ecdcb3'};
            break;

        case 4:
            color = {color: '#f1a3a3'};
            break;

        default:
            color = {color: '#ffffff'};
    }

    function clicked() {
        props.onClick(props.children.id)
    }

    return (
        <tr className={style.tableRow} onClick={clicked} style={color}>
            <td>
                {props.children.task}
            </td>
            <td>
                <img className={style.imageIcon} src={props.children.done ? logoDone : logoUnDone} alt={''}/>
            </td>
            {props.showDelete ? <img className={style.deleteIcon} src={deleteIcon} alt={''}/> : ''}
        </tr>
    );
}

export default TodoTableRow;
