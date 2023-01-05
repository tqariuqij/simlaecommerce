import React from 'react';

interface Props {}

const AgentCard = () => {
  return (
    <div
      className='rounded-lg bg-center bg-no-repeat bg-cover shadow-md max-w-full h-[30rem] m-6'
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/johnte/image/upload/v1659439258/cld-sample.jpg)',
      }}
    >
      <div className='w-full h-full bg-blue-400 bg-opacity-80 rounded-lg p-2'>
        <div className=''>
          <h1>Secily WQarire</h1>
          <p className='text-left mb-2'>
            this the agent card Sed porttitor lectus nibh, Cras ultricies ligula
            sed magna dictum porta two
          </p>
          <p className='text-left mb-2'>
            <span className='font-bold'>Phone:</span> +254 23333333
          </p>
          <p className='text-left mb-2'>
            <span className='font-bold'>Email:</span> seci@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
