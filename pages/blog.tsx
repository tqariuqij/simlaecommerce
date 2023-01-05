import React from 'react';
import NewsCard from '../components/NewsCard';

interface Props {}

const blog = () => {
  return (
    <div className='flex min-h-screen flex-col top-20 relative m-4'>
      <div>
        <h1 className='font-bold text-4xl'>Our Blog</h1>
      </div>

      <div className=''>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default blog;
