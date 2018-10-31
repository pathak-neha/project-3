import React from "react";

const login = props => (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="User_Name">Username</span>
        </div>
        <input type="text" className="form-control"></input>
        <div className="input-group-prepend">
            <span className="input-group-text" id="Password">PassWord</span>
        </div>
        <input type="text" className="form-control"></input>
        <button type="button" className="btn btn-primary">Sign In</button>
    </div>
)

export default login;