import React from "react";
import {Button} from "react-bootstrap"
import "../styles/App.css"



const Nav = () =>(
    <div className="Navigation">
        <div className="NavContainer">
                <div className="Name">
                    <h1>Andrea H<span className="color-dot">.</span></h1>
                </div>
                <div className="nav-buttons">
                    <Button href="#" className="nav-btn">Resume </Button>
                    <Button href="mailto:a.s.quintana1210@gmail.com" className="nav-btn">Contact Me</Button>
                </div>
        </div>
    </div>
)
export default Nav;