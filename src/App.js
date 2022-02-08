import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: '$678.23', date: new Date(2021, 2, 28) },
    { title: 'Fire Insurance', amount: '$78.56', date: new Date(2021, 3, 28) },
    { title: 'Fire Alarm', amount: '$158.98', date: new Date(2021, 4, 28) },
    { title: 'Dinning Set', amount: '$2458.00', date: new Date(2021, 5, 28) },
  ]

  const addExpenseHandler = (expense) => {
    console.log('addExpenseHandler', expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
