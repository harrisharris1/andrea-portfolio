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
            <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={ZacPage} width="400px" />
                 <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                       <Button variant="primary">Go somewhere</Button>
                 </Card.Body>
            </Card>
                

            </div>
        </div>
    </div>
)

export default Projects
