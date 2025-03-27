"use client";
import React, { useState, useEffect } from "react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
        leftImage: "/imageforr.jpg", rightImage: "/imageone.webp",  title: "Print in High Definition",
        subtitle: "Get Your Prints in Stunning Clarity",
      },
    {
      leftImage: "/imagetwo.webp",
      rightImage: "/imagethree.jpg", title: "Print Your Ideas",
      subtitle: "Affordable and Reliable Printers",
    },
    {
      leftImage: "/imageseven.jpg", rightImage: "/imageeight.webp",  title: "Print in High Definition",
      subtitle: "Get Your Prints in Stunning Clarity",
    },
    {
      leftImage: "/imagefive.webp",rightImage:"/imagesix.jpg",  title: "Quality Printers",
      subtitle: "Revolutionize Your Printing",
    },
  ];


  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };


  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };


  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 h-[580px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full bg-gradient-to-r from-blue-500 via-teal-600 to-indigo-700 flex flex-row justify-between items-center py-10 px-20">
            <div className="relative w-[30%] h-[400px]">
              <img
                src={slide.leftImage}
                alt="Left Slide"
                className="w-full h-full object-cover rounded-lg mt-[41px]"
              />
            </div>
            <div className="text-center flex-1 max-w-[676px]">
              <h1 className="font-bold text-5xl mb-4">{slide.title}</h1>
              <p className="text-lg mb-6">{slide.subtitle}</p>
              <button className="bg-black text-white px-6 py-3 rounded-full">
                Shop Now
              </button>
            </div>
            <div className="relative w-[30%] h-[400px]">
              <img
                src={slide.rightImage}
                alt="Right Slide"
                className="w-full h-full object-cover rounded-lg mt-[41px]"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
