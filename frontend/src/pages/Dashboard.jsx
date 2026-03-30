import { useState, useEffect } from "react";
import { getSummary } from "../services/transactionService";
import { getTransactions } from "../services/transactionService";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    balance: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getSummary();
      const transaction = await getTransactions();
      setSummary(data);
      setTransactions(transaction);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const expensesByCategory = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const chartData = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        data: Object.values(expensesByCategory),
        backgroundColor: [
          "#f87171",
          "#fb923c",
          "#facc15",
          "#34d399",
          "#60a5fa",
          "#a78bfa",
        ],
        borderWidth: 0,
      },
    ],
  };

  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  if (loading)
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-400 text-sm tracking-widest uppercase">
          Loading...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-red-400 text-sm">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="border-b border-stone-200 px-8 py-5">
        <h1 className="text-2xl font-bold text-stone-800 tracking-tight">
          Overview
        </h1>
        <p className="text-stone-400 text-sm mt-0.5">Your financial summary</p>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8 space-y-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Income */}
          <div className="bg-green-200 rounded-2xl p-6 border border-stone-300 shadow-sm">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">
              Total Income
            </p>
            <p className="text-3xl font-bold text-stone-900">
              Rs. {summary.totalIncome.toLocaleString()}
            </p>
          </div>

          {/* Expenses */}
          <div className="bg-rose-300 rounded-2xl p-6 border border-stone-300 shadow-sm">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">
              Total Expenses
            </p>
            <p className="text-3xl font-bold text-stone-900">
              Rs. {summary.totalExpenses.toLocaleString()}
            </p>
          </div>

          {/* Balance */}
          <div className="bg-violet-200 rounded-2xl p-6 border border-stone-300 shadow-sm">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">
              Balance
            </p>
            <p
              className={`text-3xl font-bold ${summary.balance >= 0 ? "text-stone-900" : "text-rose-400"}`}
            >
              Rs. {summary.balance.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Chart + Recent Transactions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="bg-white rounded-2xl p-6 border border-stone-300 shadow-sm">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
              Top Spend Areas
            </p>
            {Object.keys(expensesByCategory).length > 0 ? (
              <div className="flex justify-center">
                <div style={{ width: "220px" }}>
                  <Pie
                    data={chartData}
                    options={{ plugins: { legend: { position: "bottom" } } }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-40">
                <p className="text-stone-300 text-sm">No expense data yet</p>
              </div>
            )}
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl p-6 border border-stone-300 shadow-sm">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
              Recent Transactions
            </p>
            {recentTransactions.length > 0 ? (
              <div className="space-y-3">
                {recentTransactions.map((t) => (
                  <div
                    key={t._id}
                    className="flex items-center justify-between py-2 border-b border-stone-300 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-stone-700">
                        {t.category}
                      </p>
                      <p className="text-xs text-stone-400">
                        {new Date(t.date).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                    <p
                      className={`text-sm font-semibold ${t.type === "income" ? "text-emerald-500" : "text-rose-500"}`}
                    >
                      {t.type === "income" ? "+" : "-"} Rs.{" "}
                      {t.amount.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-40">
                <p className="text-stone-300 text-sm">No transactions yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
