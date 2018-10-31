import React from "react";

const DashBoard = props => (
    <div className="card jumbotron">
        <div className="container img-container">
            <img alt={props.name} src={props.image} />
            <div className="content">
                <ul>
                    <li>
                        <strong>Stuff:</strong> {props.content}
                    </li>
                    <li>
                        <strong>Stuff:</strong> {props.contents}
                    </li>
                    <li>
                        <strong>Stuff:</strong> {props.contented}
                    </li>
                </ul>
            </div>
        </div>
    </div>
)
export default DashBoard;