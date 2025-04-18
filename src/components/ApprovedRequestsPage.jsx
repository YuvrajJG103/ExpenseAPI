import React from "react";

const approvedRequests = [
  { employee: "John Doe", date: "Mar 15, 2023", category: "Lodging", desc: "Hotel stay during conference", amount: 320.00, approved: "Mar 16, 2023" },
  { employee: "Jane Smith", date: "Feb 22, 2023", category: "Travel", desc: "Flight to client site", amount: 450.00, approved: "Feb 23, 2023" },
  { employee: "Emily Johnson", date: "Jan 10, 2023", category: "Meals", desc: "Team lunch after product launch", amount: 120.50, approved: "Jan 11, 2023" },
];

const ApprovedRequestsPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Approved Requests</h2>
      <table className="table table-striped w-100">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>
          {approvedRequests.map((req, idx) => (
            <tr key={idx}>
              <td>{req.employee}</td>
              <td>{req.date}</td>
              <td>{req.category}</td>
              <td>{req.desc}</td>
              <td>${req.amount.toFixed(2)}</td>
              <td>{req.approved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedRequestsPage;
