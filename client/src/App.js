import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashBoard";
import Explore from "./pages/Explore";
import Features from "./pages/Features";
import About from "./pages/AboutUs";
import Nav from "./components/Navbar";
import CreateUser from "./components/CreateUser";
import API from "./API/API.js"
// import "./App.css"



class App extends React.Component {
  state = {
    user: {
      id: "",
      firstName: "",
      lastName: "",
      projects: [
        {
          name: "Project 1",
          rating: 4.5
        },
        {
          name: "Project 2",
          rating: 4
        },
        {
          name: "Project 3",
          rating: 5
        }
      ]
    },
    allProject: {
      projects: []
    }
  }
  handleLogin = () => {
    //this is where the auth goes
    
    
  }
  //This is where the ID eventually passed in
  // passToTheTop = (personID) => {
  //   localStorage.setItem(personID)
  //   this.setState({
  //     user: { id: personID }
  //   })
  //   console.log("top level")
  //   console.log(this.state.user.id)
  //   API.getOneUser(this.state.user.id)
  //     .then(res => {
  //       console.log(res.data)
  //       this.setState({
  //         user: {
  //           id: res.data.id,
  //           firstName: res.data.firstName,
  //           lastName: res.data.lastName,
  //           projects: res.data.projects
  //         }
  //       })
  //       console.log(this.state.user.firstName)
  //     })
  // }


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
              () => <Dashboard />} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/about" component={About} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/CreateUser" component={CreateUser} />
          </Switch>
        </div>
      </Router>)
  }
};

export default App;



