import React from 'react';
import Card from './components/Card';

const Pricing = () => {
  return (
    <div className="dosis-normal text-center">
      <h1 className="text-5xl dosis-bold pt-32 pb-16">PRICING PLANS</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-center space-y-5 md:space-y-0 md:space-x-10 mb-16">
        <Card 
          plan="PLATINUM" 
          price={299} 
          noOfOutfits={2} 
          noOfPhotos={10}
        />
        <Card
          plan="SILVER" 
          price={399} 
          noOfOutfits={5} 
          noOfPhotos={20}
        />
        <Card
          plan="GOLD" 
          price={499} 
          noOfOutfits={10} 
          noOfPhotos={30}
        />
      </div>
    </div>
  )
}

export default Pricing;
