import React from "react";

const pendingRequests = [
  { employee: "John Doe", date: "Apr 20, 2023", category: "Meals", desc: "Business lunch with potential client", amount: 85.50, submitted: "Apr 21, 2023" },
  { employee: "John Doe", date: "May 2, 2023", category: "Travel", desc: "Taxi fares during business trip", amount: 65.25, submitted: "May 3, 2023" },
  { employee: "John Doe", date: "May 10, 2023", category: "Miscellaneous", desc: "Software subscription renewal", amount: 99.99, submitted: "May 11, 2023" },
];

const PendingRequestsPage = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">All Pending Requests</h2>
    <table className="table table-striped w-100">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Submitted</th>
        </tr>
      </thead>
      <tbody>
        {pendingRequests.map((req, idx) => (
          <tr key={idx}>
            <td>{req.employee}</td>
            <td>{req.date}</td>
            <td>{req.category}</td>
            <td>{req.desc}</td>
            <td>${req.amount.toFixed(2)}</td>
            <td>{req.submitted}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PendingRequestsPage;
