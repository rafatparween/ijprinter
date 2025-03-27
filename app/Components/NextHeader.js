"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function NextHeader() {
  const [isOpen, setIsOpen] = useState(false);
   const handleRedirect = () => {
    window.open("https://www.printersmartassistant.com/", "_blank");
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Navigation Bar */}
      <nav className="bg-[#1C8DCEED] text-white w-full">
        <div className="max-w-[90.33%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center h-16">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiMenu />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between items-center w-full">
              {[
                "Printer Offline",
                "Printer Setup",
                "Scanner Setup",
                "Support Home",
                "Ink Cartridges Issue",
                "Diagnostics",
                "Business Support",
              ].map((item, index) => (
                <button 
                  key={index}
                  className="hover:text-gray-300 text-sm sm:text-base md:text-lg font-medium whitespace-nowrap px-3"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#1C8DCEED] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <div className="flex flex-col space-y-6 mt-20 pl-8">
          {[
            "Printer Offline",
            "Printer Setup",
            "Scanner Setup",
            "Support Home",
            "Ink Cartridges Issue",
            "Diagnostics",
            "Business Support",
          ].map((item, index) => (
            <Link
              key={index}
              href="/"
              className="block text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
