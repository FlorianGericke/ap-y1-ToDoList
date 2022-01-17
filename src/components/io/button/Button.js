import React, {useState} from 'react';
import style from './../../style/css/io/button/button.module.css'

const Button = (props) =>{
    return(
        <div className={style.myButton} >
            <p>Click me</p>
        </div>
    );
}

export default Button;
