
import { useState } from "react";
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css';


function Expenses(props) {
  let [expenseFilter, setExpenseFilter] = useState('2020');
  let [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const filterExpensesHandler = (filterYear) => {
    setExpenseFilter(filterYear);
    setFilteredExpenses(() => {
      return props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
      })
    });
  }

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense =>
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    )
  }


  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selectedYear={expenseFilter} onFilterExpenses={filterExpensesHandler} />

        { expensesContent }
      </Card>
    </div>
  );
}

export default Expenses;
