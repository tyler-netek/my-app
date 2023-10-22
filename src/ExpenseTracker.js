import React, { useState } from 'react';
import './ExpenseTracker.css'; 

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]); 

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="expense-tracker-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Expense Name:
          <input type="text" />
        </label>
        <label>
          Amount:
          <input type="number" />
        </label>
        <button onClick={() => addExpense()}>Add Expense</button>
      </form>

      <div className="expense-list">
        <h2>Expense List</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.name}: ${expense.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;