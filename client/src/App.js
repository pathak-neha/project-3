import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashBoard";
import Explore from "./pages/Explore";
import Features from "./pages/Features";
import About from "./pages/AboutUs";
import Nav from "./components/Navbar";
import SignUp from "./pages/SignUpPage";
import CreateProject from "./components/CreateProject";
import API from "./utils/API.js"
// import "./App.css"

class App extends React.Component {
  state = {
    user: {
      id: "",
      firstName: "",
      lastName: "",
      projects: []
    },
    allProject: {
      projects: []
    }
  }
  handleLogin = () => {
    //this is where the auth goes
    
    
  }

  //This is where the ID eventually passed in
  passToTheTop = (personID) => {
    this.setState({
      user: { id: personID }
    })
    console.log("top level")
    console.log(this.state.user.id)
    API.getOneUser(this.state.user.id)
      .then(res => {
        console.log(res.data)
        this.setState({
          user: {
            id: res.data.id,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            projects: res.data.projects
          }
        })
        console.log(this.state.user.firstName)
      })
  }


  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={
              () => <Login onChange={this.handleLogin} passtoTOP={this.passToTheTop} />
            } />
            {/* <Route exact path="/" component={Login} onChange={this.handleLogin} passToTheTop={this.passChildId} /> */}
            <Route exact path="/dashboard" render={
              () => <Dashboard 
                //passtoTOP={this.passtobottomrID}
                key={this.state.user.id}
                id={this.state.user.id}
                firstName={this.state.user.firstName}
                lastName={this.state.user.lastName}
                //image={this.state.user.image}
                projects={this.state.user.projects}
              />} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/create-project" component={CreateProject} />
            <Route exact path="/about" component={About} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>)
  }
};

export default App;



