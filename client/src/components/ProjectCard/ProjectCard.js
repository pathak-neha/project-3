import React, { Component } from "react";
import "./ProjectCard.css";
import API from "../../utils/APII";

class ProjectCard extends Component {
  state = {
    Review: "",
    ProjectName: "",
    ProjectRating: "",
  }
  componentDidMount() {
    this.allUsers(this.props.id);
    console.log(this.props.reviewID)
  }
  allUsers = () => {
      API.getOneReview(this.props.reviewID).then(res => {
        console.log(res.data)
        this.setState({
          ProjectRating:res.data.rating
        })
      })
  }


  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <h6 className="card-subtitle">Rating: {this.state.ProjectRating}</h6>
            <fieldset className={`rating star-${this.state.id}`}>
              <input type="radio" id="star5" name="rating" value="5" /><label className="full" for="star5" title="Awesome - 5 stars"></label>
              <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
              <input type="radio" id="star4" name="rating" value="4" /><label className="full" for="star4" title="Pretty good - 4 stars"></label>
              <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" for="star3half" title="Meh - 3.5 stars"></label>
              <input type="radio" id="star3" name="rating" value="3" /><label className="full" for="star3" title="Meh - 3 stars"></label>
              <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
              <input type="radio" id="star2" name="rating" value="2" /><label className="full" for="star2" title="Kinda bad - 2 stars"></label>
              <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" for="star1half" title="Meh - 1.5 stars"></label>
              <input type="radio" id="star1" name="rating" value="1" /><label className="full" for="star1" title="Sucks big time - 1 star"></label>
              <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
            </fieldset>
            
          </div>
        </div>
      </div>
    )
  }
};

export default ProjectCard;