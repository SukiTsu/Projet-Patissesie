// lib_module/src/components/organismes/Carousel.tsx

import React, { useState, useEffect } from 'react';
import '../assets/style/styleCarrousel.css';

interface CarouselProps {
  images: string[];
  interval?: number;
  showControls?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000, showControls = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="carousel-container">
    {/* Id pour les tests Jest : */}
      <div data-testid="carousel"
        className="carousel-slide" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Carousel image ${index + 1}`}
            className="carousel-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/10.png';
              target.alt = 'Erreur sur le carousel';
            }}
          />
        ))}
      </div>
      {showControls && (
        <>
          <button 
            onClick={goToPrev} 
            className="carousel-button carousel-button-prev"
          >
            Prev
          </button>
          <button 
            onClick={goToNext} 
            className="carousel-button carousel-button-next"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;