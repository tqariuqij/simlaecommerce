import React from 'react';
import AgentCard from '../components/AgentCard';

interface Props {}

const About = () => {
  const bgImage =
    'https://res.cloudinary.com/johnte/image/upload/v1654675221/constructionSupplies_eiqbi2.jpg';
  return (
    <div className='flex min-h-screen flex-col top-20 relative m-4'>
      <div>
        <h1 className='font-bold text-6xl text-blue-700'>Who are we</h1>
      </div>

      <div className='container'>
        <div
          className='relative'
          style={{ minHeight: '50vh', backgroundImage: `url(${bgImage})` }}
        >
          <div className='flex px-4 pt-20 items-center justify-center lg:pt-40 lg:px-10 '>
            <div className='flex flex-col mt-30'>
              <h1 className='font-bold text-3xl text-white lg:text-6xl'>
                This is the Simla group
              </h1>
              <p className='font-bold text-gray-200 text-lg lg:text-2xl'>
                Simla is a full-service real estate company dedicated to
                providing our clients with exceptional service and expertise in
                all aspects of the industry. Whether you're looking to buy,
                sell, or rent a property, our team of experienced agents is here
                to guide you through the process and help you achieve your real
                estate goals.
              </p>
            </div>
          </div>
        </div>

        <div className='container'>
          <div>
            <h1 className='font-bold text-3xl'>Meet our team</h1>
          </div>

          <div className=''>
            <AgentCard />
            <AgentCard />
            <AgentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
