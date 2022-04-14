import ExpenseItem from './components/ExpenseItem';
import expenses from './expensesData';

function App() {
  return (
    <div>
      <h2>Expense Tracker</h2>
      {/*
      manually render component repetitively
      <ExpenseItem expense={expenses[0]}/>
      <ExpenseItem expense={expenses[1]}/>
      <ExpenseItem expense={expenses[2]}/>
      <ExpenseItem expense={expenses[3]}/>*/

      // vs loooping over the data
      expenses.map(expense => {
        return (
          <ExpenseItem expense={expense}/>
        )
        })
      }
    </div>
  );
}

export default App;
