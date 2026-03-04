# Login System

A full-stack authentication system built with Node.js, Express, MongoDB and EJS.

## Live Demo
🔗 [https://login-system-fhto.onrender.com](https://login-system-fhto.onrender.com)

## Screenshot
![Login Page](screenshot.png)

## Features
- User registration with input validation
- Secure login with password hashing (bcrypt)
- Error handling and user feedback
- Responsive minimalist UI

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** EJS, Tailwind CSS
- **Security:** bcrypt password hashing

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Installation

1. Clone the repository
```bash
git clone https://github.com/Achch4/Login_System.git
cd Login_System
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server
```bash
npm run dev
```

5. Open your browser and go to `http://localhost:5000`

## Project Structure
```
login-system/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── authRoutes.js
│   └── views/
│       ├── login.ejs
│       ├── register.ejs
│       └── dashboard.ejs
├── .env
├── .gitignore
├── package.json
└── server.js
```
