import React from 'react';
import Main from "./components/Main";
import {UserContextProvider} from "./context/UserContext";

function App() {
    return (
        <UserContextProvider>
            <Main/>
        </UserContextProvider>
    );
}

export default App;
