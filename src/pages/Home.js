import React from 'react';
import {Container, Typography} from "@mui/material";

const Home = () => {
    return (
        <Container>
            <Typography
                variant={'h4'}
                component={'h2'}
                color={'primary'}
            >
                Home Page
            </Typography>
        </Container>
    );
};

export default Home;
