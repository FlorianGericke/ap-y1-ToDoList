import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NodeBoard from "./pages/NodeBoard";
import Layout from "./components/Layout";


function App() {
    return (
        <BrowserRouter>
        <Layout>
                <Routes>
                    <Route path={'/pages/login'} element={<Login/>}/>
                    <Route path={'/pages/create'} element={<Create/>}/>
                    <Route path={'/pages/Board'} element={<NodeBoard/>}/>
                    <Route path={'/'} element={<Home/>}/>
                </Routes>
        </Layout>
        </BrowserRouter>
    );
}

export default App;
