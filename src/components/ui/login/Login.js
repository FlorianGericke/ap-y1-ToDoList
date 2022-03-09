import React, {useContext, useState} from 'react';
import style from './../../../style/css/ui/login/login.module.css';
import MyModal from "../../modal/MyModal";
import Button from "../../io/button/Button";
import UserContext from "../../../context/UserContext";

export default (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const ctx = useContext(UserContext);

    return (
        <MyModal>
            <div className={style.inputs}>
                <label htmlFor='username'><b>Username</b></label>
                <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} name="username"
                       placeholder="Username"/>
                <label htmlFor='password'><b>Password</b></label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password"
                       placeholder="Password"/>
            </div>
            <div className={style.buttonContainer}>
                <Button onClick={() => ctx.login(username, password)}>Login</Button>
                <Button onClick={() => ctx.register(username, password)}>Register</Button>
            </div>
        </MyModal>
    );
}
