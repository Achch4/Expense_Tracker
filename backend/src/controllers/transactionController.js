// src/controllers/resourceController.js
import { transactions } from "../models/transactions.js";

// GET all
export const getAll = async (req, res) => {
  try {
    const items = await Resource.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// GET one by id
export const getOne = async (req, res) => {
  try {
    const item = await Resource.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// POST create new
export const create = async (req, res) => {
  try {
    const { field1, field2, field3 } = req.body;

    // Validation
    if (!field1 || !field2) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const item = new Resource({ field1, field2, field3 });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// PUT update
export const update = async (req, res) => {
  try {
    const item = await Resource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // returns updated document
    );

    if (!item) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// DELETE
export const remove = async (req, res) => {
  try {
    const item = await Resource.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};