import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboards/Dashboard";
import SalesDashboard from "./components/dashboards/SalesDashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/sales-dashboard">
            <SalesDashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
