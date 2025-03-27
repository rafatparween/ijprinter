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
        className="underline 2xl:ml-[-426px] 2xl:mt-[25px] xl:ml-[-230px] xl:mt-[25px]"
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
            className="bg-white p-8 rounded-lg w-full max-w-2xl"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
            }}
          >
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>

            {/* Title and Instructions */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Find the product name</h2>
              <p className="text-gray-700 text-[18px] mb-6">
                Find the product name on the front of the printer, on a label
                inside the printer, or on the packaging.
              </p>
            </div>

            {/* Slider */}
            <div className="flex items-center justify-center relative h-[60%]">
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-4 z-10 p-2 text-blue-600 hover:text-blue-800"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              {/* Image */}
              <Image
                src={images[currentSlide]}
                alt={`Printer ${currentSlide + 1}`}
                height={500}
                width={500}
                className="object-contain mx-auto"
              />

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-4 z-10 p-2 text-blue-600 hover:text-blue-800"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-6">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`h-3 w-3 rounded-full mx-2 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                ></span>
              ))}
            </div>
            <h1 className="underline 2xl:ml-[-262px] 2xl:mt-[25px] xl:ml-[-262px] xl:mt-[25px]">
              My device is not listed
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;



