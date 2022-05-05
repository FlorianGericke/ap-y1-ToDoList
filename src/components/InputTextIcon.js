import React, {useState} from 'react';
import {IconButton, InputAdornment, TextField} from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';


const InputTextIcon = (props) => {

    const
        {
            label,
            rows,
            icon,
            variant,
            type,
            width,
            helperText,
            onChange,
            onBlur,
            error,
            color
        } = props;


    const [information, setInformation] = useState({showPassword: false, icon: <VisibilityIcon/>});

    const passwordVisibilityToggle = () => {
        const insert = {...information};
        insert.showPassword = !insert.showPassword;
        insert.icon = insert.showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>;
        setInformation(insert);
    };

    const mode = () => {
        if (type !== 'password') {
            return type;
        } else {
            return information.showPassword === true ? 'text' : 'password';
        }
    }

    return (
        <TextField
            sx={{
                width: width + 'ch',
            }}

            error={error}
            color={color}
            label={label}
            type={mode()}
            onBlur={onBlur}
            rows={rows}
            multiline={(rows !== 1)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {icon}
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        {type === 'password' ?
                            <IconButton onClick={() => passwordVisibilityToggle()}>{information.icon}</IconButton> : ''}
                    </InputAdornment>
                )
            }}
            variant={variant}
            onChange={onChange}
            helperText={helperText}
        />
    );
};

export default InputTextIcon;
