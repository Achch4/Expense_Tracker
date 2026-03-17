import { useState } from "react";

const Add = () => {

  const [type, setType] = useState("");

  return (
    <div>
      <h1>Add Transaction</h1>
      <form>

        {/* 1. Type dropdown - updates type state when changed */}
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* 2. Category - shows different options based on type */}
        {type === "expense" ? (
          <select name="category">
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          <select name="category">
            <option value="Salary">Salary</option>
            <option value="Freelance">Freelance</option>
            <option value="Other">Other</option>
          </select>
        )}

        {/* 3. Rest of inputs */}
        <input type="number" name="amount" placeholder="Amount" />
        <input type="text" name="description" placeholder="Description" />
        <input type="date" name="date" />

        <button type="submit">Add Transaction</button>

      </form>
    </div>
  );
};

export default Add;