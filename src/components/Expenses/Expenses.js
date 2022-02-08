
import { useState } from "react";
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css';


function Expenses(props) {
  const expenses = props.expenses;
  let [expenseFilter, setExpenseFilter] = useState('2020');

  const filterExpensesHandler = (filterData) => {
    setExpenseFilter(filterData)
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selectedYear={expenseFilter} onFilterExpenses={filterExpensesHandler} />
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
