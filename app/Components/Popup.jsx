import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images to display in the slider
  const images = [
    '/printerone.png', 
    '/printertwo.png',
    '/printerthree.png',
    '/printerfour.png',
    '/printerfive.png',
  ];

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative">
      {/* Trigger link */}
      <button
        onClick={togglePopup}
        className="underline 2xl:ml-[-426px] 2xl:mt-[25px] xl:ml-[-426px] xl:mt-[25px]"
      >
        Where's the printer name?
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed z-50 bg-black bg-opacity-50"
          style={{ top: 0, left: 0, width: '100%', height: '100%' }} // Full screen overlay
        >
          <div
            className="bg-white p-4 rounded-lg w-full max-w-lg"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)', // Centering
            }}
          >
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
            >
              &times;
            </button>

            

            {/* Title and Instructions */}
            <div className="text-center mb-4">
              <h2 className="text-lg font-semibold">Find the product name</h2>
              <p className="text-[#000000] text-[18px] mb-4">
                Find the product name on the front of the printer, on a label inside the printer, or on the packaging.
              </p>
            </div>

            {/* Slider */}
            <div className="flex items-center justify-center relative">
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 p-2 text-blue-600 hover:text-blue-800"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              {/* Image */}
              <Image
                src={images[currentSlide]} // Current slide image
                alt={`Printer ${currentSlide + 1}`}
                height={300}
                width={300}
                className="object-cover mx-auto"
              />

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-0 z-10 p-2 text-blue-600 hover:text-blue-800"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-4">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                ></span>
              ))}
              <h1 className='underline 2xl:ml-[-263px] 2xl:mt-[25px] xl:ml-[-263px] xl:mt-[25px]'>My device is not listed</h1>
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default Popup;


