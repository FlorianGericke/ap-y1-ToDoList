import React, {useContext} from 'react';
import {Container, Typography} from "@mui/material";
import userContext from "../context/UserContext";






const Home = () => {
    const userCTX = useContext(userContext);
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
