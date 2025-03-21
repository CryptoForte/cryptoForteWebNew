import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EventsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Start with the first slide

  const eventList = [
    {
      id: 1,
      name: "Keni Golf",
      address: "Lagos, Nigeria",
      date: "12th April, 2025",
      link: '/seemore',
      img: "",
      event_state: "LIVE"
    },
    {
      id: 2,
      name: "Dame Rafer",
      address: "Ife, Nigeria",
      date: "31th June, 2025",
      link: '/seemore',
      img: "",
      event_state: "UPCOMING"
    },
    {
      id: 3,
      name: "Keni Golf",
      address: "Lagos, Nigeria",
      date: "12th April, 2025",
      link: '/seemore',
      img: "https://pixabay.com/photos/audience-band-concert-crowd-1853662/",
      event_state: "COMPLETED"
    },
    {
      id: 4,
      name: "Keni Golf",
      address: "Lagos, Nigeria",
      date: "12th April, 2025",
      link: '/seemore',
      img: "",
      event_state: "UPCOMING"
    },
    {
      id: 5,
      name: "Keni Golf",
      address: "Lagos, Nigeria",
      date: "12th April, 2025",
      link: '/seemore',
      img: "",
      event_state: "LIVE"
    },
    {
      id: 6,
      name: "Keni Golf",
      address: "Lagos, Nigeria",
      date: "12th April, 2025",
      link: '/seemore',
      img: "",
      event_state: "UPCOMING"
    },
  ];

  // Number of slides to show based on screen size
  const getSlidesToShow = () => {
    if (window.innerWidth >= 1024) return 3; // Large screens
    if (window.innerWidth >= 768) return 2; // Medium screens
    return 1; // Small screens
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  // Update slidesToShow on window resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Next slide function
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (eventList.length - slidesToShow + 1));
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? eventList.length - slidesToShow : prev - 1
    );
  };

  // Auto-slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [currentSlide, slidesToShow]);

  return (
    <section className="w-full bg-white px-4 py-4 md:py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="h-12 mb-4 justify-between items-center flex">
          <h2 className="text-2xl font-bold ">
            Events
          </h2>
        </header>

        {/* Carousel Container */}
        <main className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {eventList.map((list) => (
              <div
                key={list.id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-2 md:p-4" // Responsive width
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg ">
                  <div className="relative">
                    <img
                      className="w-full"
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                      alt="Product Image"
                    />
                    <div className={`absolute top-0 right-0  text-white px-2 py-1 m-2 rounded-md text-sm font-medium ${list.event_state === "LIVE" ? `bg-red-500` : list.event_state === "UPCOMING" ? `bg-green-500` : `bg-blue-500`}`}>
                      {list.event_state}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{list.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{list.address}</p>
                    <p className="text-gray-600 text-sm mb-4 font-semibold">{list.date}</p>
                    <div className="flex items-center justify-between">
                      <Link
                        to={list.link}
                        className="font-semibold cursor-pointer"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Navigation Arrows */}
        <div className="flex justify-end lg:px-20 mt-4">
          <div className="flex gap-5">
            <button
              onClick={prevSlide}
              className="px-3 py-2 bg-white rounded-sm border-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaArrowLeft className="text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="px-3 py-2 bg-white rounded-sm border-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaArrowRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;