import React from 'react';
import style from './../../../style/css/io/button/button.module.css';



const Button = (props) =>{
    return(
        <div className={style.myButton}  onClick={props.onClick} >
            <span><b>{props.children}</b></span>
        </div>
    );
}

export default Button;
