import React from "react";
import ZacPage from "../images/zac-page.jpg";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import "../styles/App.css";


const Projects = () => (
    <div className="ProjectsContainer">
        <div className="ProjectsList">
            <h4>Some Projects I've worked on</h4> 
            <p> (some still in process)</p>
                    <div className="projectCard">
                        <Card style={{ width: '20rem', margin:'55px', textAlign:'center'}}>
                            <Card.Img variant="top" src={ZacPage} alt="project image" width="50px" fluid/>
                            <Card.Body>
                                <Card.Title>Zac Harris Personal Site</Card.Title>
                            <Card.Text>
                                This personal site was made with Gatsby.js & Ghost
                            </Card.Text>
                            <Button href="https://keen-mclean-51ee82.netlify.app/" className="custom-btn">Go to project</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '20rem', margin:'55px', textAlign:'center'}}>
                            <Card.Img variant="top" src={ZacPage} width="50px" fluid/>
                            <Card.Body>
                                <Card.Title>Zac Harris Personal Site</Card.Title>
                            <Card.Text>
                                This personal site was made with Gatsby.js & Ghost
                            </Card.Text>
                            <Button href="#" className="custom-btn">Go to project</Button>
                            </Card.Body>
                        </Card>


                        <Card style={{ width: '20rem', margin:'55px', textAlign:'center'}}>
                            <Card.Img variant="top" src={ZacPage} width="50px" fluid/>
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
