import React from "react";
import ZacPage from "../images/zac-page.png";
import Destinations from "../images/awesome.png";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import JLOGO from "../images/Jeffery-logo.jpg";
import "../styles/App.css";


const Projects = () => (
    <div className="ProjectsContainer">
        <div className="ProjectsList">
            <h4>Some projects I've been working on</h4> 
            <p> (most work in progress)</p>
                 

                    <div className="projectCard">
                        <Card style={{ width: '20rem', margin:'90px', textAlign:'center'}}>
                            <Card.Img variant="top" src={ZacPage} alt="project image" fluid/>
                            <Card.Body>
                                <Card.Title>Zac Harris Personal Site</Card.Title>
                            <Card.Text className="Project-description">
                            Personal Page built for customers to read posts about related subjects & schedule meetings with Zac Harris. 
                            Created with Gatsby.js, implemented design from Figma, Blog and posts will be displayed and liked from Ghost CMS in the near future.
                            </Card.Text>
                            <Card.Text className="tech-used">
                                Gatsby.js|Figma|Ghost CMS
                            </Card.Text>
                            <Button href="https://keen-mclean-51ee82.netlify.app/" target="_blank" className="custom-btn">Go to Project</Button>
                            <Button href="https://github.com/aharris1012/zac-personalsite" target="_blank" className="custom-btn">Go to Github</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '20rem', margin:'90px', textAlign:'center'}}>
                            <Card.Img variant="top" src={Destinations} alt="destinations project"fluid/>
                            <Card.Body>
                                <Card.Title>Awesome Destinations</Card.Title>
                            <Card.Text  className="Project-description">
                                 Looking for a getaway is hard. This site helps travelers see destinations prices
                                  & book your next vacation easy. Built with React.js and Sass preproccesor. Looking forward on implementing booking & checkout, fully working components.
                            </Card.Text>
                            <Card.Text className="tech-used">
                                React.js|Sass
                            </Card.Text>
                            <Button href="https://peaceful-agnesi-dad644.netlify.app/" target="_blank" className="custom-btn">Go to Project</Button>
                            <Button href="https://github.com/aharris1012/AwesomeDestinations" target="_blank" className="custom-btn">Go to Github</Button>
                            </Card.Body>
                        </Card>


                        <Card style={{ width: '20rem', margin:'90px', textAlign:'center'}}>
                            <Card.Img variant="top" src={JLOGO} alt="next project" fluid/>
                            <Card.Body>
                                <Card.Title>Coming Soon "Jeffery"</Card.Title>
                            <Card.Text  className="Project-description">
                                Jeffery is a company offering different types of services taking care of the chores, customers
                                don't want to take care of. They offer laundry, cleanings, dog walks and more for a good convenient price.
                                Only trusted trained Jeffery's have acces to your home when you are aware.
                            </Card.Text>
                            <Card.Text className="tech-used">
                                React.js|React-bootstrap
                            </Card.Text>
                            <Button href="#" target="_blank" className="custom-btn">Go to Project</Button>
                            <Button href="#" target="_blank" className="custom-btn">Go to Github</Button>
                            </Card.Body>
                        </Card>

                        
                    </div>
                   
        </div>
            
    </div>
    
)

export default Projects
