import React from 'react';

import one from '../../Assets/homepage/one.jpg';
import two from '../../Assets/homepage/two.jpg';
import three from '../../Assets/homepage/three.jpg';
import four from '../../Assets/homepage/four.jpg';
import five from '../../Assets/homepage/five.jpg';
import six from '../../Assets/homepage/six.jpg';
import seven from '../../Assets/homepage/seven.jpg';
import eight from '../../Assets/homepage/eight.jpg';
import nine from '../../Assets/homepage/nine.jpg';
import ten from '../../Assets/homepage/ten.jpg';



const Photogrid = ({ handleClick }) => {
  return (
    <div className="w-screen h-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-2 px-4 pt-16 pb-20 bg-purple-400">
      <div className="md:w-1/3 h-96 flex space-x-2">
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src={one} alt="one" name="1" onClick={handleClick} />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src={two} alt="two"  name="2" onClick={handleClick} />
          </div>
        </div>
        <div className="w-1/2 h-full border-8 border-black hover:border-white">
          <img className="w-full h-full object-cover gray-img" src={three} alt="three" name="3" onClick={handleClick} />
        </div>
      </div>

      <div className="md:w-1/3 h-96 flex space-x-2">
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src={four} alt="four" name="4" onClick={handleClick} />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src={five} alt="five" name="5" onClick={handleClick} />
          </div>
        </div>
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src={six} alt="six" name="6" onClick={handleClick} />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src={seven} alt="seven" name="7" onClick={handleClick} />
          </div>
        </div>
      </div>

      <div className="md:w-1/3 h-96 flex space-x-2">
        <div className="w-1/2 h-full border-8 border-black hover:border-white">
          <img className="w-full h-full object-cover gray-img" src={eight} alt="eight" name="8" onClick={handleClick} />
        </div>
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src={nine} alt="nine" name="9" onClick={handleClick} />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src={ten} alt="ten" name="10" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photogrid;
