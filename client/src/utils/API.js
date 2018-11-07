import axios from "axios";

export default {
  getAllUsers: function() {
    return axios.get("/api/users");
  },

  getOneUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  createUser: function(userInfo) {
    return axios.post("/api/users", userInfo);
  }
};