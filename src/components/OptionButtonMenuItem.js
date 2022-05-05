import React from 'react';
import MenuItem from "@mui/material/MenuItem";

const OptionButtonMenuItem = ({onClick, children, id}) => {
    return (
        <MenuItem id={id} onClick={onClick}>{children}</MenuItem>
    );
};

export default OptionButtonMenuItem;
