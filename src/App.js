import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NodeBoard from "./pages/NodeBoard";
import Layout from "./components/Layout";
import {createTheme, ThemeProvider} from "@mui/material";
import {authApi} from "./http/useAxios";

const theme = createTheme({
    components:{
        drawer:{
            width: '240px'
        }
    }
});

function App() {

    authApi.login( "TestUser","TestPassword").then();

    return (
        <ThemeProvider theme={theme} >
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path={'/pages/login'} element={<Login/>}/>
                        <Route path={'/pages/create'} element={<Create/>}/>
                        <Route path={'/pages/Board'} element={<NodeBoard />}/>
                        <Route path={'/'} element={  <Home/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
