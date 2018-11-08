import React, { Component } from "react";
import Userbadge from "../components/UserBadge";
import ProjectCard from "../components/ProjectCard";
import API from "../API/API.js"

class DashBoard extends Component {
    state = {
        
        lastName: "",
        projects: [],
        id: "",
        user:{
            firstName: "",
        }
    }
    componentWillMount() {
        this.loadUser();
    }

    loadUser = () => {
        API.getUser(this.id)
            .then(res => {
                this.setState({
                    user:{firstName:res.data.firstName},
                    lastName:res.data.lastName,
                    projects:res.data.projects,
                })
            }
            ).catch(err => console.log(err));
    }
    // projects: [
    //     {
    //         name: "Project 1",
    //         rating: 4.5
    //     },
    //     {
    //         name: "Project 2",
    //         rating: 4
    //     },
    //     {
    //         name: "Project 3",
    //         rating: 5
    //     }
    // ]

    render() {
        return (
            <div className="row jumbotron jumbotron-fluid">
                <div className="col-md-8">
                    <div className="row projects">
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
                <div className="col-md-4">
                    <Userbadge user={this.state.user} />
                </div>
            </div>
        )
    }
}

export default DashBoard;