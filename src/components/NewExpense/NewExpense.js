import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEnable, setIsEnable] = useState(false)
    const saveExpenseHandler = (enteredExpenseData) => {
        const expensesData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expensesData);
    };

    const enableFormHandler = () => {
        setIsEnable(true)
    }
    return (
        <div className='new-expense'>
            { !isEnable ? <button onClick={enableFormHandler}>Add Expense</button> : <ExpenseForm onSaveExpense={saveExpenseHandler}/> }
            
        </div>
    )
}

export default NewExpense;