import React, { useState } from "react";
import axios from "axios";

const SubmitExpense = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      const response = await axios.post("https://localhost:7206/api/Expense/submit", {
        ...formData,
        userId: user.id,
      });
      setMessage("Expense submitted successfully!");
      setFormData({ title: "", amount: "", date: "", description: "" });
    } catch (err) {
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Submit New Expense</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input type="number" className="form-control" name="amount" value={formData.amount} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Submit Expense</button>
        {message && <p className="mt-3">{message}</p>}
      </form>
    </div>
  );
};

export default SubmitExpense;
