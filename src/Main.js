import React, {useContext} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import NodeBoard from "./pages/NodeBoard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {createTheme, ThemeProvider} from "@mui/material";
import UserContext from "./context/UserContext";
import {blue, purple, teal} from "@mui/material/colors";

const theme = createTheme({
    palette:{
        // primary: teal,
        // secondary: purple,
    },
    components: {
        drawer: {
            width: '240px'
        }
    }
});


const Main = () => {
    const ctx = useContext(UserContext);

    return (
        <ThemeProvider theme={theme}>
            {ctx.loggedIn ?
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path={'/pages/create'} element={<Create/>}/>
                            <Route path={'/pages/Board'} element={<NodeBoard/>}/>
                            <Route path={'/'} element={<Home/>}/>
                        </Routes>
                    </Layout>
                </BrowserRouter> :
                <Login/>
            }
        </ThemeProvider>
    );
};

export default Main;
