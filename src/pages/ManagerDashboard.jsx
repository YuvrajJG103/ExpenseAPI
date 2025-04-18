import React, { useState } from "react";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend
} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import PendingRequestsPage from "../components/PendingRequestsPage";
import ApprovedRequestsPage from "../components/ApprovedRequestsPage";

const pieData = [
  { name: 'Meals', value: 1250 },
  { name: 'Travel', value: 2450 },
  { name: 'Lodging', value: 1800 },
  { name: 'Miscellaneous', value: 950 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const barData = [
  { name: 'Jan', expenses: 400 },
  { name: 'Feb', expenses: 300 },
  { name: 'Mar', expenses: 500 },
  { name: 'Apr', expenses: 450 },
  { name: 'May', expenses: 650 },
  { name: 'Jun', expenses: 550 },
];

const ManagerDashboard = () => {
  const [showPendingPage, setShowPendingPage] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className="bg-white p-4 shadow vh-100" style={{ width: '260px' }}>
        <h1 className="h4 text-primary fw-bold mb-4">ReimbursePro</h1>
        <ul className="nav flex-column">
          <li className="nav-item text-primary fw-medium" style={{ cursor: 'pointer' }} onClick={() => setShowPendingPage(false)}>Dashboard</li>
          <li className="nav-item text-primary" style={{ cursor: 'pointer' }} onClick={() => setShowPendingPage(true)}>Pending Requests</li>
          <li className="nav-item text-primary">Team Expenses</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 p-4 bg-light">
        {showPendingPage ? (
          <PendingRequestsPage />
        ) : (
          <>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="h4 fw-bold">Manager Dashboard</h2>
                <p className="text-muted">Monitor and manage your team's expense requests</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>M</div>
                <div className="small">Manager User ▾</div>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="bg-warning bg-opacity-25 p-3 rounded shadow d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => setShowPendingPage(true)}>
                  <div>
                    <p className="small text-muted mb-1">Pending Approval</p>
                    <h3 className="fw-bold">3</h3>
                  </div>
                  <p className="mb-0 fw-medium">$250.74</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-success bg-opacity-25 p-3 rounded shadow">
                  <p className="small text-muted mb-1">Approved</p>
                  <h3 className="fw-bold">4</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-danger bg-opacity-25 p-3 rounded shadow">
                  <p className="small text-muted mb-1">Rejected</p>
                  <h3 className="fw-bold">1</h3>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="bg-white p-3 rounded shadow">
                  <h5 className="fw-semibold mb-3">Expenses by Category</h5>
                  <PieChart width={300} height={250}>
                    <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80}>
                      {pieData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </div>
              </div>

              <div className="col-md-6">
                <div className="bg-white p-3 rounded shadow">
                  <h5 className="fw-semibold mb-3">Monthly Expenses</h5>
                  <BarChart width={350} height={250} data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="expenses" fill="#0088FE" />
                  </BarChart>
                </div>
              </div>
            </div>

            {/* Pending Table */}
            <div className="bg-white p-3 rounded shadow">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-semibold">Pending Approval</h5>
                <button className="btn btn-outline-primary btn-sm" onClick={() => setShowPendingPage(true)}>View All</button>
              </div>
              <p className="text-muted">Click "View All" to see detailed pending requests</p>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ManagerDashboard;