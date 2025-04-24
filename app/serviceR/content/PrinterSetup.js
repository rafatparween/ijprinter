"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 

export default function PrinterSetup() {

  const router = useRouter(); 

  const handleSetupClick = () => {
    router.push('../service/Pages'); // Ensure the path is correct
  };

  return (
    <div className="flex flex-col items-center py-14 space-y-14 mt-[-33px] bg-[#007DBD] mt-[40px]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12  max-w-6xl p-10 border border-gray-200 rounded-lg shadow-lg bg-white">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/printergirl.jpeg" // Replace with the actual path to your image
            alt="Printer Setup"
            width={600} // Increased width
            height={500} // Increased height
            className="rounded-lg object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold text-[#007DBD]">How to Set Up Your Printer</h2> {/* Further increased text size */}
          <p className="text-xl leading-relaxed text-black">
            Click Printer Setup for step-by-step guidance on how to set up, configure, and register your printer.
          </p>
          <button 
            className="bg-[#007DBD] text-white py-3 px-8 rounded text-lg font-medium hover:bg-blue-300 transition duration-200"
            onClick={handleSetupClick}
          >
            <p className='text-white'>
              Printer Setup
            </p>
          </button>
          <div className="text-lg">
            <span className="font-semibold text-black">More support</span><br />
            <a href="#" className="text-[#007DBD] underline hover:text-blue-200">
              Get Instant Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


















