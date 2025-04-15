import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: `url("/landing-bg.jpg") no-repeat center center`,
        backgroundSize: "cover",
        backgroundColor: "#222", // fallback
      }}
    >
      <div
        className="text-center text-white p-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "10px",
          maxWidth: "500px",
        }}
      >
        <h1 className="mb-4">Welcome to Expense Ease</h1>
        <p className="mb-4">An efficient way to manage your reimbursements.</p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-primary px-4" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="btn btn-outline-light px-4" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
