import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserDashboard from "./pages/users/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute
          exact
          path="/dashboard/admin"
          component={AdminDashboard}
        />
        <PrivateRoute exact path="/dashboard" component={UserDashboard} />
      </Switch>
    </div>
  );
}

export default App;
