import React from "react";
import "./Review.css"

const review = props => (
    <div>
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle">Project: {props.RevewRateing}</h6>
        <h6 className="card-subtitle">Rating: {props.RevewRateing}</h6>
        <h6 className="card-subtitle">Reviewer: {props.Reviewer}</h6>
        <h6 className="card-subtitle">Comment: {props.RevewRateing}</h6>
      </div>
    </div>
  </div>
)
export default review