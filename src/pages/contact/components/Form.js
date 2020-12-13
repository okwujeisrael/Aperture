import React from 'react';

const Form = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 text-left px-16 md:px-64 pt-28">
      <p className="text-3xl mb-8 dosis-bold">SEND US A MESSAGE</p>
      <form className="text-xl">
        <div className="mb-4">
          <label htmlFor="name" name="name">Name</label>
        </div>
        <div className="mb-4">
          <input type="text" id="name" className="w-full h-10" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" name="email">Email</label>
        </div>
        <div className="mb-4">
          <input type="text" id="email" className="w-full h-10"/>
        </div>
        <div className="mb-4">
          <label htmlFor="message" name="messsage">Message</label>
        </div>
        <div className="mb-8">
          <textarea name="message" id="message" cols="30" rows="10" className="w-full h-20"></textarea>
        </div>
        <button type="submit" className="w-full h-16 block bg-gray-700 text-white dosis-bold tracking-wider hover:bg-purple-400">SUBMIT</button>
      </form>
    </div>
  )
}

export default Form;
