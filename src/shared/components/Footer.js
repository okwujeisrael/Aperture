import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-purple-400 text-white text-center p-16 dosis-normal">
      <div>
        <a href="http://facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f m-2 hover:text-black"></i>
        </a>
        <a href="http://twitter.com" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter m-2 hover:text-black"></i>
        </a>
        <a href="http://linkedin.com" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in m-2 hover:text-black"></i>
        </a>
      </div>
      <div className="tracking-widest">
        &copy; 2020 Aperture. All rights reserved
      </div>
      
    </footer>
  )
}

export default Footer;
