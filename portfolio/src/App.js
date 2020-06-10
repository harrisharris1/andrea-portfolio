import React from 'react'
import Nav from "./components/navigation"
import Header from"./components/header"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import "./styles/navigation.css"
import "./styles/header.css"
import "./styles/about.css"
import "./styles/skills.css"

import "../src/styles/App.css";

function App() {
  return (
    <div className="App">
        <Nav/>
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
    
  );
}

export default App;



