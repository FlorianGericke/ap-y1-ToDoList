import React from 'react';
import {Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {useNavigate} from "react-router-dom";

const pages = [
    {
        name: 'Home',
        icon: <HomeIcon color="primary" fontSize={'medium'}/>,
        path:  '/',
    },
    {
        name: 'Board',
        icon: <DashboardIcon color="primary" fontSize={'medium'}/>,
        path:  '/pages/board',
    },
    {
        name: 'Create',
        icon: <AddCircleOutlineIcon color="primary" fontSize={'medium'}/>,
        path:  '/pages/create',
    }
];

const MyDrawer = () => {
    const navigation = useNavigate();

    return (
        <Drawer
            variant='permanent'
            anchor="left"
            sx={{
                flexShrink: 0,
            }}
        >
            <Box
                sx={
                    {
                        position: 'relative',
                        top: (theme) => theme.mixins.toolbar.minHeight,
                        width: (theme) => theme.components.drawer.width,
                    }
                }
                marginTop={5}
            >
                <List>
                    {pages.map((page,index) =>
                        <ListItem
                            button
                            onClick={() => navigation(page.path)}
                            key={index}
                        >
                            <ListItemIcon>
                                {page.icon}
                            </ListItemIcon>
                            <ListItemText>
                                <Typography
                                    variant="h5"
                                    component={'h2'}
                                    color="primary"
                                >
                                    {page.name}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    )}
                </List>
            </Box>
        </Drawer>
    );
};

export default MyDrawer;
