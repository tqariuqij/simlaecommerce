import React from 'react';
import PropertyCard from './PropertyCard';
import { client } from '../lib/client';

interface Props {
  title: string;
  price: number;
}

const Properties = ({ houses }: Props) => (
  <div className='container'>
    <div className='mb-6'>
      <h1 className='font-bold text-6xl py-4'>Latest Properties</h1>
    </div>
    <div className='lg:grid grid-cols-2'>
      {/* {properties.slice(0, 2).map((property: any) => (
          <PropertyCard rent={property} />
        ))} */}
      {console.log(houses)}

      {houses?.map((house) => house.name)}
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "houses"]';

  const houses = await client.fetch(`*[_type == "houses"]`);

  return {
    props: {
      houses,
    },
  };
};
export default Properties;
