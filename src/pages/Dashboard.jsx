import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null); // Logged-in user info
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    // Fetch dashboard data including user info
    axios
      .get("https://icare.imcbs.com/api/dashboard/", {
        withCredentials: true, // send session cookie
        // If using JWT:
        // headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
      })
      .then((res) => {
        setUser(res.data.user); // { username, email, etc. }
        setVisitors(res.data.visitors);
        setFilteredVisitors(res.data.visitors);
        setTotalVisitors(res.data.total_visitors);
      })
      .catch((err) => console.error("Error fetching dashboard:", err));
  }, []);

  // Filter visitors by selected date
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setSelectedDate(dateValue);

    if (!dateValue) {
      setFilteredVisitors(visitors);
      return;
    }

    const filtered = visitors.filter((v) => {
      const visitorDate = new Date(v.created_at);
      const localDate = new Date(
        visitorDate.getTime() - visitorDate.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0];
      return localDate === dateValue;
    });

    setFilteredVisitors(filtered);
  };

  // Show only today’s visitors
  const handleShowToday = () => {
    const todayStr = new Date().toISOString().split("T")[0];
    setSelectedDate(todayStr);

    const filtered = visitors.filter((v) => {
      const visitorDate = new Date(v.created_at);
      const localDate = new Date(
        visitorDate.getTime() - visitorDate.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0];
      return localDate === todayStr;
    });

    setFilteredVisitors(filtered);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Admin Dashboard</h1>

      {user && (
        <p className="text-gray-700 mb-4">
          Logged in as: <span className="font-semibold">{user.username}</span>
        </p>
      )}

      <p className="text-gray-700 mb-6 text-lg font-semibold">
        Total Visitors: {totalVisitors}
      </p>

      {/* Date Filter */}
      <div className="mb-6 flex items-center gap-3 flex-wrap">
        <label className="font-semibold text-gray-700">Filter by Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border rounded-md px-3 py-1 text-gray-700"
        />
        {selectedDate && (
          <button
            onClick={() => {
              setSelectedDate("");
              setFilteredVisitors(visitors);
            }}
            className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
          >
            Clear
          </button>
        )}
        <button
          onClick={handleShowToday}
          className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded"
        >
          Show Today
        </button>
      </div>

      {selectedDate && (
        <p className="text-gray-600 mb-4">
          Visitors on <span className="font-semibold">{selectedDate}</span>: {filteredVisitors.length}
        </p>
      )}

      {/* Visitor Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white rounded-xl shadow-md">
          <thead>
            <tr className="bg-orange-100 text-left">
              <th className="border px-4 py-2 text-center">Sl.No</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredVisitors.length > 0 ? (
              filteredVisitors.map((visitor, index) => (
                <tr key={visitor.id} className="hover:bg-orange-50">
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">{visitor.name}</td>
                  <td className="border px-4 py-2">{visitor.phone}</td>
                  <td className="border px-4 py-2">{visitor.email || "—"}</td>
                  <td className="border px-4 py-2">
                    {new Date(visitor.created_at).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500 italic">
                  No visitors found for this date.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
