import React from 'react';
import {AppBar, Avatar, ListItem, ListItemIcon, Toolbar, Typography} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import {useNavigate} from "react-router-dom";
import OptionButtonMenuItem from "./OptionButtonMenuItem";
import OptionButton from "./OptionButton";

const MyAppBar = () => {
    const navigation = useNavigate();

    return (
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
                <OptionButton icon={<Avatar src='/avatar.png'/>}>
                    <OptionButtonMenuItem
                        onClick={() => {
                            navigation('/pages/login')
                        }}
                    >
                        <ListItemIcon>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItem>
                            Logout
                        </ListItem>
                    </OptionButtonMenuItem>
                    <OptionButtonMenuItem
                        onClick={() => {
                        }}>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItem>
                            Edit Profile
                        </ListItem>
                    </OptionButtonMenuItem>
                </OptionButton>
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;
