import React from 'react';
import LinkedIn from '../images/linkedin.svg'

const Footer = () => (
  <div className='FooterContainer'>
    <div className='FooterName'>
      <h2>
        Andrea Harris<span className='color-dot'>.</span>
      </h2>
      <span>
      <a target='_blank' href="https://www.linkedin.com/in/asharris12/"> <img src={LinkedIn} width='75px' alt='LinkedIn icon'></img> </a>
       
      </span>
    </div>
  </div>
);

export default Footer;
