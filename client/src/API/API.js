import axios from "axios";

export default { 
  createUser: function(data) {
    return axios.post("/api/users", data);
  },
  getUser:function(){
    return axios.get("/api/users")
  },
  createProject:function(data){
    return axios.post("/api/projects",data)
  },
  getProject:function(){
    return axios.get("/api/projects")
  },
  updateProject:function(data){
    return axios.put("/api/projects",data)
  } 

};