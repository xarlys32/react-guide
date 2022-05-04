import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../UI/Input/Input';

//Reducer are focused in work with states thatcan be complex or are  related with others and may fail for not being updated the last snapshot
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@')};
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {value: '', isValid: false};
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.trim().length > 6};
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 6};
  }
  return {value: '', isValid: false};
}

const Login = (props) => {
  //Use with effect but not for reducer
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: false});
  const [passState, dispatchPass] = useReducer(passwordReducer, {value: '', isValid: false});

  
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //Only is executed at the begining or when one of it's dependencies has been updated
  //We can use effect and reducer together because they are different things, one is for states(reducer) and the other is for only be executed the first time that the component is render or only when a dependency const is updated
  /*useEffect(() => {
    const timerHandler = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
      console.log('Timeeeee')
    }, 800);
    return (() => {
      clearTimeout(timerHandler);
    })
  }, [enteredEmail, enteredPassword]);*/

  //Deconstructing array where that property it's going to be assignto a new var. We use that for not use effect everytime that is valid
  const { isValid: emailIsValid} = emailState;
  const { isValid: passwordIsValid } = passState;
  //Use effect is gonna run the first time and when mail and pass are updated
  useEffect(() => {
    const timerHandler = setTimeout(() => {
      setFormIsValid(
        emailState.isValid && passState.isValid
      );
    }, 800);
    //clean up functions run to save for leaks of memory and do it before the own useEffect functions runs and when the components it's gonna be unmouunted
    return (() => {
      clearTimeout(timerHandler);
    })
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value); 
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
    //If use useEffect this lines are not necesary
    setFormIsValid(
      event.target.value.includes('@') && passState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPass({type: 'USER_INPUT', val: event.target.value})
    //If use useEffect this lines are not necesary
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    //useEffect
    //setEmailIsValid(enteredEmail.includes('@'));
    //setEmailIsValid(emailState.isValid);
    //useReducer
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPass({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref={emailInputRef}
          id="email" 
          label="Email" 
          type="email" 
          isValid={emailIsValid} 
          value={emailState.value} 
          onChange={emailChangeHandler} 
          onBlur={validateEmailHandler} />

        <Input 
          ref={passwordInputRef}
          id="password" 
          label="Password" 
          type="password" 
          isValid={passwordIsValid} 
          value={passState.value} 
          onChange={passwordChangeHandler} 
          onBlur={validatePasswordHandler} />  
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
