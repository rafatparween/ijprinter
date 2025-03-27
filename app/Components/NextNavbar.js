import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu

const Chatlink = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="chat-now text-lg sm:text-2xl text-[#1c85c1] cursor-pointer relative inline-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative flex items-center">
  {/* Call Icon Image */}
  {/* <img src="/bluecall.png" alt="Call Icon" className="w-6 h-6 sm:w-8 sm:h-8 mr-2" /> */}

  {/* Text */}
  {/* <span className="text-[20px] sm:text-[24px] text-[#1c85c1]">
    Call us for printer support
  </span> */}

  {/* Animated Bottom Line */}
  <div
    className={`absolute bottom-[-5px] right-0 h-[4px] bg-[#1c85c1] transition-all duration-300 ease-in-out ${hover ? 'w-full' : 'w-0'}`}
  ></div>
</div>
    </div>
  );
};

const NextNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex items-center justify-between py-4">

        {/* Logo on the left */}
        {/* <Link href="/" passHref legacyBehavior>
          <a className="flex items-center">
            <Image
              src="/hplogo.png"
              alt="HP Logo"
              width={53}
              height={53}
              className="w-auto h-auto"
            />
          </a>
        </Link> */}
        <div className="flex items-center space-x-2">
          <img src="/call.png" alt="Call Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-[20px] sm:text-[24px] text-[#1c85c1]">
            Chat us for Printer Support
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Chatlink />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <Chatlink />
        </div>
      )}
    </nav>
  );
};

export default NextNavbar;






