import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";

const mock_expenses = [
  { id: 1, title: 'Car Insurance', amount: 294.75, date: new Date(2021,2,28) },
  { id: 2, title: 'Nintendo Switch', amount: 299.50, date: new Date(2021,4,2) },
  { id: 3, title: 'Smart TV OLED', amount: 498.25, date: new Date(2021,5,11) },
]

function App() {

  const [expensesList, setExpensesList] = useState(mock_expenses)
  const hello = () => {
    return "oooW MEEN"
  };

  const addExpenseHelper = (expenseData) => {
    setExpensesList((prevExpenses) => {
      return [...prevExpenses, expenseData]
    })
  }
  
  // Only can return one thing, for that you must encapsulate it in a div
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHelper}/>
      <Expenses expenses={expensesList}></Expenses>
    </div>
  );
  // Other alternative instead of JSX
  /*
  import React from 'react'
  return (
    React.createElement('div',
    {}, 
    React.createElement('h2', {}, "Let's get started!"), //{} are the atributes of the tag
    React.createElement(Expenses, {expenses: expenses}))
  ) 
  */
}

export default App;
