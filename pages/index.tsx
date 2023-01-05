import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Properties from '../components/Properties';
import OnSaleProperty from '../components/OnSaleProperty';
import { client } from '../lib/client';
import PropertyCard from '../components/PropertyCard';
import Agents from '../components/Agents';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';

const Home: NextPage = ({ houses, lands }) => (
  <div className='flex min-h-screen flex-col items-center justify-center py-2'>
    <Head>
      <title>Simla Real Estate</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='flex max-w-full flex-1 flex-col items-center justify-center px-20 text-center'>
      <Carousel />

      <Services />

      <div className='container'>
        <div className='mb-6'>
          <h1 className='font-bold text-6xl py-4'>Latest Properties</h1>
        </div>
        <div className='lg:grid grid-cols-2'>
          {houses?.slice(0, 2).map((house: any) => (
            <PropertyCard house={house} />
          ))}

          {houses?.map((house) => house.name)}
        </div>
      </div>

      <div className='container'>
        <div className='mb-6'>
          <h1 className='font-bold text-6xl py-4'>Land for sale</h1>
        </div>
        <div className='lg:grid grid-cols-2'>
          {lands?.slice(0, 2).map((land: any) => (
            <PropertyCard house={land} />
          ))}

          {houses?.map((house) => house.name)}
        </div>
      </div>

      <Agents />

      <Blog />

      <Testimonials />
    </main>

    <footer className='flex h-24 w-full items-center justify-center border-t'>
      <a
        className='flex items-center justify-center gap-2'
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
      </a>
    </footer>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "houses"]';

  const houses = await client.fetch(`*[_type == "houses"]`);
  const query1 = '*[_type == "land"]';

  const lands = await client.fetch(query1);

  return {
    props: {
      houses,
      lands,
    },
  };
};

export default Home;
