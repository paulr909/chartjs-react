import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboards/Dashboard";
import SalesDashboard from "./components/dashboards/SalesDashboard";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard}>
          <Dashboard />
        </Route>
        <Route path="/sales-dashboard" component={SalesDashboard}>
          <SalesDashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
