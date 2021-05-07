import React from "react"
import "../styles/App.css"
import Badge from "../images/badge.png"


const Header =()=>(
    <div className="HeadContainer">
        <div className="Greeting">
            <h2> I'm a Front End Developer<br>
            </br>with a lot of enthusiasm <br>
            </br>to keep learning<span className="color-dot">,</span> ready to dive <br>
            </br>into the Tech world<span className="color-dot">.</span></h2>

            <div class="paragraph">
            <p>I graduated from Lambda School where I learned new technologies<br>
            </br>that helped me become the developer I am today<span className="color-dot">.</span> I love bringing<br>
            </br>awesome design to life with code<span className="color-dot">.</span></p>
           </div>
           <a href={Badge} target="_blank" rel="noopener noreferrer" className="color-dot"> Click here to take a look at my graduation badge!</a>
        </div>
       
       
    </div>
)

export default Header;