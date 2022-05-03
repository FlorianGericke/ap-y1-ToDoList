import React, {useState} from 'react';

const useinputValidation = validationFunction => {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);

    const isValid = validationFunction(value);
    const hasError = touched && !isValid;

    const valueChangedHandler = event =>{
        setValue(event.target.value);
    }

    const reset = () =>{
        setValue('');
        setTouched(false)
    }

    return {
        isValid,
        hasError,
        setTouched,
        valueChangedHandler,
        reset
    };
};

export default useinputValidation;
