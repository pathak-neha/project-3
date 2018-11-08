import React from "react";
import "./UserBadge.css";
import { Link } from "react-router-dom";

const UserBadge = (props) => (
  <div>
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
          <h5 className="card-title">{props.firstName} {props.lastName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            User Score: {props.score} <br />
            <a href="#">{props.projects.length} Projects</a>
          </h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Settings</li>
            <li className="list-group-item">Create a Project</li>
          </ul>
      </div>
      </div>
    </div>
);

export default UserBadge;