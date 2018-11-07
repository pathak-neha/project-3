import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashBoard";
import Features from "./pages/Features";
import About from "./pages/AboutUs";
import Nav from "./components/Navbar";
import CreateUser from "./pages/UserDash"
import CreateProject from "./pages/ProjectDash"
// import "./App.css"

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/CreateUser" component={CreateUser} />
        <Route exact path="/CreateProject" component={CreateProject} />
      </Switch>
      </div>
  </Router>
);

export default App;



