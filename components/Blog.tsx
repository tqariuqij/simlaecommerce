import React from 'react';
import NewsCard from './NewsCard';

interface Props {}

const Blog = () => {
  return (
    <div className='container'>
      <div>
        <h1 className='font-bold text-6xl py-6'>Blog card</h1>
      </div>
      <div className='lg:grid grid-cols-2'>
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default Blog;
