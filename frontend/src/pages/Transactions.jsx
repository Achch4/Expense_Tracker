import { useState, useEffect } from "react";
import { deleteTransaction,getTransactions } from "../services/transactionService";

const Transactions = () => {
  // 1. state to store transactions
  const [transactions, setTransactions] = useState([]);//default values
  // 2. state to track loading
  const [loading, setLoading] = useState(true);
  // 3. state to track errors
  const [error, setError] = useState(null);

   const handleDelete = async (id) => {
    const confirmed = window.confirm("are you sure you want to delete");
    if(!confirmed) return;
    await deleteTransaction(id);
    fetchData(); // refetch without refreshing the page
  };

  // 4. fetch when page loads
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getTransactions(); // uses your service file
      setTransactions(data);//trasnsaction states have now the values of the getTransaction api as an array
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if(transactions.length<1) return <p>No Transactions</p>;

  return (
  <div>
    <h1>Transactions</h1>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Date</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t._id}>
            <td>{t.type}</td>
            <td>{new Date(t.date).toLocaleDateString('en-GB')}</td>
            <td>{t.category}</td>
            <td>{t.amount}</td>
            <td>
              <button onClick={() => handleDelete(t._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default Transactions;




