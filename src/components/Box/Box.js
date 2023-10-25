import React, { useContext } from "react";
import "./box.css";
import { GradesContext } from "../App/App";

function Box(props) {
    const {usersWithGrades, setUsersWithGrades} = useContext(GradesContext);
    const {name} = props;

    const user = usersWithGrades.filter((user) => {
        return user.name === name;
    })[0];

    return <div className="box">
        <h1>{user.name}</h1>
        <h2>{user.grade}</h2>
    </div>;
}

export default Box;