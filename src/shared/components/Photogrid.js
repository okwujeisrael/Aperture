import React from "react";

const Photogrid = ({ handleClick }) => {
  const imgBaseUrl =
    "https://aperture2020.s3.eu-west-2.amazonaws.com/homepage/";

  return (
    <div className="w-screen h-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-2 px-4 pt-16 pb-20 bg-purple-400">
      <div className="md:w-1/3 h-96 flex space-x-2">
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img
              className="w-full h-full object-cover gray-img"
              src={imgBaseUrl + "one.jpg"}
              alt="one"
              name="1"
              onClick={handleClick}
            />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img
              className="w-full h-full object-cover gray-img"
              src={imgBaseUrl + "two.jpg"}
              alt="two"
              name="2"
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="w-1/2 h-full border-8 border-black hover:border-white">
          <img
            className="w-full h-full object-cover gray-img"
            src={imgBaseUrl + "three.jpg"}
            alt="three"
            name="3"
            onClick={handleClick}
          />
        </div>
      </div>

      <div className="md:w-1/3 h-96 flex space-x-2">
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img
              className="w-full h-full object-cover gray-img"
              src={imgBaseUrl + "four.jpg"}
              alt="four"
              name="4"
              onClick={handleClick}
            />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img
              className="w-full h-full object-cover gray-img"
              src={imgBaseUrl + "five.jpg"}
              alt="five"
              name="5"
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img
              className="w-full h-full object-cover gray-img"
              src={imgBaseUrl + "six.jpg"}
              alt="six"
              name="6"
              onClick={handleClick}
            />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img
              className="w-full h-full object-cover gray-img"
              src={imgBaseUrl + "seven.jpg"}
              alt="seven"
              name="7"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>

      <div className="md:w-1/3 h-96 flex space-x-2">
        <div className="w-1/2 h-full border-8 border-black hover:border-white">
          <img
            className="w-full h-full object-cover gray-img"
            src={imgBaseUrl + "eight.jpg"}
            alt="eight"
            name="8"
            onClick={handleClick}
          />
        </div>
        <div className="w-1/2 h-full space-y-2">
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img
              className="w-full h-full object-cover gray-img"
              src={imgBaseUrl + "nine.jpg"}
              alt="nine"
              name="9"
              onClick={handleClick}
            />
          </div>
          <div className="w-full h-1/2 border-8 border-black hover:border-white">
            <img
              className="w-full h-full object-cover gray-img"
              src={imgBaseUrl + "ten.jpg"}
              alt="ten"
              name="10"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photogrid;
