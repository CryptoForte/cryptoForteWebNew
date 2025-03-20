import  { useState, useEffect } from "react";



const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      { content: "Slide 1", color: "#ffcccc" },
      { content: "Slide 2", color: "#ccffcc" },
      { content: "Slide 3", color: "#ccccff" },
      { content: "Slide 4", color: "#ffccff" },
      { content: "Slide 5", color: "#ccffff" },
    ];

  // Auto-advance slides every 45 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 45000); // 45 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle manual slide navigation
  const moveSlide = (direction) => {
    setCurrentSlide((prev) => {
      if (direction === "next") {
        return (prev + 1) % slides.length;
      } else {
        return (prev - 1 + slides.length) % slides.length;
      }
    });
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Carousel Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/3 p-4"
            style={{
              opacity: index === currentSlide ? 1 : 0.5,
              transform: `scale(${index === currentSlide ? 1 : 0.9})`,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <div className="h-64 flex items-center justify-center text-white text-2xl font-bold rounded-lg shadow-lg" style={{ backgroundColor: slide.color }}>
              {slide.content}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        onClick={() => moveSlide("prev")}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        onClick={() => moveSlide("next")}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;