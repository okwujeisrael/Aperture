import React from 'react'

const Card = ({ plan, price, noOfOutfits, noOfPhotos }) => {
  return (
    <div className="w-80 h-96 border border-gray-200 p-16 shadow-xl animate__animated animate__pulse animate__delay-2s">
      <h3 className="text-gray-400 text-xl">{plan}</h3>
      <p className="dosis-bold text-5xl pt-4 pb-4">
        <sup>£</sup>{price}
      </p>
      <ul className="list-none text-gray-400">
        <li className="pb-4">{noOfOutfits} outfit changes</li>
        <li className="pb-4">{noOfPhotos} photographs</li>
        <li className="pb-4">Digital copy</li>
        <li className="pb-4">In Studio Session</li>
      </ul>

    </div>
  )
}

export default Card
