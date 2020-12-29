import React, { useState } from 'react';

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [alert, setAlert] = useState(false);

  const formDetails = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userDetails.name && userDetails.email && userDetails.message) {
      setAlert(true);
    }

    setUserDetails({
      ...userDetails,
      name: '',
      email: '',
      message: ''
    });

    setTimeout(() => setAlert(false), 5000);
  }
 
  return (
    <div className="w-screen h-screen bg-gray-100 text-left px-16 md:px-64 pt-28">
      <p className="text-3xl mb-8 dosis-bold">SEND US A MESSAGE</p>
      <form className="text-xl">
        <div className="mb-4">
          <label htmlFor="name" name="name">Name</label>
        </div>
        <div className="mb-4">
          <input name="name" type="text" id="name" value={userDetails.name} onChange={formDetails} className="w-full h-10 px-4" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" name="email">Email</label>
        </div>
        <div className="mb-4">
          <input name="email" type="text" id="email" value={userDetails.email} onChange={formDetails} className="w-full h-10 px-4" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" name="messsage">Message</label>
        </div>
        <div className="mb-8">
          <textarea name="message" id="message" cols="30" rows="10" value={userDetails.message} onChange={formDetails} className="w-full h-20 p-4"></textarea>
        </div>
        <button type="submit" className="w-full h-16 block bg-gray-700 text-white dosis-bold tracking-wider hover:bg-purple-400" onClick={handleSubmit}>SUBMIT</button>
        {alert && (
          <p className="text-xl bg-green-700 text-white mt-4 p-2">Message sent! We'll get back to you soon.</p>
        )}
      </form>
    </div>
  )
}

export default Form;
