import React from 'react';

interface Props {}

const TestimonialCard = () => {
  return (
    <div
      className='rounded-lg bg-center bg-no-repeat bg-cover shadow-md max-w-full h-[30rem] m-6'
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/johnte/image/upload/v1606363972/2gg_gqehno.jpg)',
      }}
    >
      <div>
        <p>this the property card</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
