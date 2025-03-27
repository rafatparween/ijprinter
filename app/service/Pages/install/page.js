'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";  // Make sure to import Image from Next.js
import NavbarSection from "@/app/Components/NavbarSection";
import Storepage from "@/app/Components/Storepage";
import Link from "next/link";

import { useRouter } from "next/navigation";
import ErrorPageHndle from "./process/error.html/page";
import Footer from "@/app/Components/Footer";
import InstallingDriversPage from "./process/page";


function Printersearch() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [showErrorPage, setShowErrorPage] = useState(false);
  const router = useRouter();

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  // const handleButtonClick = (e) => {
  //   e.preventDefault(); // Prevent the default link behavior (URL change)
  //   setPopupVisible(true); // Show the popup
  // };

  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500); // Changes every 500ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isPopupVisible) {
      // Set a timer to show the error page after 15 seconds
      const timer = setTimeout(() => {
        setShowErrorPage(true);
        router.push('./install/process'); // Show error page after 15 seconds
        setPopupVisible(false);
         // Optionally hide the popup after the error
      }, 15000); // 15 seconds

      return () => clearTimeout(timer); // Clear the timer if the component is unmounted or state changes
    }
  }, [isPopupVisible],router);

  if (showErrorPage) {
    // This is the error page after 15 seconds of spinner
    return (
     <>
      <InstallingDriversPage/>

     </>
     
    );
  }

  return (
    <>
      {/* <NavbarSection/> */}
      <div className={`h-[530px] mt-[70px] ${isPopupVisible ? "blur-sm" : ""}`}>
        <section
          className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center h-[530px]"
          style={{
            backgroundImage:
              "url(/topback.png)",
          }}
        >
          {/* <div className="absolute inset-0 bg-[#007DBA] opacity-60"></div> */}

          <div className="relative z-10 text-white 2xl:ml-[-392px] xl:ml-[-85px] mt-[-74px]">
            <h1 className="text-[54px] mb-4 xl:ml-[-73px] 2xl:ml-[-63px]">
              Complete setup using Professionals Help
            </h1>
            <div className="border-t border-white w-[1100px] mx-auto mb-8 mt-[-19px] xl:ml-[-4px]"></div>

            <div className="flex flex-col lg:flex-row justify-between items-start">
              <div className="space-y-4 lg:w-1/2 lg:pr-8 2xl:ml-[34px]">
                <div className="flex items-center space-x-3">
                  <span className="text-[35px] w-[41px] h-[58px]">1.</span>
                  <p className="text-[34px] whitespace-nowrap">
                    Make sure that your printer is powered on
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[34px] w-[50px] h-[40px] mt-[-26px]">2.</span>
                  <p className="text-[34px] whitespace-nowrap 2xl:ml-[5px] 2xl:mt-[9px] mb-[23px]">
                    Click Start Printer Installation to complete your Setup
                  </p>
                </div>
                <Link href="./install/process">
                  <button className="install border border-white mt-8 bg-white w-[230px] h-[50px]  2xl:ml-[-189px] xl:ml-[-301px] py-2 px-6 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300 relative overflow-hidden">
                    <h1 className='text-[14px] text-black'>Start Printer Installation</h1>
                  </button>
                </Link>
              </div>

              <div className="relative z-10 mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
                {/* Placeholder for an image */}
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center xl:ml-[-468px] 2xl:ml-[-688px]">

        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[596px] h-[443px] rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-[28px] font-semibold mb-4">Gathering device details...</h2>
            {/* <svg
              className="animate-spin duration-[15s] h-[40px]" // Spinner rotates for 15 seconds
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path> */}
            {/* </svg> */}

            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
        {/* Top Section: Icons and Animated Progress Bar */}
        <div className="flex items-center justify-between">
          {/* Left Icon */}
          <div className="flex-shrink-0">
            <Image
              src="/printer.webp" // Replace with your actual path
              alt="HP Smart"
              width={100}
              height={100}
            />
          </div>

          {/* Animated Progress Bar */}
          <div className="w-[100px] h-[23px] mx-4">
            <div className="relative w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div
                className="absolute inset-0 h-full animate-progress"
                style={{
                  background: "linear-gradient(to right, #007dbd, #007dbd 80%, #ffffff 20%)",
                }}
              ></div>
            </div>
          </div>

          {/* Right Icon */}
          <div className="flex-shrink-0">
            <Image
              src="/blackprinter.gif" // Replace with your actual path
              alt="Printer"
              width={131}
              height={131}
            />
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-[#212529] text-[24px] font-bold">
      Please wait<span className="dot-animation">{dots}</span>
    </p>
      </div>
          </div>
        </div>
      )}
    <Storepage/>
    <Footer/>
     
    </>
  );
}

export default Printersearch;


