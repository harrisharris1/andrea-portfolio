import React from "react"
import "../styles/App.css"
import Andrea from "../images/andreaharris.png"

const About = () =>(
    <div className="AboutSection">
        <div className="MoreAbout">
           <img className="resposive-andrea" src={Andrea}  alt="andrea harris"></img>
            
            
            <div className="moreabout-sentence">
                <h3>A little bit more about me<span className="color-dot">.</span></h3>
                <p>I have a good knowledge of HTML<span className="color-dot">,</span>CSS & JavaScript as well as different frameworks and tools used in today's technology<span className="color-dot">.</span>
                     On a personal level<span className="color-dot">,</span> I'm hard working<span className="color-dot">,</span> fast learner & constantly seeking to improve my skills to the next level<span className="color-dot">.</span>
                </p>
            </div>
        </div>
    </div>
)
export default About;