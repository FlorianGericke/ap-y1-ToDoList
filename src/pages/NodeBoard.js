import React from 'react';
import {Box, Typography} from "@mui/material";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import NoteCard from "../components/NoteCard";


const note = {
    id: 1,
    task: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    priority: 2,
    done: false
}
const notes = [
    {
        id: 1,
        task: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        priority: 1,
        done: false
    },
    {
        id: 2,
        task: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
        priority: 2,
        done: false
    },
    {
        id: 3,
        task: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,',
        priority: 3,
        done: false
    },
    {
        id: 4,
        task: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
        priority: 4,
        done: false
    },
    {
        id: 5,
        task: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
        priority: 5,
        done: false
    },
    {
        id: 6,
        task: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,',
        priority: 6,
        done: false
    },
]


const NodeBoard = () => {

    const popUpClickHandler = item =>{
        if(item.option === 'delete')
            console.log(`Delete todo with id ${item.id}`);
        if(item.option === 'edit')
            console.log(`Edit todo with id ${item.id}`);
    }

    return (
        <Box>
            <Typography
                variant="h4"
                component={'h2'}
                color="primary"
            >
                Note Board
            </Typography>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}

            >
                <Masonry
                    columnsCount={3}
                    gutter="10px"
                >
                    {notes.map(note => <NoteCard note={note} key={note.id} onMenuClick={popUpClickHandler} />)}
                </Masonry>
            </ResponsiveMasonry>
        </Box>
    );
};

export default NodeBoard;
