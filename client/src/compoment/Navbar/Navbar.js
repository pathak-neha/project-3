import React from "react";

const NavTabs = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-brand">
     <strong>
        Rate My Project
     </strong>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a onClick={()=>props.handlePageChange("DashBoard")}
          className={
              props.currentPage==="Dasboard"?"nav-link active":"nav-link"
          }>
          DashBoard
          </a>
        </li>
        <li className="nav-item">
          <a onClick={()=>props.handlePageChange("Features")}
          className={
            props.currentPage === "Features" ? "nav-link active" : "nav-link"
          }>Features</a>
        </li>
        <li className="nav-item">
        <a onClick={()=>props.handlePageChange("AboutUs")}
          className={
            props.currentPage === "AboutUs" ? "nav-link active" : "nav-link"
          }>About Us</a>
        </li>
      </ul>
    </div>
    <form className="form-inline my-2 my-lg-0">
      <div className="my-2 my-sm-0">
      <a onClick={()=>props.handlePageChange("LoginPage")}
          className={
            props.currentPage === "Login" ? "nav-link active" : "nav-link"
          }>Login In</a>
          </div>
      <div> OR </div>
      <a onClick={()=>props.handlePageChange("LoginPage")}
          className={
            props.currentPage === "Login" ? "nav-link active" : "nav-link"
          }>Login Out</a>
    </form>
  </nav>
);

export default NavTabs;
