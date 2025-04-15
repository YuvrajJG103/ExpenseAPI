import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    window.location.href = "/login";
  };

  if (!user) {
    return (
      <div className="container mt-5">
        <h2>Loading user data...</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {user.name}!</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <p className="lead">Your role: <strong>{user.role}</strong></p>
      <hr />
      <p>This is your dashboard. You can now proceed to submit or manage expenses based on your role.</p>
    </div>
  );
};

export default Dashboard;
