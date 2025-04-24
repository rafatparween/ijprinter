import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ececec]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Side: Text Content */}
        <div className="text-left md:w-1/2 flex flex-col justify-center">
          <h1 className="h-[58px] w-[1100px]">Easy setup, effortless printing!</h1>
          <p className="w-[550px] h-[32px]">Install HP Smart</p>
          <button className="bg-blue-500 text-white px-4 py-3 rounded-lg">Install Setup</button>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img 
            src="https://www.qwebcare.com/help/images/Win10_Image_mid.png" 
            alt="Printers" 
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}