import React from "react";

import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="content">
                <div className="logo">
                    <h1>Navbar</h1>
                </div>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/pokemones">Pokemones</Link>
                    <Link to="/episodes">Episodes</Link>
                </div>
            </div>
        </nav>
    );
}