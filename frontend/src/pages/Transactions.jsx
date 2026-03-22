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

  return (
    <div>
      <h1>Transactions</h1>
      {transactions.map((t) => (
        <p key={t._id}>{t.amount} - {t.category} - <button onClick={()=>handleDelete(t._id)}>delete</button></p>
      ))}
      
    </div>
  );
};

export default Transactions;