import React from 'react';

interface Props {
  title: string;
  price: number;
}

const PropertyCard = ({ house }) => (
  <div
    className='rounded-lg bg-center bg-no-repeat bg-cover shadow-md max-w-full h-[30rem] m-6 flex place-items-end'
    style={{
      backgroundImage:
        'url(https://res.cloudinary.com/johnte/image/upload/v1606363972/2gg_gqehno.jpg)',
    }}
  >
    {console.log(`card shit ${house}`)}
    <div className='flex flex-col text-blue-600 text-left m-2 mb-4'>
      <h1 className='font-bold text-6xl'>{house.name}</h1>
      <div className='bg-white rounded-sm p-2 flex flex-row mb-2 w-max ring-red-400 text-xl'>
        <p className=''>Rent | </p>{' '}
        <p className='text-red-600'>{house.price}m</p>
      </div>
      <div className='text-lg hover:text-xl hover:cursor-pointer'>See more</div>
    </div>
  </div>
);

export default PropertyCard;
