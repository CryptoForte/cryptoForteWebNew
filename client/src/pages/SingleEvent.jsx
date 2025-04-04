import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { eventList } from '../datas/events';
import EventsPageCarousel from "../components/EventsPageCarousel";


const SingleEvent = () => {

  const [currentSlide, setCurrentSlide] = useState(0); // Start with the first slide
  const { id } = useParams();
  const event = eventList.find(item => item.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  
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
    <div>
      <EventsPageCarousel />

      <section className="w-full bg-white px-4 py-8 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Event Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={event.img}
                alt={event.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <div className={`inline-block text-white px-3 py-1 rounded-md text-sm font-medium ${
                event.event_state === "LIVE" ? "bg-red-500" : 
                event.event_state === "UPCOMING" ? "bg-green-500" : "bg-blue-500"
              }`}>
                {event.event_state}
              </div>
              
              <h1 className="text-3xl font-bold">{event.name}</h1>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 font-semibold">{event.date}</p>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600">{event.address}</p>
              </div>

              <div className="pt-4">
                <h2 className="text-xl font-semibold mb-2">About This Event</h2>
                <p className="text-gray-700">{event.description || "Details about this exciting event coming soon!"}</p>
              </div>

              {/* Map Embed */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(event.address)}`}
                    allowFullScreen
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Other Events */}
      <section className="w-full bg-white px-4 py-4 md:py-8 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className='text-center my-4'>
              <h3 className='text-3xl font-bold mb-4'>Check Our Other Events</h3>
              <p className='text-md mx-28'>New to Web3? You're in the right palce. Join the CryptoForte Community for fun and engaging 
                engaging events - Twitter spaces, webinars and more. Learn, Connect and grow 
                with us, one step at a time!
              </p>
            </div>
            {/* Carousel Container */}
            <main className="relative overflow-hidden mt-12">
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
                          src={list.img}
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
                            to={`/events/${list.id}`}
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


    </div>
  )
}

export default SingleEvent
