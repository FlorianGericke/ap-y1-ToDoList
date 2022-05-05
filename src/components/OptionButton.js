import React from 'react';
import {IconButton} from "@mui/material";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import Menu from "@mui/material/Menu";


const OptionButton = ({children,icon}) => {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <IconButton variant="contained" {...bindTrigger(popupState)}>
                        {icon}
                    </IconButton>
                    <Menu  {...bindMenu(popupState)}>
                        {children}
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
};

export default OptionButton;
