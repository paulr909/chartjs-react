import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboards/Dashboard";
import SalesDashboard from "./components/dashboards/SalesDashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/sales-dashboard" element={<SalesDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
