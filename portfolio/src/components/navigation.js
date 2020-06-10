import React from "react";
import "../styles/App.css"



const Nav = () =>(
    <div className="Navigation">
        <div className="NavContainer">
                <div className="Name">
                    <h1>Andrea H<span className="color-dot">.</span></h1>
                </div>
                <div className="nav-buttons">
                    <button className="Resume-btn">Resume</button>
                    <button className="ContactMe-btn">Contact Me</button>
                </div>
        </div>
    </div>
)
export default Nav;