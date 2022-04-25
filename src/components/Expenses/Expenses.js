import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
    const expenses = props.expenses;
    const [yearSelected, setYearSelected] = useState('2020')
    const changeFilterYear = (year) => {
        setYearSelected(year)
        console.log(year)
    }
    return (
        <Card className="expenses">
            <ExpensesFilter year={yearSelected} onChangeFilter={changeFilterYear}></ExpensesFilter>
            <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}></ExpenseItem>
            <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}></ExpenseItem>
            <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}></ExpenseItem>
        </Card>
    )
}
export default Expenses;