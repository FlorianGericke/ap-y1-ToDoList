import React, {useState} from 'react';
import {Container, Paper, Box, Button} from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import InputTextIcon from "../components/InputTextIcon";
import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import useInputValidation from "../Hooks/useInputValidation";


const Login = () => {
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

    const submitHandler = (event, onRegisty) => {
        event.preventDefault();
        console.log(`${username} ${password} ${onRegisty}`);
    }

    return (
        <Container>
            <Paper
                sx={{
                    padding: 2,
                    width: 500,
                    margin: '0 auto',
                }}
            >
                <form
                    align="center"
                >
                    <Box>
                        <InputTextIcon
                            onChange={event => {
                                setUsername(event.target.value);
                                userNameChangedHandler(event);
                            }}
                            icon={<FaceIcon/>}
                            label={'Username'}
                            variant={'outlined'}
                            width={34}
                            onBlur={() => userNameBlurHandler(true)}
                            error={userNameError}
                        />
                    </Box>
                    <Box
                        marginTop={2}
                    >
                        <InputTextIcon
                            icon={<KeyIcon/>}
                            label="Password"
                            type="password"
                            variant={'outlined'}
                            width={34}
                            onChange={event => {
                                setPassword(event.target.value);
                                userPasswordChangedHandler(event);
                            }}
                            onBlur={() => userPasswordBlurHandler(true)}
                            error={userPasswordError}
                        />
                    </Box>
                    <Box
                        marginTop={2}
                    >
                        <Button
                            sx={{
                                marginRight: 6
                            }}
                            type={"submit"}
                            variant={'outlined'}
                            endIcon={<AppRegistrationIcon/>}
                            onClick={(event) => submitHandler(event, true)}
                            disabled={!userNameValid || !userPasswordValid}
                        >
                            Register
                        </Button>
                        <Button
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
