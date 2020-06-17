import React from "react";
import Css from "../images/css.svg"
import Html from "../images/html.svg"
import Js from "../images/js.svg"
import reactjs from "../images/react.svg"
import gatsbyjs from "../images/gatsby.png"
import nodejs from "../images/nodejs.svg"
import python from "../images/python.svg"
import less from "../images/less.svg"
import yarn from "../images/yarn.svg"
import git from "../images/git.svg"
import npm from "../images/npm.svg"
import vscode from "../images/vscode.svg"
import "../styles/App.css";


const Skills = () =>(
    <div className="SkillContainer">
        <h3>My Tech Skills</h3>
        <div className="Skill-List">
            <img src={Css} width="85px"></img>
            <img src={Html}width="75px"></img>
            <img src={Js}width="75px"></img>
            <img src={reactjs} width="75px"></img>
            <img src={python}width="75px"></img>
            <img src={nodejs}width="75px"></img>
            <img src={gatsbyjs}width="75px"></img>
            <img src={less}width="75px"></img>
            <img src={yarn}width="75px"></img>
            <img src={git}width="75px"></img>
            <img src={npm}width="75px"></img>
            <img src={vscode}width="75px"></img>
           
           
            

        </div>
    </div>
)

export default Skills;