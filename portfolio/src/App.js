import React from 'react'
import Nav from "./components/navigation"
import Header from"./components/header"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Footer from "./components/footer"
import "./styles/navigation.css"
import "./styles/header.css"
import "./styles/about.css"
import "./styles/skills.css"
import "./styles/projects.css"
import "./styles/footer.css"

import "../src/styles/App.css";

function App() {
  return (
    <div className="App">
        <Nav/>
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    
  );
}

export default App;



