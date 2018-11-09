import React, { Component } from "react";
import Userbadge from "../components/UserBadge";
import ProjectCard from "../components/ProjectCard";
import API from "../API/API.js"


class DashBoard extends Component {
    state = {
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
    }

    componentDidMount() {
            this.setState({
                id: this.state.passtobottomID
            })
            console.log(this.state.id)
            API.getUser(this.state.id)
                .then(res => {
                    this.setState({
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                    })
                })
    }
    render() {
        return(
            <div className="row jumbotron jumbotron-fluid" >
            <div className="col-md-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <Userbadge
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            projects={this.state.projects}
                            imåageURL={this.state.imageURL} />
                    </div><br />
                </div>
            </div>
            <div className="col-md-8">
                <h1 className="attn-text banner">My Projects<hr /></h1>
                <div className="row projects justify-content-center">
                    {this.state.projects.map(project => (
                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            key={project.id}
                            rating={project.rating}
                        />)
                    )}
                </div>
            </div>

        </div>


        )
    }
}





export default DashBoard;