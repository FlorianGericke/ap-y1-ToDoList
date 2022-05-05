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
import {todoApi} from "../http/useAxios";
import {useNavigate} from "react-router-dom";


const categorys = [
    {
        label: 'Work',
        value: 1,
    },
    {
        label: 'Private',
        value: 2,
    },
    {
        label: 'Money',
        value: 3,
    },
    {
        label: 'Hobby',
        value: 4,
    },
    {
        label: 'Other',
        value: 5,
    },
]

const Create = () => {
    const navigate = useNavigate();
    const [task,setTask] = useState('');
    const [category,setCategory] = useState(1);

    const {
        isValid: taskValid,
        hasError: taskError,
        valueChangedHandler: taskChangedHandler,
        setTouched: taskBlurHandler,
        reset: taskReset
    } = useInputValidation(str => str !== '');


    const submitHandler = event => {
        event.preventDefault();
        todoApi.add(task,category).then(() => {
            navigate('/pages/board');
        });
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
                        width={100}
                        rows={5}
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
                                {categorys.map((category,index) =>  <FormControlLabel
                                    key={index}
                                    control={<Radio/>}
                                    label={category.label}
                                    value={category.value}
                                /> )}
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
