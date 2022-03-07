import React, {useEffect, useState} from 'react';
import style from './../../../style/css/ui/login/login.module.css';
import MyModal from "../../modal/MyModal";
import Button from "../../io/button/Button";
import {authApi} from "../../../requests/AxiosRequest";

export default (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        authApi.login('', '')
            .then(resolve => {
                if (resolve.data.msg === 'Someone is currently logged in') {
                    props.setUserName(resolve.data.user);
                }
                console.log(resolve)
            })
            .catch(err => console.log('Error while login', err));
    }, []);

    const login = () => {
        authApi.login(username, password)
            .then(resolve => {
                if (resolve.data.msg === 'No suitable Accout for this credentials found') {
                    props.setUserName(null);
                } else {
                    props.setUserName(resolve.data.user);
                }
                console.log(resolve)
            })
            .catch(err => console.log('Error while login', err));
    }

    const register = () => {
        authApi.register(username, password)
            .then(resolve => {
                props.setUserName(resolve.data.user);
                console.log(resolve)
            })
            .catch(err => console.log('Error while login', err));
    }

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
                <Button onClick={() => login()}>Login</Button>
                <Button onClick={() => register()}>Register</Button>
            </div>
        </MyModal>
    );
}
