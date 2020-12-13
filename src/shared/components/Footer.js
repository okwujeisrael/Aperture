import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-purple-400 text-white text-center p-16 dosis-normal">
      <div>
        <span className="inline-block w-8 h-8 rounded-full m-2 border-2 border-white hover:text-black">
          <a href="http://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </span>
        <span className="inline-block w-8 h-8 rounded-full m-2 border-2 border-white hover:text-black">
          <a href="http://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </span>
        <span className="inline-block w-8 h-8 rounded-full m-2 border-2 border-white hover:text-black">
          <a href="http://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </span>
      </div>
      <div className="tracking-widest">
        &copy; 2020 Aperture. All rights reserved
      </div>
      
    </footer>
  )
}

export default Footer;
