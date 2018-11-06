import React from "react"
import CreateUser from "../components/CreateUser"
const createUser = props => (
    <div>
        {props.childern}
        <CreateUser />
    </div>
)
export default createUser;