import React, {useState} from 'react';
import style from './../../../style/css/io/button/button.module.css';

const Button = (props) => {
    const [active, setActive] = useState(true);
    const [st, setSt] = useState(style.myTrigger);

    function toggleActive() {
        if (active) {
            setSt(style.toggle);
            props.toggle(true);
        } else {
            setSt(style.myTrigger);
            props.toggle(false);
        }
        setActive(!active);
    }

    return (
        <div id={props.id} className={st} onClick={props.type === "toggle" ? () => toggleActive() : props.onClick}>
            <span><b>{props.children}</b></span>
        </div>
    );
}

export default Button;
