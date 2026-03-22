import { useState } from "react";
import { addTransaction } from "../services/transactionService";

const Add = () => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault(); // stops page from refreshing
  console.log({ type, amount, category, description, date });
  await addTransaction({ type, amount, category, description, date });
};

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
          <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Salary">Salary</option>
            <option value="Freelance">Freelance</option>
            <option value="Other">Other</option>
          </select>
        )}

        {/* 3. Rest of inputs */}
        <input type="number" name="amount" value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>
        <input type="text" name="description" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>

        <button type="button" onClick={handleSubmit}>Add Transaction</button>
      </form>
    </div>
  );
};


export default Add;
