import React, {useState} from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import InputTextIcon from "../components/InputTextIcon";
import CategoryIcon from '@mui/icons-material/Category';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useInputValidation from "../Hooks/useInputValidation";

const Create = () => {
    const [task,setTask] = useState('');
    const [category,setCategory] = useState('work');

    const {
        isValid: taskValid,
        hasError: taskError,
        valueChangedHandler: taskChangedHandler,
        setTouched: taskBlurHandler,
        reset: taskReset
    } = useInputValidation(str => str !== '');


    const submitHandler = event => {
        event.preventDefault();
        console.log(`${task} ${category}`);
    };

    return (
        <Container>
            <Typography
                variant={'h4'}
                component={'h2'}
                color={'primary'}
            >
                Create Task
            </Typography>
            <Box
                marginTop={3}
            >
                <form
                    onSubmit={event => submitHandler(event)}
                >
                    <InputTextIcon
                        icon={<AssignmentIcon/>}
                        label={'Task'}
                        variant={'outlined'}
                        width={34}
                        onChange={event => {
                            taskChangedHandler(event)
                            setTask(event.target.value)
                        }}
                        error={taskError}
                        onBlur={taskBlurHandler}
                        helperText={taskError ? 'Task can not be empty': null}
                    />
                    <Box
                        marginTop={2}
                    >
                        <FormControl>
                            <FormLabel
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <CategoryIcon
                                    sx={{
                                        marginRight: 1,
                                    }}
                                    color="primary"
                                />
                                <Typography
                                    color={'primary'}
                                    marginBottom={1}
                                >
                                    Category
                                </Typography>
                            </FormLabel>
                            <RadioGroup
                                value={category}
                                onChange={event => setCategory(event.target.value)}
                            >
                                <FormControlLabel
                                    control={<Radio/>}
                                    label={'Work'}
                                    value={'work'}
                                />
                                <FormControlLabel
                                    control={<Radio/>}
                                    label={'Private'}
                                    value={'private'}
                                />
                                <FormControlLabel
                                    control={<Radio/>}
                                    label={'Money'}
                                    value={'money'}
                                />
                                <FormControlLabel
                                    control={<Radio/>}
                                    label={'Hobby'}
                                    value={'hobby'}
                                />
                                <FormControlLabel
                                    control={<Radio/>}
                                    label={'Other'}
                                    value={'other'}
                                />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box
                        marginTop={2}
                    >
                        <Button
                            sx={{
                                position: 'relative',
                                left: '15%'
                            }}
                            type={"submit"}
                            variant="contained"
                            endIcon={<ArrowForwardIosIcon/>}
                            disabled={!taskValid}
                        >Create</Button>
                    </Box>
                </form>
            </Box>
        </Container>
    )
        ;
};

export default Create;
