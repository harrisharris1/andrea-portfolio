import React from 'react';
import Css from '../images/css.svg';
import Html from '../images/html.svg';
import Js from '../images/js.svg';
import reactjs from '../images/react.svg';
import gatsbyjs from '../images/gatsby.png';
import nodejs from '../images/nodejs.svg';
import less from '../images/less.svg';
import yarn from '../images/yarn.svg';
import git from '../images/git.svg';
import npm from '../images/npm.svg';
import vscode from '../images/vscode.svg';
import Sass from '../images/sass.svg';
import Github from '../images/github.svg';
import Mysql from '../images/mysql.svg';
import '../styles/App.css';

const Skills = () => (
  <div className='SkillContainer'>
    <h3>My Tech Skills</h3>
    <div className='Skill-List'>
      <span className='skill'>
        <p>CSS</p>
        <img src={Css} width='85px' alt='css icon'></img>
      </span>

      <span className='skill'>
        <p>HTML</p>
        <img src={Html} width='75px' alt='html icon'></img>
      </span>

      <span className='skill'>
        <p>JavaScript</p>
        <img src={Js} width='75px' alt='js icon'></img>
      </span>

      <span className='skill'>
        <p>React.js</p>
        <img src={reactjs} width='75px' alt='react icon'></img>
      </span>

      <span className='skill'>
        <p>Node.js</p>
        <img src={nodejs} width='75px' alt='node icon'></img>
      </span>

      <span className='skill'>
        <p>Gatsby.js</p>
        <img src={gatsbyjs} width='75px' alt='gatsby icon'></img>
      </span>

      <span className='skill'>
        <p>Less</p>
        <img src={less} width='75px' alt='less icon'></img>
      </span>

      <span className='skill'>
        <p>Sass</p>
        <img src={Sass} width='75px' alt='sass icon'></img>
      </span>

      <span className='skill'>
        <p>Yarn</p>
        <img src={yarn} width='75px' alt='yarn icon'></img>
      </span>

      <span className='skill'>
        <p>Git</p>
        <img src={git} width='75px' alt='git icon'></img>
      </span>

      <span className='skill'>
        <p>Npm</p>
        <img src={npm} width='75px' alt='npm icon'></img>
      </span>
      <span className='skill'>
        <p>Visual SC</p>
        <img src={vscode} width='75px' alt='vscode icon'></img>
      </span>

      <span className='skill'>
        <p>Github</p>
        <img src={Github} width='75px' alt='github icon'></img>
      </span>

      <span className='skill'>
        <p>MySQL</p>
        <img src={Mysql} width='85px' alt='sql icon'></img>
      </span>
    </div>
  </div>
);

export default Skills;
