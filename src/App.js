import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import Dashboard from "./Pages/Dashboard/Dashboard";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/matematik">
          <CategoryPage />
        </Route>
      </Switch>
    </Router>
  );
}
