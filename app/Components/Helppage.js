import React from 'react';
import Image from 'next/image';

const Helppage = () => {
  return (
    <div className="bg-[#F0F0F0] flex items-center justify-center h-[800px]">
      <div className="flex max-w-6xl ml-[-491px] ">
        
        {/* Left Side - Text Section */}
        <div className="flex flex-col w-1/2 p-8 mt-[35px] mr-[241px] xl:ml-[151px]">
          <h1 className="text-4xl font-bold mb-4 h-[30px] text-gray-500">You're Not Alone,</h1>
          <h1 className='text-[50px] text-[#1C8DCE] w-[509px] mt-[10px]'>We're Here To Help</h1>
          <p className="text-[20px] mb-4 text-black w-[700px] h-[48px] mt-[20px]">
            Feeling Lonely With A Problem? You Don’t Have To Deal With It All By Yourself.
          </p>
          <p className="text-[20px] mb-4 text-black w-[750px] h-[72px]">
            We Get That Problems Can Be Tough, But We’re Here For You. Just Give Us A Call, And We’ll Be Like A Helpful Friend,
            Ready To Sort Out Your Issues. We’ll Make Sure To Put Your Problems At The Top Of Our List.
          </p>

          {/* Live Chat Support Box */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-[443px] h-[337px]">
            <Image
              src="/chaticon.png" 
              alt="Support Agents"
              width={100}
              height={100}
              objectFit="cover"
              className="ml-[139px]"
            />
            <div className="flex items-center mb-4">
              <span className="ml-4 text-gray-700">Live chat support provides you with the opportunity to engage in real-time, interactive conversations with dedicated support agents.</span>
            </div>
            <button className="bg-[#1C8DCE] text-white px-4 py-2 rounded-lg w-[353px] h-[49px]">
              Live Chat Support
            </button>
          </div>
        </div>

        {/* Space Between Left and Right Sections */}

        {/* Right Side - Image */}
        <Image
          src="/cotgirl.jpeg" 
          alt="Support Agents"
          width={500}
          height={480}
          objectFit="cover"
          className="mt-[53px] ml-[135px] xl:ml-[-7px] mb-[50px]" 
        />
      </div>
    </div>
  );
};

export default Helppage;










