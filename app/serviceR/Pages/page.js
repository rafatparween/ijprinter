"use client";


import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';


import JivoChat from '@/app/JivoChat';
import Popup from '@/app/Components/Popup';

import FooterSection from '@/app/Components/FooterSection';
import NavbarSection from '@/app/Components/NavbarSection';
import Footer from '@/app/Components/Footer';


function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredModels, setFilteredModels] = useState([]);

  const printerModels = [
    'HP OfficeJet Pro 9010 All-in-One Printer',
    'HP OfficeJet Pro 9000 Series',
    'HP OfficeJet Pro 9010e All-in-One Printer',
    'HP OfficeJet Pro 9015 All-in-One Printer',
    'HP OfficeJet Pro 9014 All-in-One Printer',
    'HP OfficeJet Pro 9018 All-in-One Printer',
    'HP ENVY 120 e-All-in-One Printer series',
    'HP ENVY 4500 e-All-in-One Printer series',
    'HP ENVY 4510 All-in-One Printer series',

  ];

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = printerModels.filter((model) =>
        model.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredModels(filtered);
    } else {
      setFilteredModels([]);
    }
  };

  const handleModelClick = (model) => {
    setSearchTerm(model); // Set the input value to the selected model
    setFilteredModels([]); // Clear the dropdown after selection
  };

  const handleSearchClick = () => {
    if (searchTerm) {
      const searchPath = searchTerm.replace(/\s+/g, '-').replace(/\//g, '-');
      router.push(`./Pages/install?model=${encodeURIComponent(searchPath)}`); // Navigate to the install page
    } else {
      alert("Please select or enter a model before searching."); // Alert if the input is empty
    }
  };

return (
  <>
    {/* Top Navigation */}
    <div className="sticky top-0 bg-white z-50 px-6 xl:px-[130px] 2xl:px-[187px]">
  <NavbarSection />
</div>

    {/* Header Section */}
    <div className="h-[390px]">
      <section
        className="relative flex flex-col justify-center text-left py-12 h-[400px] bg-cover bg-center px-6 xl:px-[130px] 2xl:px-[197px]"
        style={{
          backgroundImage: "url('/topback.png')"
        }}
      >
        <div className="absolute inset-0 z-0"></div>

        <div className="relative z-10 text-white max-w-[832px] mt-[35px]">
          <h1 className="text-[44px] font-hp-simplified font-light">
          Get started with your HP printer

          </h1>
          <p className="mt-[20px] text-[20px] w-full font-light whitespace-nowrap">
  Enter your HP product name and model number to get the right HP Smart software and drivers for you
</p>


          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-2 w-full max-w-xl">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder='Enter your product name here. Example: “OfficeJet 9010”'
              className="px-4 py-3 w-full rounded-md text-gray-700"
            />
            <button
              onClick={handleSearchClick}
              className="mt-4 sm:mt-0 bg-[#0D274D] hover:bg-[#004080] text-white rounded-md w-[100px] h-[48px]"
            >
              Next
            </button>
          </div>

          {filteredModels.length > 0 && (
            <ul className="mt-1 w-full max-w-xl bg-white border border-gray-300 rounded-lg shadow-lg z-10 text-black">
              {filteredModels.map((model) => (
                <li
                  key={model}
                  onClick={() => handleModelClick(model)}
                  className="cursor-pointer p-2 hover:bg-[#007DBA] hover:text-white"
                >
                  <span className="font-bold text-black">HP</span>
                  {model.substring(2)}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-col space-y-4">
            <a href="#" className="underline text-white text-[16px]">Where’s the product name?</a>
            <a href="#" className="underline text-white text-[16px]">My device is not listed</a>
            <Popup />
          </div>
        </div>
      </section>

      {/* Info Text */}
      <h1 className="text-[18px] w-full text-[#737373] mt-[60px] px-6 xl:px-[130px] 2xl:px-[197px] font-light">
        Install HP Smart software and drivers on each mobile device or computer you want to print from. Add the printer on the new device.
      </h1>

      {/* Help Section */}
      {/* <div className="mt-6 flex items-center px-6 xl:px-[130px] 2xl:px-[197px] max-w-[832px]"> */}
        
        <h1 className="text-[18px] w-full text-[#737373] mt-[50px] px-6 xl:px-[130px] 2xl:px-[197px] font-light">
        Need additional help with setup? Visit <span className='underline' style={{ color: '#007DBA' }}>HP Support</span>
        </h1>
      
      {/* </div> */}

      {/* Country Footer */}
      <div className="flex items-center mt-8 px-6 xl:px-[130px] 2xl:px-[197px] max-w-[832px]">
        <Image
          src="/unitedlogo.png"
          alt="United States"
          height={50}
          width={50}
          className="w-6 h-6 mr-2"
        />
        <h1 className="text-[16px] text-[#007DBA] underline font-light">United States</h1>
      </div>
    </div>

    <div className="mt-[350px]"></div>

    <FooterSection />
    <JivoChat />
  </>
);

}

export default Home;
























