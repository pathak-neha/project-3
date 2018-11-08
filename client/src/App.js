import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashBoard";
import Explore from "./pages/Explore";
import Features from "./pages/Features";
import About from "./pages/AboutUs";
import Nav from "./components/Navbar";
import SignUp from "./pages/SignUpPage";
// import "./App.css"

class App extends React.Component {
  
  handleLogin = (userInfo) => {
    this.setState({ 
      id: userInfo._id,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      cell: userInfo.cell,
      imageURL: userInfo.imageURL,
      projects: [...userInfo.projects],
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Login} onChange={this.handleLogin} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/about" component={About} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>)
  }
};

export default App;



