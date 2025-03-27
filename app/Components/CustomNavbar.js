"use client"
import Link from 'next/link';
import PrintIcon from '@mui/icons-material/Print';
import React, { useState } from 'react';
import Image from 'next/image';

const Chatlink = () => {
  const [hover, setHover] = useState(false);

  return (
    <header className="bg-white p-4 text-right h-18 mt-[-3px] mx-auto mr-[5%] lg:mr-[80px]">
      <div
        className="chat-now text-lg md:text-2xl text-[#1c85c1] cursor-pointer relative inline-block"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="line-before"></div> {/* Horizontal line */}
        <i className="fas fa-phone-square-alt mr-2" aria-hidden="true"></i>
        <span className='text-lg md:text-[24px]'>Chat Now</span>
        <div className={`absolute bottom-[-5px] right-0 h-[4px] bg-[#1c85c1] transition-all duration-300 ease-in-out ${hover ? 'w-[400%] lg:w-[700%]' : 'w-0'}`}></div>
      </div>
    </header>
  );
}

const Navbar = () => {
  return (
    <nav className="bg-white h-[40px]">
      <div className="flex gap-5 items-center py-3 justify-between bg-white">
        <ul className="ml-[5%] flex gap-4 md:gap-8 text-[#1C8DCE] text-lg md:text-[24px] lg:ml-[80px] xl:ml-[236px] 2xl:ml-[179px]">
          <Link legacyBehavior href="/" passHref>
            <div className="flex items-center mr-4 xl:ml-[-60px] 2xl:ml-[2px]">
              {/* <Image
                src="/hplogo.png" // Replace with the correct path to your logo
                alt="HP Logo"
                width={53}
                height={53}
              /> */}
            </div>
          </Link>
        </ul>
        
        {/* Chatlink on the right */}
        <div className="ml-auto">
          <Chatlink />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;