import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Add this line

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    try {
      // ✅ Call backend API
      await axios.post("https://localhost:7206/api/auth/forgot-password", { email });

      setSubmitted(true);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Forgot Password</h2>

        {submitted ? (
          <div className="alert alert-success text-center">
            If this email is registered, a reset link has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className={`form-control ${error ? "is-invalid" : ""}`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
              {error && <div className="invalid-feedback">{error}</div>}
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Reset Link
            </button>
          </form>
        )}

        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-link"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
