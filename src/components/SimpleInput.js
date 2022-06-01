import { useState, useRef } from 'react'
const SimpleInput = (props) => {
  const [nameIsValid, setNameIsValid] = useState(false)
  const [nameTouched, setNameTouched] = useState(false)
  //Aproach 1º
  const [enteredName, setEnteredName] = useState();
 
  //Approach 2º
  const nameRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true)
    
    setNameIsValid(true)
    console.log(enteredName);
    console.log(nameRef.current.value);
  } 

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (enteredName !== undefined || enteredName.trim() !== '') {
      setNameIsValid(true)
      return;
    }
  };

  const onBlurHandler = () => {
    setNameTouched(true)
    if (enteredName === undefined || enteredName.trim() === '') {
      setNameIsValid(false)
      return;
    }
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler} 
          ref={nameRef}
          onBlur={onBlurHandler}
        />
        {!nameIsValid && nameTouched && <p className='error-text'>Name cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
