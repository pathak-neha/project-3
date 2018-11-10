import React, { Component } from "react";
const reviewTag = props => (
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <h6 className="card-subtitle">Project: {props.Project}</h6>
      <h6 className="card-subtitle">Rating: {props.ReviewRating}</h6>
      <h6 className="card-subtitle">Reviewer: {props.Reviewer}</h6>
      <h6 className="card-subtitle">Comment: {props.ReviewComments}</h6>
    </div>
  )
  export default reviewTag