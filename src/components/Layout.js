import React from 'react';
import {
    AppBar, Avatar,
    Box, Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';


const Layout = ({children}) => {
    const navigation = useNavigate();
    return (
        <Box
        >
            <AppBar
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                position={'fixed'}
            >
                <Toolbar
                >
                    <Typography
                        sx={{
                            flexGrow: 1
                        }}
                        variant={'h4'}
                    >
                        Meterial Notes
                    </Typography>
                    <Typography
                        variant={'h6'}
                    >
                        Florian
                    </Typography>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <IconButton variant="contained" {...bindTrigger(popupState)}>
                                    <Avatar
                                        src='/avatar.png'
                                    />
                                </IconButton>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem
                                        onClick={() => {}
                                    }>
                                        <ListItemIcon>
                                            <LogoutIcon/>
                                        </ListItemIcon>
                                        <ListItem>
                                            Logout
                                        </ListItem>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {}
                                        }>
                                        <ListItemIcon>
                                            <SettingsIcon/>
                                        </ListItemIcon>
                                        <ListItem>
                                            Edit Profile
                                        </ListItem>
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                </Toolbar>
            </AppBar>
            <Drawer
                variant='permanent'
                anchor="left"
                sx={{
                    flexShrink: 0,
                }}

            >
                <Box
                    width={'240px'}
                    marginTop={5}
                    sx={
                        {
                            position: 'relative',
                            top: (theme) => theme.mixins.toolbar.minHeight,
                        }
                    }
                >
                    <List>
                        <ListItem
                            button
                            onClick={() => navigation('/pages/home')}

                        >
                            <ListItemIcon>
                                <HomeIcon
                                    color="primary"
                                    fontSize={'medium'}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography
                                    variant="h5"
                                    component={'h2'}
                                    color="primary"
                                >
                                    Home
                                </Typography>
                            </ListItemText>
                        </ListItem>

                        <ListItem
                            button
                            onClick={() => navigation('/pages/board')}
                        >
                            <ListItemIcon>
                                <DashboardIcon
                                    color="primary"
                                    fontSize={'medium'}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography
                                    variant="h5"
                                    component={'h2'}
                                    color="primary"
                                >
                                    Board
                                </Typography>
                            </ListItemText>
                        </ListItem>

                        <ListItem
                            button
                            onClick={() => navigation('/pages/create')}
                        >
                            <ListItemIcon>
                                <AddCircleOutlineIcon
                                    color="primary"
                                    fontSize={'medium'}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography
                                    variant="h5"
                                    component={'h2'}
                                    color="primary"
                                >
                                    Create
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box
                sx={{
                    position: 'relative',
                    left: '240px',
                    top: (theme) => theme.mixins.toolbar.minHeight,
                    width: `calc(100% - 240px)`
                }}
                marginTop={5}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
