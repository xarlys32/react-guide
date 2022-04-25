import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseHandler = (enteredExpenseData) => {
        const expensesData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expensesData);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseHandler}/>
        </div>
    )
}

export default NewExpense;