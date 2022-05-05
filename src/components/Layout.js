import React from 'react';
import {Box,} from "@mui/material";
import {useLocation} from "react-router-dom";
import MyAppBar from "./MyAppBar";
import MyDrawer from "./MyDrawer";

const Layout = ({children}) => {
    const location = useLocation();

    const style = {
        page: {
            position: 'relative',
            width: `calc(100% - 240px)`,
            paddingTop: 5,
            top: (theme) => theme.mixins.toolbar.minHeight,
            left: () => location.pathname === '/pages/login' ? '' : '240px',
            margin: () => location.pathname === '/pages/login' ? '0 auto' : ''
        }
    }

    return (
        <Box
            sx={{
                backgroundColor: '#f6f6f6',
                height: '100vh',
                overflow: 'auto',
            }}
        >
            {location.pathname !== '/pages/login' && <Box>
                <MyAppBar/>
                <MyDrawer/>
            </Box>}

            <Box
                sx={style.page}

            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
