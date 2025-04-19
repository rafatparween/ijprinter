import Image from 'next/image';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu

const NavbarSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white py-2 w-full">
      <div className="max-w-screen-xl mx-auto 2xl:max-w-[1496px] flex items-center justify-between px-4">
        {/* Left side: Logo and Product Links */}
        <div className="flex items-center space-x-8">
          {/* HP Logo */}
          <Image
            src="/hplogo.jpeg" // Replace with the correct path to your logo
            alt="HP Logo"
            width={48}
            height={48}
            className="w-[48px] h-[48px] -ml-6 inline-block"
          />

          {/* Product Links */}
          <nav className="hidden md:flex space-x-8 text-gray-600 text-[16px]">
            <a href="/" className="hover:text-[#007DBA]">OfficeJet</a>
            <a href="/" className="hover:text-[#007DBA]">DeskJet</a>
            <a href="/" className="hover:text-[#007DBA]">ENVY</a>
            <a href="/" className="hover:text-[#007DBA]">LaserJet</a>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col items-center gap-4 pb-4">
            <a href="/" className="hover:text-[#007DBA]">OfficeJet</a>
            <a href="/" className="hover:text-[#007DBA]">DeskJet</a>
            <a href="/" className="hover:text-[#007DBA]">ENVY</a>
            <a href="/" className="hover:text-[#007DBA]">LaserJet</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavbarSection;