import { useState } from 'react';
const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredValueTouched, setEnteredValueTouched] = useState(false);

    const enteredValueIsValid = validateValue(enteredValue);
    const hasErrors = !enteredValueIsValid && enteredValueTouched;

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };
    
    const inputBlurHandler = (event) => {
        setEnteredValueTouched(true);
    };

    const reset = () => {
        setEnteredValue('')
        setEnteredValueTouched(false)
    }

    return {
        value: enteredValue,
        isValid: enteredValueIsValid,
        hasErrors,
        valueChangeHandler: inputChangeHandler,
        valueBlurHandler: inputBlurHandler,
        reset
    }
}

export default useInput;