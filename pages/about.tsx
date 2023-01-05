import React from 'react';
import AgentCard from '../components/AgentCard';

interface Props {}

const About = () => {
  return (
    <div className='flex min-h-screen flex-col top-20 relative m-4'>
      <div>
        <h1 className='font-bold text-6xl text-blue-700'>Who are we</h1>
      </div>

      <div className='container h-1/2'>
        <div className='grid grid-cols-2'>
          <div className='flex items-center align-middle'>
            <p className='font-bold text-lg'>this is simla group</p>
          </div>
          <img
            src='https://res.cloudinary.com/johnte/image/upload/v1654675221/constructionSupplies_eiqbi2.jpg'
            alt='about'
          />
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
