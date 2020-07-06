import React from "react";
import ZacPage from "../images/zac-page.png";
import Destinations from "../images/awesome.png";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import "../styles/App.css";


const Projects = () => (
    <div className="ProjectsContainer">
        <div className="ProjectsList">
            <h4>Some Projects I've working on</h4> 
            <p> (most work in progress)</p>
                 

                    <div className="projectCard">
                        <Card style={{ width: '20rem', margin:'90px', textAlign:'center'}}>
                            <Card.Img variant="top" src={ZacPage} alt="project image" fluid/>
                            <Card.Body>
                                <Card.Title>Zac Harris Personal Site</Card.Title>
                            <Card.Text>
                                Personal Page built for future customers to read post about
                                related subjects & schedule meetings with Zac Harris.
                            </Card.Text>
                            <Button href="https://keen-mclean-51ee82.netlify.app/" className="custom-btn">Go to Project</Button>
                            <Button href="https://github.com/aharris1012/zac-personalsite" className="custom-btn">Go to Github</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '20rem', margin:'90px', textAlign:'center'}}>
                            <Card.Img variant="top" src={Destinations} alt="destinations project"fluid/>
                            <Card.Body>
                                <Card.Title>Awesome Destinations</Card.Title>
                            <Card.Text>
                                 Looking for a getaway is hard.This site helps see destinations prices
                                  & book your next vacation easy.
                            </Card.Text>
                            <Button href="https://peaceful-agnesi-dad644.netlify.app/" className="custom-btn">Go to Project</Button>
                            <Button href="https://github.com/aharris1012/AwesomeDestinations" className="custom-btn">Go to Github</Button>
                            </Card.Body>
                        </Card>


                        <Card style={{ width: '20rem', margin:'90px', textAlign:'center'}}>
                            <Card.Img variant="top" src={ZacPage} alt="next project" fluid/>
                            <Card.Body>
                                <Card.Title>Coming Soon</Card.Title>
                            <Card.Text>
                                Working in a Finished Project
                            </Card.Text>
                            <Button href="#" className="custom-btn">Go to Project</Button>
                            <Button href="https://keen-mclean-51ee82.netlify.app/" className="custom-btn">Go to Github</Button>
                            </Card.Body>
                        </Card>

                        
                    </div>
                   
        </div>
            
    </div>
    
)

export default Projects
