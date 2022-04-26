import Chart from "./Chart";

const ExpensesChart = (props) => {
    const charDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'March', value: 0},
        {label: 'April', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Ag', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oc', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();//starting at cero
        charDataPoints[expenseMonth].value +=  expense.amount;
    }
    return (
        <Chart dataPoints={charDataPoints}/>
    )
}

export default ExpensesChart;