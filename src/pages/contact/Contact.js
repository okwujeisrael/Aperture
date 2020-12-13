import React from 'react';

import ContactMethod from './components/ContactMethod';
import Form from './components/Form';

const Contact = () => {
  return (
    <div className="dosis-normal text-center">
      <h3 className="text-blue-600 text-md tracking-wide pt-24">FIND US</h3>
      <h1 className="text-5xl tracking-wide dosis-bold pb-16">CONTACT</h1>
      <div className="flex flex-col items-center lg:flex-row lg:justify-around space-y-5 :space-y-0 px-16 mb-16">
        <ContactMethod
          icon="far fa-map"
          details="Hackney, London"
          title="ADDRESS"
        />
        <ContactMethod
          icon="far fa-envelope"
          details="contact@aperture.com"
          title="EMAIL"
        />
        <ContactMethod
          icon="fas fa-mobile-alt"
          details="+44203477889"
          title="PHONE"
        />
      </div>
      <Form />
    </div>
  )
}

export default Contact
