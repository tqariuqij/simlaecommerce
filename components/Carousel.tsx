import React from 'react';
import Slider from 'react-animated-slider';

interface Props {}

const content = [
  {
    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
    description:
      'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
    button: 'Read More',
    image: 'https://i.imgur.com/ZXBtVw7.jpg',
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png',
  },
  {
    title: 'Tortor Dapibus Commodo Aenean Quam',
    description:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
    button: 'Discover',
    image: 'https://i.imgur.com/DCdBXcq.jpg',
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png',
  },
  {
    title: 'Phasellus volutpat metus',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    button: 'Buy now',
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png',
  },
];

const Carousel = () => {
  return (
    <div className='max-w-full'>
      <Slider className='slider-wrapper'>
        {content.map((item, index) => (
          <div
            key={index}
            className='slider-content'
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className='inner grid place-items-center px-4 lg:px-10 lg:pt-10'>
              <h1 className='flex flex-wrap mt-10 font-black text-6xl text-yellow-600 '>
                {item.title}
              </h1>
              <p className='flex flex-wrap mt-10 text-gray-300'>
                {item.description}
              </p>
              <button className='mt-10'>{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
