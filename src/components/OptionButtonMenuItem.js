import React from 'react';
import MenuItem from "@mui/material/MenuItem";

const OptionButtonMenuItem = ({onClick, children}) => {
    return (
        <MenuItem onClick={onClick}>{children}</MenuItem>
    );
};

export default OptionButtonMenuItem;
