import { useState, useEffect } from "react";
import { getTransactions } from "../services/transactionService";

const Dashboard = () => {
  // 1. state to store transactions
  const [transactions, setTransactions] = useState([]);//default values
  // 2. state to track loading
  const [loading, setLoading] = useState(true);
  // 3. state to track errors
  const [error, setError] = useState(null);

  // 4. fetch when page loads
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getTransactions(); // uses your service file
      setTransactions(data);//trasnsaction states have now the values of the getTransaction api
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
      <h1>Dashboard</h1>
      {transactions.map((t) => (
        <p key={t._id}>{t.amount} - {t.category}</p>
      ))}
    </div>
  );
};

export default Dashboard;