import React from 'react';
import LinkedIn from '../images/linkedin.svg'
import Github from '../images/github.svg'

const Footer = () => (
  <div className='FooterContainer'>
    <div className='FooterName'>
      <h2>
        Andrea Harris<span className='color-dot'>.</span>
      </h2>
      <span className='socialMedia'>
      <a target='_blank' href="https://www.linkedin.com/in/asharris12/"> <img src={LinkedIn} width='75px' alt='LinkedIn icon'></img> </a>
      <a target='_blank' href="https://github.com/harrisharris1"> <img src={Github} width='60px' alt='Github icon'></img> </a>
       
      </span>
    </div>
  </div>
);

export default Footer;
