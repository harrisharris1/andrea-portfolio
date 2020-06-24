import React from "react"
import "../styles/App.css"
import Andrea from "../images/andreah.jpg"

const About = () =>(
    <div className="AboutSection">
        <div className="MoreAbout">
            
            <img src={Andrea} width='350px' alt="andrea harris"></img>
            
            
            <div className="moreabout-sentence">
            <h3>A little bit more about me</h3>
            <p>I have a good knowledge of HTML, CSS & JavaScript as well as different frameworks and tools used in today's technology.
                On a personal level, I'm hard working, fast learner & constantly seeking to improve my skills to the next level.
            </p>
            </div>
        </div>
    </div>
)
export default About;