import React from "react";
import UserDashboard from "./components/users/UserDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditProfile from "./components/ProfileForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/Edit" component={EditProfile} />
        <Route exact path="/dashboard/admin" component={AdminDashboard} />
        <Route exact path="/dashboard/:id" component={UserDashboard} />
      </Switch>
    </div>
  );
}

export default App;
