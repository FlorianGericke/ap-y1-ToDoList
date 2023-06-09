import React, {useContext, useEffect, useState} from 'react';
import {Container, Paper, Box, Button, Typography} from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import InputTextIcon from "../components/InputTextIcon";
import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import useInputValidation from "../Hooks/useInputValidation";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import userContext from "../context/UserContext";


const Login = ({setChange}) => {
    const ctx = useContext(userContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const {
        isValid: userNameValid,
        hasError: userNameError,
        valueChangedHandler: userNameChangedHandler,
        setTouched: userNameBlurHandler,
        reset: usernNameReset
    } = useInputValidation(str => str.length >= 3);

    const {
        isValid: userPasswordValid,
        hasError: userPasswordError,
        valueChangedHandler: userPasswordChangedHandler,
        setTouched: userPasswordBlurHandler,
        reset: userPasswordNameReset
    } = useInputValidation(str => str.length >= 8);

    useEffect(() =>{
        ctx.login()
    },[])

    const submitHandler = (event, onRegisty) => {
        event.preventDefault();

        if (!onRegisty) {
            ctx.login(username, password);
        }
        if (onRegisty) {
            ctx.register(username, password);
        }
    }

    return (
        <Container>
            <Paper
                sx={{
                    padding: 2,
                    width: 500,
                    margin: '15vh auto',
                }}
                elevation={4}
            >
                <form
                    align="center"
                >
                    <AccountCircleIcon
                        sx={{
                            fontSize: '200px'
                        }}
                        color="primary"
                    />

                    <Typography
                        variant={"h4"}
                        color="primary"
                    >
                        Login or Sign Up
                    </Typography>

                    <Box
                        marginTop={4}
                    >
                        <InputTextIcon
                            onChange={event => {
                                setUsername(event.target.value);
                                userNameChangedHandler(event);
                            }}
                            icon={<FaceIcon/>}
                            rows={1}
                            label={'Username'}
                            id="Input-Username"
                            variant={'outlined'}
                            width={34}
                            onBlur={() => userNameBlurHandler(true)}
                            error={userNameError}
                            helperText={userNameError ? 'At least 3 Characters Required' : null}
                        />
                    </Box>
                    <Box
                        marginTop={2}
                    >
                        <InputTextIcon
                            icon={<KeyIcon/>}
                            label="Password"
                            type="password"
                            id="Input-Password"
                            variant={'outlined'}
                            rows={1}
                            width={34}
                            onChange={event => {
                                setPassword(event.target.value);
                                userPasswordChangedHandler(event);
                            }}
                            onBlur={() => userPasswordBlurHandler(true)}
                            error={userPasswordError}
                            helperText={userPasswordError ? 'At least 8 Characters Required' : null}
                        />
                    </Box>
                    <Box
                        marginTop={2}
                    >
                        <Button
                            sx={{
                                marginRight: 6
                            }}
                            id={'#button-Register'}
                            variant={'outlined'}
                            endIcon={<AppRegistrationIcon/>}
                            onClick={(event) => submitHandler(event, true)}
                            disabled={!userNameValid || !userPasswordValid}
                        >
                            Register
                        </Button>
                        <Button
                            id={'#button-LogIn'}
                            type={"submit"}
                            variant={'contained'}
                            endIcon={<LoginIcon/>}
                            onClick={(event) => submitHandler(event, false)}
                            disabled={!userNameValid || !userPasswordValid}
                        >
                            Log In
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
