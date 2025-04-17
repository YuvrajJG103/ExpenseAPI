import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import SubmitExpense from "./pages/SubmitExpense";

// ✅ Optional: import when ready
// import SubmitExpense from "./pages/SubmitExpense";
// import MyExpenses from "./pages/MyExpenses";
// import PendingExpenses from "./pages/PendingExpenses";

function App() {
  return (
    <Router>
      <Routes>
        {/* 👋 Entry point */}
        <Route path="/" element={<Landing />} />

        {/* 🔐 Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* 🏠 Post-login */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 💼 Today */}
        
        <Route path="/submit-expense" element={<SubmitExpense />} />
        {/* <Route path="/my-expenses" element={<MyExpenses />} /> */}
        {/* <Route path="/pending-expenses" element={<PendingExpenses />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
