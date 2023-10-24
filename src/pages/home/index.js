import React, { useState } from "react";

import "./home.scss";

function Home() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <div className={`home ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="">
                <h1>Home</h1>
                <button onClick={toggleTheme}>Toggle theme</button>
            </div>
        </div>
    );
}

export default Home;