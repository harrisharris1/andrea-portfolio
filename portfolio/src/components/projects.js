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
                                Created with Gatsby.js & Ghost
                            </Card.Text>
                            <Button href="https://keen-mclean-51ee82.netlify.app/" className="custom-btn">Go to project</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '20rem', margin:'90px', textAlign:'center'}}>
                            <Card.Img variant="top" src={Destinations} alt="destinations project"fluid/>
                            <Card.Body>
                                <Card.Title>Great Destinations</Card.Title>
                            <Card.Text>
                                 Created with React.js
                            </Card.Text>
                            <Button href="https://peaceful-agnesi-dad644.netlify.app/" className="custom-btn">Go to project</Button>
                            </Card.Body>
                        </Card>


                        <Card style={{ width: '20rem', margin:'90px', textAlign:'center'}}>
                            <Card.Img variant="top" src={ZacPage} alt="next project" fluid/>
                            <Card.Body>
                                <Card.Title>Zac Harris Personal Site</Card.Title>
                            <Card.Text>
                                This personal site was made with Gatsby.js & Ghost
                            </Card.Text>
                            <Button href="#" className="custom-btn">Go to project</Button>
                            </Card.Body>
                        </Card>

                        
                    </div>
                   
        </div>
            
    </div>
    
)

export default Projects
