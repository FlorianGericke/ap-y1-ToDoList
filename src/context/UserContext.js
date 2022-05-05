import React, {createContext, useState} from 'react';
import {authApi} from "../http/useAxios";
import resolve from "resolve";

const UserContext = createContext({
    loggedIn: false,
    userName: null,
    register: (username, password) => {},
    login: (username, password) => {},
    logout: () => {},
});

export const UserContextProvider = ({children}) =>{
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState(null);

    const register = (userName, password) => {
        authApi.register(userName, password)
            .then(resolve => {
                setUserName(resolve.data.user);
                setLoggedIn(true);
                console.log(resolve)
            })
            .catch(err => console.log('Error while login', err));

    }



    const login = (userName, password) => {
        if(userName && password){
            authApi.login(userName, password)
                .then(resolve => {
                    if (resolve.data.msg === 'No suitable Accout for this credentials found') {
                        setUserName(null);
                        setLoggedIn(false);
                    } else if (resolve.data.msg === 'Someone is currently logged in') {
                        setUserName(resolve.data.user);
                        setLoggedIn(true);
                    } else {
                        setUserName(userName);
                        setLoggedIn(true);
                    }
                    console.log(resolve)
                })
                .catch(err => console.log('Error while login', err));
        }else{
            authApi.login('userName', 'password').then(resolve =>{
                if (resolve.data.msg === 'Someone is currently logged in') {
                    setUserName(resolve.data.user);
                    setLoggedIn(true);
                }
            })
        }


    }

    const logout = () => {
        authApi.logout()
            .then(resolve => {
                setUserName(null)
                setLoggedIn(false);
                console.log(resolve)
            })
            .catch(err => console.log('Error while login', err));

    }

    return(
        <UserContext.Provider value={{
            loggedIn,
            userName,
            register,
            login,
            logout
        }}>{children}</UserContext.Provider>
    );

}

export default UserContext;