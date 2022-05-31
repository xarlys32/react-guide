import { useState, useRef } from 'react'
const SimpleInput = (props) => {
  //Aproach 1º
  const [enteredName, setEnteredName] = useState();
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  //Approach 2º
  const nameRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    console.log(nameRef.current.value);
  } 
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} ref={nameRef}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
