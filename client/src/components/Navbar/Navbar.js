import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <row>
    <col-md-12>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Rate My Project
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li>
              <a className="nav-item" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li>
              <a className="nav-item" href="/about">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-item" href="/features">
                Features
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </col-md-12>
  </row>
);

export default Navbar;