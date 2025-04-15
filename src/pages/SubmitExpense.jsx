import React, { useState, useEffect } from "react";

const SubmitExpense = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserId(user.id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: userId,
      amount: parseFloat(amount),
      category,
      description,
      receiptUrl: "" // optional, backend handles this
    };

    try {
      const response = await fetch("https://localhost:7206/api/expense/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setMessage("Expense submitted successfully!");
        setAmount("");
        setCategory("");
        setDescription("");
      } else {
        setMessage("Failed to submit expense.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error submitting expense.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Submit Expense</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label>Amount</label>
          <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Category</label>
          <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default SubmitExpense;
