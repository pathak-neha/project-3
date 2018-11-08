import axios from "axios";

export default {
  // users routes: returns all project info as well
  getAllUsers: function() {
    return axios.get("/api/users");
  },

  getOneUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },

  createUser: function(userInfo) {
    return axios.post("/api/users", userInfo);
  },

  // projects routes
  getAllProjects: function() {
    return axios.get("/api/projects");
  },

  getOneProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },

  createProject: function(projectInfo) {
    return axios.post("/api/projects", projectInfo);
  },

  // reviews routes
  getAllReviews: function() {
    return axios.get("/api/reviews");
  },

  getOneReview: function(id) {
    return axios.get("/api/reviews/" + id);
  },
  
  deleteReview: function(id) {
    return axios.delete("/api/reviews/" + id);
  },

  createReview: function(reviewInfo) {
    return axios.post("/api/projects", reviewInfo);
  }
};