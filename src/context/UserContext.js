import React, {useState} from 'react';
import {authApi} from "../requests/AxiosRequest";

const UserContext = React.createContext({
    loggedIn: false,
    userName: null,
    register: (username, password) => {
    },
    login: (username, password) => {
    },
    logout: () => {
    },
});

export const UserContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn,] = useState(false);
    const [userName, setUserName] = useState(null);

    const register = (username, password) => {
        authApi.register(username, password)
            .then(resolve => {
                setUserName(resolve.data.user);
                setIsLoggedIn(true);
                console.log(resolve)
            })
            .catch(err => console.log('Error while login', err));
    }

    const login = (username, password) => {
        authApi.login(username, password)
            .then(resolve => {
                if (resolve.data.msg === 'No suitable Accout for this credentials found') {
                    setUserName(null);
                    setIsLoggedIn(false);
                } else if (resolve.data.msg === 'Someone is currently logged in') {
                    setUserName(resolve.data.user);
                    setIsLoggedIn(true);
                } else {
                    setUserName(username);
                    setIsLoggedIn(true);
                }
                console.log(resolve)
            })
            .catch(err => console.log('Error while login', err));
    }

    const logout = () => {
        authApi.logout()
            .then(resolve => {
                setUserName(null)
                setIsLoggedIn(false);
                console.log(resolve)
            })
            .catch(err => console.log('Error while login', err));
    }

    return (
        <UserContext.Provider value={{
            loggedIn: isLoggedIn,
            userName: userName,
            register: register,
            login: login,
            logout: logout,
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;
