import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: '$678.23', date: new Date(2021, 2, 28) },
    { title: 'Fire Insurance', amount: '$78.56', date: new Date(2021, 3, 28) },
    { title: 'Fire Alarm', amount: '$158.98', date: new Date(2021, 4, 28) },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
