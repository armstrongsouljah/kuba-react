import ExpenseItem from './components/ExpenseItem';
import expenses from './expensesData';

function App() {
  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem expense={expenses[0]}/>
      <ExpenseItem expense={expenses[1]}/>
      <ExpenseItem expense={expenses[2]}/>
      <ExpenseItem expense={expenses[3]}/>
    </div>
  );
}

export default App;
