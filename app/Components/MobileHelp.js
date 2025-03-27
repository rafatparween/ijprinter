import React from 'react';
import Image from 'next/image';

const MobileHelp = () => {
  return (
    <div className="bg-[#F0F0F0] flex flex-col items-center justify-center py-8">
      <div className="flex flex-col w-full max-w-6xl mx-auto px-4">
        
        {/* Left Side - Text Section */}
        <div className="flex flex-col w-full p-4 mt-4">
          <h1 className="text-2xl font-bold mb-4 text-gray-500">You're Not Alone,</h1>
          <h1 className='text-3xl text-[#1C8DCE] mt-2'>We're Here To Help</h1>
          <p className="text-base mb-4 text-black mt-4">
            Feeling Lonely With A Problem? You Don’t Have To Deal With It All By Yourself.
          </p>
          <p className="text-base mb-4 text-black">
            We Get That Problems Can Be Tough, But We’re Here For You. Just Give Us A Call, And We’ll Be Like A Helpful Friend,
            Ready To Sort Out Your Issues. We’ll Make Sure To Put Your Problems At The Top Of Our List.
          </p>

          {/* Live Chat Support Box */}
          <div className="bg-white rounded-lg shadow-md p-4 mt-6 w-full">
            <Image
              src="/chaticon.png" 
              alt="Support Agents"
              width={100}
              height={100}
              objectFit="cover"
              className="mx-auto"
            />
            <div className="flex items-center mb-4">
              <span className="text-gray-700">Live chat support provides you with the opportunity to engage in real-time, interactive conversations with dedicated support agents.</span>
            </div>
            <button className="bg-[#1C8DCE] text-white px-4 py-2 rounded-lg w-full">
              Live Chat Support
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center w-full mt-6">
          <Image
            src="/cotgirl.jpeg" 
            alt="Support Agents"
            width={500}
            height={480}
            objectFit="cover"
            className="mb-6" 
          />
        </div>
      </div>
    </div>
  );
};

export default MobileHelp;



