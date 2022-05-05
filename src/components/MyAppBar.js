import React, {useContext} from 'react';
import {AppBar, Avatar, ListItem, ListItemIcon, Toolbar, Typography} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import OptionButtonMenuItem from "./OptionButtonMenuItem";
import OptionButton from "./OptionButton";
import UserContext from "../context/UserContext";

const MyAppBar = () => {
    const ctx = useContext(UserContext);
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
                    id={'Typography-UserLoggedIn'}
                >
                    {ctx.userName}
                </Typography>
                <OptionButton id={'Avatar-Button'}  icon={<Avatar src='/avatar.png'/>}>
                    <OptionButtonMenuItem
                        id={'Avatar-Button-Logout'}

                        onClick={() => {
                            ctx.logout();
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
