import React from 'react';

const UserContext = React.createContext();

export default (props) =>{
    let state = {
        userLoggedIn: false,
        usr: 'username'
    };

    return(
       <UserContext.Provider >
           {props.children}
       </UserContext.Provider>
    );
}