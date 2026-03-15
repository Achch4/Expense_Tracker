import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Get all transactions
export const getTransactions = async () => {
  const response = await API.get("/transaction");
  return response.data;
};

// Add transaction
export const addTransaction = async (data) => {
  const response = await API.post("/transaction", data);
  return response.data;
};

// Delete transaction
export const deleteTransaction = async (id) => {
  const response = await API.delete(`/transaction/${id}`);
  return response.data;
};

// Get summary
export const getSummary = async () => {
  const response = await API.get("/summary");
  return response.data;
};