import axios from "axios";

export default { 
  createUser: function(data) {
    return axios.post("/api/users", data);
  },
  getOneUser:function(id){
    return axios.get("/api/users/"+id)
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
  getOneProject:function(id){
    return axios.get("/api/projects"+id)
  },
  getOneReview:function(id){
    return axios.get("/api/reviews/"+id)
  },
  updateProject:function(data){
    return axios.put("/api/projects",data)
  } 

};