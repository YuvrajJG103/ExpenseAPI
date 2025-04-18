import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import SubmitExpense from "./pages/SubmitExpense";
import ManagerDashboard from "./pages/ManagerDashboard";
// import MyExpenses from "./pages/MyExpenses";
// import PendingExpenses from "./pages/PendingExpenses";

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 TEMPORARY: Set this to preview ManagerDashboard */}
        <Route path="/" element={<ManagerDashboard />} />

        {/* 🔐 Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* 🏠 Post-login */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit-expense" element={<SubmitExpense />} />

        {/* ✅ Your Manager route */}
        <Route path="/manager" element={<ManagerDashboard />} />

        {/* <Route path="/my-expenses" element={<MyExpenses />} /> */}
        {/* <Route path="/pending-expenses" element={<PendingExpenses />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
