import express from "express";
import {
  addTransaction,
  getAllTransactions,
  removeTransaction,
  getTotal,
} from "../controllers/transactionController.js";

const router = express.Router();



router.post("/transaction", addTransaction);// income,expense decides at the frontend
router.get("/transaction", getAllTransactions);
router.delete("/transaction/:id", removeTransaction);
router.get("/summary", getTotal);



export default router;





