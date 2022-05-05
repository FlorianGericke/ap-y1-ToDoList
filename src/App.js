import React, {useContext} from 'react';
import {UserContextProvider} from "./context/UserContext";
import Main from "./Main";



function App() {
    return (
        <UserContextProvider>
            <Main/>
        </UserContextProvider>

    );
}

export default App;
