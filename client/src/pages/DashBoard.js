import React, { Component } from "react";
import Userbadge from "../components/UserBadge";
import ProjectCard from "../components/ProjectCard";
import API from "../API/API.js"


class DashBoard extends Component {
    state = {
        id: "",
        firstName: "",
        lastName: "",
        projects: [],
        reviews:[],
    }

    componentDidMount() {
        console.log(localStorage.getItem("id"))
        this.getProject(localStorage.getItem("id"))

    }
    getProject = (id) => {
        API.getOneUser(id)
            .then(res => {
                var temp1=res.data._id;
                var temp2=res.data.firstName
                var temp3=res.data.lastName
                var temp4=res.data.projects
            
                //console.log(res.data.projects)
                console.log(temp4)
                API.getOneReview(temp4[0].reviews[0])
                    .then(res => {
                        this.setState({
                            id:temp1,
                            firstName:temp2,
                            lastName:temp3,
                            projects:temp4,
                            reviews:res.data
                        })
                        console.log(this.state.reviews)
                    })
            })
       

    }
    render() {
        return (
            <div className="row jumbotron jumbotron-fluid" >
                <div className="col-md-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <Userbadge
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                projects={this.state.projects}
                                imageURL={this.state.imageURL} />
                        </div><br />
                    </div>
                </div>
                <div className="col-md-8">
                    <h1 className="attn-text banner">My Projects<hr /></h1>
                    <div className="row projects justify-content-center">
                        {this.state.projects.map(project => (
                            <ProjectCard
                                name={project.projectName}
                                id={project._id}
                                key={project._id}
                                reviewID={project.reviews}
                            />)
                        )}
                    </div>
                </div>

            </div>


        )
    }
}





export default DashBoard;