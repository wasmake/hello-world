import React, { useContext, useMemo, useState } from "react";

import "./home.scss";
import Box from "../../components/Box/Box";
import { GradesContext } from "../../components/App/App";

function Home() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [searchedUser, setSearchedUser] = useState('');
    const {usersWithGrades, setUsersWithGrades} = useContext(GradesContext);

    const averageGrade = () => {
        const total = usersWithGrades.reduce((acc, user) => {
            return acc + user.grade;
        }, 0);

        return total / usersWithGrades.length;
    }

    const avg = useMemo(() => averageGrade(), [usersWithGrades]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const addUser = () => {
        const userValue = document.getElementById('user').value;
        const gradeValue = Number(document.getElementById('grade').value);

        setUsersWithGrades([...usersWithGrades, {
            name: userValue,
            grade: gradeValue
        }]);
    }

    const searchUser = () => {
        const userValue = document.getElementById('suser').value;

        setSearchedUser(userValue);
    }

    return (
        <div className={`home ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="">
                <h1>Home</h1>
                <button onClick={toggleTheme}>Toggle theme</button>
            </div>
            <div className="users">
                <input id="user" type="text" placeholder="User" />
                <input id="grade" type="number" placeholder="Grade" />
                <button onClick={addUser}>Add user</button>
            </div>
            <div className="search-box">
                <input id="suser" type="text" placeholder="user" />
                <button onClick={searchUser}>Search user</button>
                {
                    searchedUser && <Box name={searchedUser.name} />
                }
                <span>Average grade: {avg}</span>
            </div>
        </div>
    );
}

export default Home;