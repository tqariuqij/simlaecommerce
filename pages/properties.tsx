import React from 'react';
import PropertyCard from '../components/PropertyCard';

interface Props {}

const properties = () => {
  return (
    <div className='flex min-h-screen flex-col top-20 relative m-4'>
      <div>
        <h1 className='font-bold text-6xl'>Our Listed Properties</h1>
      </div>

      <div className=''>
        {/* <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard /> */}
      </div>
    </div>
  );
};

export default properties;
