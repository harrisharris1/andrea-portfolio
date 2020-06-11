import React from "react";
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
                  <img src={linkedin} width="65px"></img>
                  <img src={twitter} width="65px"></img>
                  <img src={facebook} width="65px"></img>
                  <img src={gmail} width="65px"></img>

               </div>
     </div>
)

export default Footer;