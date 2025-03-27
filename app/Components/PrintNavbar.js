"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPercent, faLifeRing, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Image from "next/image";

const PrintNavbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-20 p-4 shadow-lg bg-white flex items-center justify-between md:h-16 lg:h-20 overflow-hidden ">
      
      {/* Logo */}
      <div className="flex items-center pl-4 md:pl-8">
      <Link legacyBehavior href="#">
          <a>
            <Image
              className="text-[50px] "
              src="/hhslogo.webp"
              height={124}
              width={133}
              alt="Logo"
            />
          </a>
        </Link>
        <Link legacyBehavior href="#">
          <a className="text-[27px] text-[#0C71C3]">Hewlett Hub Solutions</a>
        </Link>
      </div>
      
      {/* Search Bar */}
      <div className="flex-grow px-4">
        <div className="relative max-w-lg mx-auto">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-[762px] h-10 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4 pr-4 md:pr-8">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon className="w-5 h-5" icon={faPercent} />
          <span className="hidden md:inline-block">
            <Link legacyBehavior href="./components/projects">
              <a className="text-black no-underline">My Projects</a>
            </Link>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon className="w-5 h-5" icon={faLifeRing} />
          <span className="hidden md:inline-block">
            <Link legacyBehavior href="./components/help">
              <a className="text-black no-underline">Help is here</a>
            </Link>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon className="w-5 h-5" icon={faUser} />
          <span className="hidden md:inline-block">
            <Link legacyBehavior href="./components/signup">
              <a className="text-black no-underline">Sign in</a>
            </Link>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon className="w-5 h-5" icon={faCartShopping} />
          <span className="hidden md:inline-block">
            <Link legacyBehavior href="/carts">
              <a className="text-black no-underline">Cart</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrintNavbar;