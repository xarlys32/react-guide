import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    //FORMA 1º con onChange userInput
    /*const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })*/
    //FORMA 2º two way binding mas orientada a formularios para limpiar despues de enviar
    const [eventTitle, setEventTitle] = useState('')
    const [eventAmount, setEventAmount] = useState('')
    const [eventDate, setEventDate] = useState('')
    
    //No es necesario añadir parametro al onChange del input , React le parçsara el evento automaticamente
    const titleChangeEventHandler = (event) => {
        //usamos este metodo debido a que react esquedula los eventos y los estados y puede darse el caso de que no actualice con el ultimo estado correcto, 
        //de esta manera react garantiza que usara el ultimo snapshot correcto. Con el two databinding no usamos este aproach
        /*setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            };
        })*/
        setEventTitle(event.target.value)
    }
    const amountChangeEventHandler = (event) => {
        /*setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            };
        })*/
        setEventAmount(+event.target.value)
    }
    const dateChangeEventHandler = (event) => {
        /*setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            };
        })*/
        setEventDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        //console.log(userInput)
        const formValues = {
            title: eventTitle,
            amount: eventAmount,
            date: new Date(eventDate)
        };
        props.onSaveExpense(formValues);
        setEventTitle('');
        setEventAmount('');
        setEventDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={eventTitle} onChange={titleChangeEventHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={eventAmount} min='0.1' step='0.1' onChange={amountChangeEventHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={eventDate} onChange={dateChangeEventHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expenses</button>
            </div>
        </form>
    )
}

export default ExpenseForm;