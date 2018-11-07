import React, { Component } from "react";
import Userbadge from "../components/UserBadge";
import ProjectCard from "../components/ProjectCard";
import "./styles.css"

class DashBoard extends Component {
    state = {
        firstName: "Neha",
        lastName: "Pathak",
        projects: ["123", "456", "789"]
    }
    render() {
        return (
            <div className="row jumbotron jumbotron-fluid">
                <div className="col-md-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <Userbadge firstName={this.state.firstName} lastName={this.state.lastName} projects={this.state.projects} imageURL={this.state.imageURL}/>
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