import React from 'react';

const AboutUs = () => {
  return ( 
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white py-16 px-4 md:px-8">
      <div className="text-center">
        <p className="text-xl font-dancing text-purple-300 font-medium ">About us</p>
        <h2 className="text-[42] md:text-5xl font-bold mt-2 ">
          We are here to make your product
          <br />
          look more elegant and stylish
        </h2>
      </div>

      {/* Content Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10 xl:ml-[-264px]">
        {/* Image Container */}
        <div className="relative w-full md:w-1/2">
          <div className="relative p-4 bg-gradient-to-br from-purple-800 via-blue-800 to-gray-800 rounded-xl overflow-hidden rounded-xl overflow-visible h-[400px] w-[550px] pl-8 pt-8 pr-0 ml-[300px] 2xl:ml-[419px]">
            <img
              src="/aboutus.jpg"
              alt="Team working"
              className="w-[564px] h-[410px] object-cover rounded-xl md:-mr-20"
            />
          </div>
          {/* Decorative Dots */}  
          <div className="absolute -bottom-8 -left-8 animate-float">
            {/* <div className="grid grid-cols-2 gap-2">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-green-400 rounded-full"
                ></div>
              ))}
            </div> */}
            <img
              src="/dot.png"
              alt="Team working"
              className='h-[100px] w-[33px] 2xl:ml-[513px]'
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left space-y-4">
          <p className="text-[white] w-[564px] h-[72px]">
            Kindling the energy hidden in matter the only home we’ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
                  <span>✓</span>
                </div>
              </div>
              <p className="ml-2 text-[white]">
                Sea of Tranquility dispassionate observer dream.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
                  <span>✓</span>
                </div>
              </div>
              <p className="ml-2 text-[white]">
                Muse about as a patch of light brain is the seed of intelligence.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
                  <span>✓</span>
                </div>
              </div>
              <p className="ml-2 text-[white]">
                The only home we’ve ever known dream of the mind’s eye.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-10 flex justify-center space-x-4 w-[734px] rounded-[20px] ml-[864px] mt-[-75px] bg-gradient-to-r from-purple-500 to-blue-500 xl:ml-[613px] 2xl:ml-[761px]">
        <div className="flex flex-col items-center p-4  text-white rounded-lg ">
          <h3 className="text-3xl font-bold">150+</h3>
          <p>Project Delivered</p>
        </div>
        <div className="flex flex-col items-center p-4 text-white rounded-lg">
          <h3 className="text-3xl font-bold">180+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="flex flex-col items-center p-4  text-white rounded-lg">
          <h3 className="text-3xl font-bold">5+</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;