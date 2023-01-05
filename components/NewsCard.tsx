import React from 'react';

interface Props {}

const NewsCard = () => {
  return (
    <div
      className='rounded-lg bg-center bg-no-repeat bg-cover shadow-md max-w-full h-[30rem] m-6 flex place-items-end'
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/johnte/image/upload/v1606363972/2gg_gqehno.jpg)',
      }}
    >
      <div className='flex flex-col text-blue-600 text-left m-2 mb-4'>
        <div className='bg-black rounded-lg p-2 flex flex-row mb-2 w-max ring-red-400 text-xl'>
          <p className=''>Real Estate</p>
        </div>
        <h1 className='font-bold text-4xl'>State of real estate in KENYA</h1>
        <div className='text-lg hover:text-xl hover:cursor-pointer'>
          Read more
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
