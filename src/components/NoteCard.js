import React from 'react';
import {Avatar, Card, CardContent, CardHeader, IconButton, Typography} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import {blue, deepPurple, green, grey, pink, yellow} from "@mui/material/colors";

const NoteCard = ({note}) => {

    const category = (priority) => {
        switch (priority) {
            case 1:
                return 'Work';
            case 2:
                return 'Private';
            case 3:
                return 'Money';
            case 4:
                return 'Hobby';
            case 5:
                return 'Other';
            default:
                return `No category with ID ${note.priority}`;
        }

    }

    const popUpClickHandler = item =>{
        if(item === 'delete')
            console.log(`Delete todo with id ${note.id}`);
        if(item === 'edit')
            console.log(`Edit todo with id ${note.id}`);
    }

    return (
        <Card
            sx={{
                width: 350
            }}
            elevation={3}
        >
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            background: () => {
                                if (note.priority === 2)
                                    return yellow[700];

                                if (note.priority === 2)
                                    return green[500];

                                if (note.priority === 3)
                                    return pink[500];

                                if (note.priority === 4)
                                    return deepPurple[500];

                                if (note.priority === 5)
                                    return blue[500];

                                return grey[700];
                            }
                        }}
                    >
                        {category(note.priority).substring(0, 2)}
                    </Avatar>
                }
                title={'No Task Titel Implemented'}
                subheader={category(note.priority)}
                action={
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <IconButton variant="contained" {...bindTrigger(popupState)}>
                                    <MoreVertIcon/>
                                </IconButton>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={() => popUpClickHandler('delete')}>Delete</MenuItem>
                                    <MenuItem onClick={() => popUpClickHandler('edit')}>Edit</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                }
            />

            <CardContent>
                <Typography
                    variant={'body2'}
                    color={'text'}
                >
                    {note.task}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NoteCard;
