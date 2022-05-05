import React from 'react';
import {Avatar, Card, CardContent, CardHeader, Typography} from "@mui/material";
import {blue, deepPurple, green, grey, pink, yellow} from "@mui/material/colors";
import OptionButton from "./OptionButton";
import OptionButtonMenuItem from "./OptionButtonMenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const NoteCard = ({note, onMenuClick}) => {

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


    return (
        <Card
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
                    <OptionButton icon={<MoreVertIcon/>}>
                        <OptionButtonMenuItem
                            onClick={() => onMenuClick({option: 'delete', id: note.id})}
                        >
                            Delete
                        </OptionButtonMenuItem>
                        <OptionButtonMenuItem
                            onClick={() => onMenuClick({option: 'delete', id: note.id})}>
                            Edit
                        </OptionButtonMenuItem>
                    </OptionButton>
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
