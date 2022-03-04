import React from 'react';
import Main from "./components/Main";
import {authApi} from "./requests/AxiosRequest";

function App() {
    authApi.login('Florian','123')
    return (<Main/>);
}

export default App;
