import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: '$678.23', date: new Date(2021, 2, 28) },
    { title: 'Fire Insurance', amount: '$78.56', date: new Date(2021, 3, 28) },
    { title: 'Fire Alarm', amount: '$158.98', date: new Date(2021, 4, 28) },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
