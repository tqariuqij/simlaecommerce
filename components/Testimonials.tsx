import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      quote: 'This product is amazing!',
      author: 'John Doe',
      image:
        'https://res.cloudinary.com/johnte/image/upload/v1659439258/cld-sample.jpg',
    },
    {
      quote: 'I highly recommend it',
      author: 'Jane Smith',
      image:
        'https://res.cloudinary.com/johnte/image/upload/v1659439258/cld-sample.jpg',
    },
    {
      quote: 'It changed my life',
      author: 'Bob Williams',
      image:
        'https://res.cloudinary.com/johnte/image/upload/v1659439258/cld-sample.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const handlePrevClick = () => {
    setCurrentTestimonial(
      (currentTestimonial + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };
  return (
    // <div className='container w-full h-1/2 relative'>
    //   <div className='w-full min-h-full bg-gray-300 p-6 rounded-lg flex flex-col'>
    //     <motion.div
    //       className='w-full h-full flex flex-col'
    //       initial={{ x: 100 }}
    //       animate={{ x: 0 }}
    //       exit={{ x: 100 }}
    //       transition={{ duration: 0.5 }}
    //     >
    //       {testimonials.map((testimonial, index) => (
    //         <motion.div
    //           key={testimonial.author}
    //           className='w-full h-full flex items-center'
    //           style={{
    //             x: currentTestimonial === index ? 0 : 100,
    //             transition: { duration: 0.5 },
    //           }}
    //           initial={{ x: -100 }}
    //           animate={{ x: 0 }}
    //           exit={{ x: 100 }}
    //           variants={{
    //             initial: { x: -100 },
    //             enter: { x: 0 },
    //             exit: { x: 100 },
    //           }}
    //         >
    //           <img
    //             className='w-16 h-16 rounded-full mr-4'
    //             src={testimonial.image}
    //             alt={testimonial.author}
    //           />
    //           <div className='text-2xl font-bold text-gray-800'>
    //             {testimonial.quote}
    //                  <h3></h3>
    //             <p>{testimonial.quote}</p>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </motion.div>
    //     <div className='mt-4 flex justify-between items-center'>
    //       <button
    //         className='text-2xl font-bold text-gray-800'
    //         onClick={handlePrevClick}
    //       >
    //         &lt;
    //       </button>
    //       {testimonials.map((_, index) => (
    //         <div
    //           key={index}
    //           className={`w-4 h-4 rounded-full mr-2 bg-${
    //             index === currentTestimonial ? 'gray-800' : 'gray-600'
    //           }`}
    //         />
    //       )}
    //       <button
    //         className='text-2xl font-bold text-gray-800'
    //         onClick={handleNextClick}
    //       >
    //         &gt;
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className='container'>
      <div>
        <h1 className='font-bold text-6xl py-6'>
          What are our clients saying?
        </h1>
      </div>

      <div className='grid'></div>
    </div>
  );
};

export default Testimonials;
