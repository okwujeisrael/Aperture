import React from 'react'

const ContactMethod = ({ icon, details, title }) => {
  return (
    <div className="flex w-96 pl-24 animate__animated animate__slideInUp">
      <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
        <i className={`${icon} text-yellow-500 fa-2x`}></i>
      </div>
      <div className="text-left pl-8 pt-1">
        <p className="text-gray-600 dosis-bold text-lg pb-2">{title}</p>
        <p className="text-gray-400 text-sm">{details}</p>
      </div>
      
    </div>
  )
}

export default ContactMethod
