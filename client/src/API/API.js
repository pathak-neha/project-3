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
  getProject:function(id){
    return axios.get("/api/projects"+id)
  },
  updateProject:function(id){
    return axios.put("/api/projects"+id)
  }
};