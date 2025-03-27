"use client"
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link legacyBehavior href="/">
              <a className="text-2xl font-bold text-blue-600">
              EzTech-Print
              </a>
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link legacyBehavior href="/">
              <a className="text-lg text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition duration-300">
                Home
              </a>
            </Link>
            <Link legacyBehavior href="/about">
              <a className="text-lg text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition duration-300">
                About
              </a>
            </Link>
            <Link legacyBehavior href="/service">
              <a className="text-lg text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition duration-300">
                Service
              </a>
            </Link>
            <Link legacyBehavior href="/Disclaimer">
              <a className="text-lg text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition duration-300">
                Disclaimer
              </a>
            </Link>
            <Link legacyBehavior href="/policy">
              <a className="text-lg text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition duration-300">
                PrivacyPolicy
              </a>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <input
              type="text"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Search..."
            />
          </div>
          <div className="lg:hidden">
            {/* Mobile menu button */}
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;