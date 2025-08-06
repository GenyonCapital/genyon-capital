
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

function App() {
  const [investments, setInvestments] = useState([
    { name: "Bitcoin", amount: 30000, roi: 80 },
    { name: "Ethereum", amount: 15000, roi: 60 },
    { name: "CGD", amount: 30000, roi: 6 },
  ]);

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const newAlerts = investments
      .filter(inv => inv.roi >= 50)
      .map(inv => `ALERTA: ${inv.name} ultrapassou os ${inv.roi}% de valorização!`);
    setAlerts(newAlerts);
  }, [investments]);

  const COLORS = ["#FFD700", "#00C49F", "#FF8042"];

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: 20 }}>
      <h1 style={{ color: "#FFD700" }}>GENYON CAPITAL™</h1>
      {alerts.length > 0 && (
        <div style={{ background: "#FFF8DC", color: "#000", padding: 10, borderRadius: 8 }}>
          <strong>Alertas Jerónimo IA</strong>
          <ul>
            {alerts.map((alert, idx) => <li key={idx}>{alert}</li>)}
          </ul>
        </div>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={investments} dataKey="amount" nameKey="name" outerRadius={100} fill="#8884d8" label>
            {investments.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
