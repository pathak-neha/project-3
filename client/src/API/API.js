import axios from "axios";

export default { 
  createUser: function(data) {
    return axios.post("/api/users", data);
  }
};