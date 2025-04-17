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
  }, [isPopupVisible], router);

  if (showErrorPage) {
    // This is the error page after 15 seconds of spinner
    return (
      <>
        <InstallingDriversPage />

      </>

    );
  }

  return (
    <>
      <div className="ml-[-1.5rem] px-6 xl:px-[130px] 2xl:px-[197px]">
        <NavbarSection />
      </div>

      <div className={`h-[530px] mt-[70px] ${isPopupVisible ? "blur-sm" : ""}`}>
        <section
          className="flex flex-col justify-center text-left py-12 relative bg-cover bg-center h-[390px] mt-[-73px] px-6 xl:px-[130px] 2xl:px-[197px]"
          style={{
            backgroundImage: "url(/topback.png)",
          }}
        >
          {/* Text Content */}
          <div className="relative z-10 text-white max-w-[1100px]">
            <h1 className="text-[54px] mb-4">Complete setup using Professionals Help</h1>
            <div className="border-t border-white w-full max-w-[1100px] mb-8 mt-[-19px]"></div>

            <div className="flex flex-col lg:flex-row justify-between items-start">
              {/* Left Content */}
              <div className="space-y-4 lg:w-1/2 lg:pr-8">
                <div className="flex items-center space-x-3">
                  <span className="text-[35px] w-[41px] h-[58px]">1.</span>
                  <p className="text-[34px] whitespace-nowrap">
                    Make sure that your printer is powered on
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[34px] w-[50px] h-[40px] mt-[-26px]">2.</span>
                  <p className="text-[34px] whitespace-nowrap mt-[9px] mb-[20px]">
                    Click Start Printer Installation to complete your Setup
                  </p>
                </div>
                <Link href="./install/process">
                  <button className="install border border-white mt-4 bg-white w-[230px] h-[50px] py-2 px-6 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300 relative overflow-hidden">
                    <h1 className='text-[14px] text-black'>Install HP Smart & Drivers</h1>
                  </button>
                </Link>
              </div>

              {/* Right (optional image placeholder) */}
              <div className="relative z-10 mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
                {/* Placeholder for image if needed */}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[596px] h-[443px] rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-[28px] font-semibold mb-4">Gathering device details...</h2>

            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
              {/* Top Section */}
              <div className="flex items-center justify-between">
                <Image src="/printer.webp" alt="HP Smart" width={100} height={100} />
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
                <Image src="/blackprinter.gif" alt="Printer" width={131} height={131} />
              </div>

              {/* Bottom Text */}
              <p className="mt-6 text-[#212529] text-[24px] font-bold">
                Please wait<span className="dot-animation">{dots}</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Section */}
    
      <div className="-ml-8 px-6 xl:px-[130px] 2xl:px-[14px]">
  <Storepage />
</div>



      <Footer />


    </>
  );
}

export default Printersearch;



