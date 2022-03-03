import React  from 'react';
import style from './../../style/css/modal/Mymodal.module.css'
import {Fragment} from "react";
import {createPortal} from "react-dom";

const BackDrop = (props) => {
  return(
      <div onClick={props.backDropClick} className={style.BackDrop}/>
  );
}

const Panel = (props) => {
  return(
      <div className={style.Panel}> {props.children} </div>
  );
}

const MyModal = (props) =>{
  return createPortal(
    <Fragment>
      <BackDrop backDropClick={props.backDropClick}/>
      <Panel>{props.children}</Panel>
    </Fragment>,
      document.getElementById('portal')
  );
}

export default MyModal;
