import React, {useEffect, useState} from 'react';
import {Box, Container, Typography} from "@mui/material";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import NoteCard from "../components/NoteCard";
import {todoApi} from "../http/useAxios";

const NodeBoard = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        todoApi.getAll().then(res => setNotes(res.data))
    }, [])

    const popUpClickHandler = item => {
        if (item.option === 'delete')
            todoApi.delete(item.id).then(() => {
                document.location.reload();
            })
        if (item.option === 'edit')
            console.log(`Edit todo with id ${item.id}`);
    }

    return (
        <Container>
            <Typography
                variant="h4"
                component={'h2'}
                color="primary"
            >
                Note Board
            </Typography>

            <Box
                marginTop={2}
            >
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry
                        columnsCount={3}
                        gutter="10px"
                    >
                        {notes.map(note => <NoteCard note={note} key={note.id} onMenuClick={popUpClickHandler}/>)}
                    </Masonry>
                </ResponsiveMasonry>
            </Box>
        </Container>
    );
};

export default NodeBoard;
