import { useState, useEffect } from "react";
import { getSummary} from "../services/transactionService";

const Dashboard = () => {
  // 1. state to store summary
 
  const [summary, setSummary] = useState({totalIncome: 0,totalExpenses: 0,balance: 0});
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
      const data = await getSummary(); // uses your service file
      setSummary(data);//summary states have now the values of the getTransaction api as an array
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
      <p>Income: {summary.totalIncome}</p>
      <p>Expense: {summary.totalExpenses}</p>
      <p>Balance: {summary.balance}</p>
    </div>
  );
};

export default Dashboard;