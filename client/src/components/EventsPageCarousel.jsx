import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { eventList } from '../datas/events';

const EventsPageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventList.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? eventList.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="w-full bg-white px-4 py-4 md:py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <main className="relative overflow-hidden rounded-lg shadow-lg">
          {/* Header - Centered "Our Events" title */}
          <div className="absolute top-0 left-0 right-0 z-10 flex justify-center pt-6">
            <h2 className="text-3xl font-bold text-white px-6 py-2 rounded-lg">
              Our Events
            </h2>
          </div>

          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {eventList.map((list) => (
              <div key={list.id} className="flex-shrink-0 w-full relative">
                {/* Background image with full-card gradient overlay */}
                <div className="relative h-96">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${list.img})`}}
                  />
                  {/* Full-card gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent" />
                  
                  

                  {/* Content positioned absolutely to appear above gradient */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <h3 className="text-3xl font-bold mb-1 tracking-wider">{list.name}</h3>
                    <p className="text-gray-200 font-semibold text-sm mb-1">{list.address}</p>
                    <p className="text-red-300 text-sm mb-4">{list.date}</p>
                    <Link
                      to={`/events/${list.id}`}
                      className="inline-block w-fit bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows Container */}
          <div className="absolute bottom-6 right-6 flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-3 bg-gray-600 bg-opacity-80 hover:bg-opacity-100 transition-all rounded-tl-xl rounded-br-md text-white"
            >
              <FaArrowLeft className="text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-gray-600 bg-opacity-80 hover:bg-opacity-100 transition-all rounded-tl-xl rounded-br-md text-white"
            >
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default EventsPageCarousel;