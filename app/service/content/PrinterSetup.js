// "use client";
// import React from 'react';
// import { useRouter } from 'next/navigation'; 
// import './PrinterSetup.css';
// import JivoChat from '@/app/Jivochat';

// const PrinterSetup = () => {
//   const router = useRouter(); 

//   const handleSetupClick = () => {
//     router.push('../services/Pages'); 
//   };

//   return (
//     <div className="printer-setup">
//       <div className="text-content ">
//         <h1>123 PRINTER SETUP</h1>
//         <ul>
//           <li>Make sure your printer is powered on</li>
//           <li className='select'>Click Printer Setup for step by step guidance on how to setup, configure and register your printer.</li>
//         </ul>
//         <button className="btn" onClick={handleSetupClick}>
//           Click Here for Setup
//           <img src='hplogo.png' alt="HP Logo" className="hp-logo" />
//         </button>
//       </div>

//       <img src='boyimage.png' alt="Printer" className="printer-image" />
//       <JivoChat/>
//     </div>
//   );
// };

// export default PrinterSetup;


// import Image from 'next/image';
// import { useRouter } from 'next/navigation'; 
// export default function PrinterSetup() {
 

//   const router = useRouter(); 

//     const handleSetupClick = () => {
//       router.push('../services/Pages'); 
//     };
  
//     return (
//         <div className="flex flex-col items-center py-10 space-y-10">
//             {/* Top Section */}
//             <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 w-full max-w-5xl p-6 border border-gray-200 rounded-lg shadow-sm">
//                 {/* Image Section */}
//                 <div className="w-full md:w-1/2">
//                     <Image
//                         src="/Printer.avif" // Replace with the actual path to your image
//                         alt="Printer Setup"
//                         width={500}
//                         height={300}
//                         className="rounded-lg object-cover"
//                     />
//                 </div>
//                 {/* Text Section */}
//                 <div className="w-full md:w-1/2 space-y-4">
//                     <h2 className="text-2xl font-semibold">How to setup your printer</h2>
//                     <p>Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer.</p>
//                     <button className="bg-[#007DBD] text-white py-2 px-4 rounded hover:bg-blue-700 onClick={handleSetupClick">Printer Setup</button>
//                     <div className="text-sm">
//                         <span className="font-semibold">More support</span><br />
//                         <a href="#" className="text-[#007DBD] underline">Get Instant Support</a>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Section */}
//             <div className="flex justify-center space-x-10 w-full max-w-5xl border-t border-gray-200 pt-6">
//                 <div className="flex flex-col items-center">
//                     <Image src='/download.jpg' height={80} width={80} className='object-cover'/>
//                     <a href="#" className="text-[#007DBD] hover:underline mt-2">Download Drivers &gt;</a>
//                 </div>
//                 <div className="flex flex-col items-center">
//                 <div className="flex flex-col items-center">
//                     <Image src='/waranty.png' height={80} width={80} className='object-cover'/>
//                     <a href="#" className="text-[#007DBD] hover:underline mt-2">Check warranty status &gt;</a>
                    
//                 </div>
                    
//                 </div>
//                 <div className="flex flex-col items-center">
//                     <Image src='/contact.png' height={100} width={100} className='object-cover'/>   
//                     <a href="#" className="text-[#007DBD] hover:underline mt-5">Contact us &gt;</a>
//                 </div>
//                 <div className="flex flex-col items-center">
//                     <Image src='/digonose.webp' height={80} width={80} className='object-cover'/>
//                     <a href="#" className="text-[#007DBD] hover:underline mt-2">Diagnose & Fix &gt;</a>
//                 </div>
//             </div>

//         </div>
//     );
// }



"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 

export default function PrinterSetup() {
  // const handleRedirect = () => {
  //   window.open("https://www.printersmartassistant.com/", "_blank");
  // };
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


















