import React from "react";
import {Link} from "react-router-dom"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
import gmail from "../images/gmail.svg"


const Footer = () =>(
    <div className="FooterContainer">
          <div className="FooterName">
           <h2>Andrea Harris<span className="color-dot">.</span></h2>
           </div>

              <div className="socialMedia">
                  <a target='_blank' href="https://www.linkedin.com/in/andrea-harris-208989174/"><img src={linkedin} width="65px"></img></a>
                  <a target='_blank' href="https://www.twitter.com/ImAndreaHarris/"><img src={twitter} width="65px"></img></a>
                 <a target='_blank' href=""><img src={facebook} width="65px"></img></a>
                 <a target='_blank' href="mailto:a.s.quintana1210@gmail.com"><img src={gmail} width="65px"></img></a>

               </div>
     </div>
)

export default Footer;