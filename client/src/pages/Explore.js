import React, { Component } from "react";
import Userbadge from "../components/UserBadge";
import ProjectCard from "../components/ProjectCard";
import API from '../utils/APII';
import "./styles.css"


class DashBoard extends Component {

    state = {
        projects: ["123", "456", "789"]
    }

    componentDidMount() {
        this.allProjects();
    }
    allProjects = () => {
        API.getAllProjects()
        .then(res => {
            console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                console.log(res.data[i].projectName);
                console.log(res.data[i].repoURL);

            }

            this.setState({ projects: res.data})
        })
    }
    render() {
        return (
            <div className="row jumbotron jumbotron-fluid">
                <div className="col-md-12">
                    <div className="row projects justify-content-center">
                        {this.state.projects.map(project => (
                            <ProjectCard
                                name={project.projectName}
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