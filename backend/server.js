import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import transactionRoutes from "./src/routes/transactionRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", transactionRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Hello gal kolla");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});