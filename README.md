# Expense Tracker

A full-stack expense tracking application built with the MERN stack. Track your income and expenses, view spending breakdowns by category, and manage your transactions in one place.

## Live Demo
🔗 [https://expense-tracker-mauve-phi-92.vercel.app/](https://expense-tracker-mauve-phi-92.vercel.app/)

## Screenshot
![Dashboard]
<img width="1048" height="681" alt="image" src="https://github.com/user-attachments/assets/70dae88d-2f39-4c77-b504-40e4367a2749" />


## Features
- Add income and expense transactions with category, date and description
- Dashboard showing total income, total expenses and current balance
- Pie chart showing expense breakdown by category
- Full transaction history with delete functionality
- Responsive UI built with Tailwind CSS

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, Chart.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Deployment:** Vercel (frontend) + Render (backend)

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Installation

1. Clone the repository
```bash
git clone https://github.com/Achch4/Expense_Tracker.git
cd Expense_Tracker
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Create a `.env` file inside the `backend` folder
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

4. Run the backend server
```bash
npm run dev
```

5. Open a new terminal and install frontend dependencies
```bash
cd frontend
npm install
```

6. Create a `.env` file inside the `frontend` folder
```
VITE_API_URL=http://localhost:5000/api
```

7. Run the frontend
```bash
npm run dev
```

8. Open your browser and go to `http://localhost:5173`
