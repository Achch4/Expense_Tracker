import express from "express";
import {
  addTransaction,
  getAllTransactions,
  removeTransaction,
  getTotal,
} from "../controllers/transactionController.js";

import upload from "../middleware/upload.js";

const router = express.Router();



router.post("/transaction", addTransaction);// income,expense decides at the frontend
router.get("/transaction", getAllTransactions);
router.delete("/transaction/:id", removeTransaction);
router.get("/summary", getTotal);
router.post("/upload", upload.single('statement'), (req, res) => {
  console.log(req.file);
  res.json({message: 'File received', filename: req.file.originalname});
  const csvString = req.file.buffer.toString('utf-8');
  console.log(csvString);
});

export default router;





