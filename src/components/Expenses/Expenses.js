
import { useState } from "react";
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css';


function Expenses(props) {
  let [expenseFilter, setExpenseFilter] = useState('2020');

  const filterExpensesHandler = (filterYear) => {
    setExpenseFilter(filterYear);
    props.onFilterExpenses(filterYear);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selectedYear={expenseFilter} onFilterExpenses={filterExpensesHandler} />

        {props.expenses.map(expense =>
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        )}
      </Card>
    </div>
  );
}

export default Expenses;
