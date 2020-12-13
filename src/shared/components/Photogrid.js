import React from 'react';

const Photogrid = () => {
  return (
    <div className="w-screen h-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-2 px-4 pt-16 pb-20 bg-purple-400">
      <div className="md:w-1/3 h-96 flex space-x-2">
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src="/homepage/1.jpg" alt="one" />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src="/homepage/2.jpg" alt="two" />
          </div>
        </div>
        <div className="w-1/2 h-full border-8 border-black hover:border-white">
          <img className="w-full h-full object-cover gray-img" src="/homepage/3.jpg" alt="three" />
        </div>
      </div>

      <div className="md:w-1/3 h-96 flex space-x-2">
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src="/homepage/4.jpg" alt="four" />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src="/homepage/5.jpg" alt="five" />
          </div>
        </div>
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src="/homepage/6.jpg" alt="six" />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src="/homepage/7.jpg" alt="seven" />
          </div>
        </div>
      </div>

      <div className="md:w-1/3 h-96 flex space-x-2">
        <div className="w-1/2 h-full border-8 border-black hover:border-white">
          <img className="w-full h-full object-cover gray-img" src="/homepage/8.jpg" alt="eight" />
        </div>
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src="/homepage/9.jpg" alt="nine" />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img className="w-full h-full object-cover gray-img" src="/homepage/10.jpg" alt="ten" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photogrid;
