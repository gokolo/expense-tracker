
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 1, title: 'Car Insurance', amount: '$678.23', date: new Date(2021, 2, 28) },
  { id: 2, title: 'Fire Insurance', amount: '$78.56', date: new Date(2021, 3, 28) },
  { id: 3, title: 'Fire Alarm', amount: '$158.98', date: new Date(2021, 4, 28) },
  { id: 4, title: 'Dinning Set', amount: '$2458.00', date: new Date(2021, 5, 28) },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      expense.date = new Date(expense.date);
      expense.id = prevExpenses.length + 1;
      return [expense, ...prevExpenses];
    });

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
