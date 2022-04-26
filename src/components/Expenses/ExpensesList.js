import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = (props) => {
    let expensesContent = <p >No expenses found</p>
    console.log(props)
    if (props.expensesList.length === 0) {

        return <h2 className="expenses-list__fallback">Expenses not found</h2>
    }

    return (
        <ul className="expenses-list">
            {props.expensesList.map( item => 
            <ExpenseItem
                key={item.id} 
                title={item.title} 
                date={item.date} 
                amount={item.amount}/>)}
        </ul>
        )
}

export default ExpensesList;