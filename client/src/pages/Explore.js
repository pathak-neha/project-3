import React, { Component } from "react";
import Userbadge from "../components/UserBadge";
import ProjectCard from "../components/ProjectCard";
import "./styles.css"

class DashBoard extends Component {
    state = {
        projects: ["123", "456", "789"]
    }
    render() {
        return (
            <div className="row jumbotron jumbotron-fluid">
                <div className="col-md-12">
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