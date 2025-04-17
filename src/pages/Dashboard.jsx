import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="container py-5">
      {user && (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <h2>Welcome, {user.name}!</h2>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <p className="text-muted">Your role: {user.role}</p>
          <hr />
          <p>This is your dashboard. You can now proceed to submit or manage expenses based on your role.</p>

          {/* 🔽 Role-based buttons here */}
          {user.role === "Employee" && (
            <div className="mt-4 d-flex gap-3">
              <button className="btn btn-success" onClick={() => navigate("/submit-expense")}>
                Submit Expense
              </button>
              <button className="btn btn-secondary" onClick={() => navigate("/my-expenses")}>
                My Expenses
              </button>
            </div>
          )}

          {user.role === "Manager" && (
            <div className="mt-4 d-flex gap-3">
              <button className="btn btn-warning" onClick={() => navigate("/pending-expenses")}>
                View Pending Expenses
              </button>
              <button className="btn btn-secondary" onClick={() => navigate("/my-expenses")}>
                My Approved Expenses
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
