import React, { Component } from "react";
import "./Review.css"
class review extends Component {
  state = {
    review: []
  }
  componentDidMount() {
    localStorage.getItem("id")
    this.getReviews()
  }
  getReviews() {
    API.getOneReview(this.props.reviewID).then(res => {
      console.log(res.data)
      this.setState({
        review: res.data
      })
    })
    const reviewerPage = this.state.review
    reviewerPage.map((each) =>
      <h5 className="card-title">{each.name}</h5>
    )
  }
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
          {this.state.review.map((each)=>
           <ReviewTag 
           ReviewRating={each.rating}
           ReviewComments={each.comments}
           Project={each.project}
           Reviewer={each.reviewer}
           />
            )}
         
          </div>
        </div>
      </div>
    )
  }
}

// const reviewTag = props => (
//   <div className="card-body">
//     <h5 className="card-title">{props.name}</h5>
//     <h6 className="card-subtitle">Project: {props.RevewRateing}</h6>
//     <h6 className="card-subtitle">Rating: {props.RevewRateing}</h6>
//     <h6 className="card-subtitle">Reviewer: {props.Reviewer}</h6>
//     <h6 className="card-subtitle">Comment: {props.RevewRateing}</h6>
//   </div>
// )
// const review = props => (
//   <div>
//     <div className="card" style={{ width: "18rem" }}>
//       <div className="card-body">
//         <h5 className="card-title">{props.name}</h5>
//         <h6 className="card-subtitle">Project: {props.RevewRateing}</h6>
//         <h6 className="card-subtitle">Rating: {props.RevewRateing}</h6>
//         <h6 className="card-subtitle">Reviewer: {props.Reviewer}</h6>
//         <h6 className="card-subtitle">Comment: {props.RevewRateing}</h6>
//       </div>
//     </div>
//   </div>
// )
export default review