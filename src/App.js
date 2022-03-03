import React from 'react';
import Main from "./components/Main";
import axios from 'axios';

const authApi = axios.create({
    baseURL:'http://localhost:4001/auth/',
    withCredentials: true
});

const login = () =>{
    authApi.post('/login',{
        username: "Florian",
        password: "123"
    }).then(res => {console.log(res)});
}


function App() {
    login();
    return (<Main/>);
}

export default App;
