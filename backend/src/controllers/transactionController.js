import { Transaction } from "../models/transactions.js";
//add expenses
export const addTransaction = async (req, res) => {
  try {
    const { type, amount, category, description, date } = req.body;

    // Validation
    if (!type || !amount || !category || !date) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const transactions = new Transaction({
      type,
      amount,
      category,
      description,
      date,
    });
    await transactions.save();
    res.status(201).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// GET All Transactions
export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete A Transaction
export const removeTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.findByIdAndDelete(req.params.id);

    if (!transactions) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get Summary

export const getTotal = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpenses;

    res.status(200).json({ totalIncome, totalExpenses, balance });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
