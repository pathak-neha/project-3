import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Post")}
        className={
          props.currentPage === "Post" ? "nav-link active" : "nav-link"
        }
      >
        Post
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Listing")}
        className={
          props.currentPage === "Blog" ? "nav-link active" : "nav-link"
        }
      >
        Listing
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Analytics")}
        className={
          props.currentPage === "Contact" ? "nav-link active" : "nav-link"
        }
      >
        Analytics
      </a>
    </li>
  </ul>
);

export default NavTabs;
