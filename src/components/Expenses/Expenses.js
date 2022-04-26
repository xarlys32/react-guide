import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";


function Expenses(props) {
    const [yearSelected, setYearSelected] = useState('2021')
    const changeFilterYear = (year) => {
        setYearSelected(year)
    }
    const expensesFiltered = props.expenses.filter(item => {return item.date.getFullYear().toString() === yearSelected})
    /**
      let expensesContent = <p >No expenses found</p>
    if (expensesFiltered.length > 0) {
        expensesContent = expensesFiltered.map( item => 
            <ExpenseItem
                key={item.id} 
                title={item.title} 
                date={item.date} 
                amount={item.amount}/>
        )
    }
     */
    return (
        <Card className="expenses">
            <ExpensesFilter year={yearSelected} onChangeFilter={changeFilterYear}></ExpensesFilter>
            <ExpensesChart expenses={expensesFiltered} />
            <ExpensesList expensesList={expensesFiltered} />
        </Card>
    )
}
export default Expenses;