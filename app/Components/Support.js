import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPrint,
  faTools,
  faFilePdf,
  faShippingFast,
  faRecycle,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';

const Support = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">How Our Printer Services Work</h2>
        <p className="text-gray-600 mb-8">
          We offer a seamless experience for printer-related services, from selecting your printer model to setup, troubleshooting, and eco-friendly recycling.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-[#E8FBFF] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-600 to-indigo-700 text-white mb-6">
              <FontAwesomeIcon icon={faPrint} className="text-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Select Your Printer Model</h3>
            <p className="text-gray-600">
              Choose your printer model to find compatible services and support options tailored to your device.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-600 to-indigo-700 text-white mb-6">
              <FontAwesomeIcon icon={faTools} className="text-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Setup and Maintenance</h3>
            <p className="text-gray-600">
              Get expert assistance with printer setup, software installation, and routine maintenance checks.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-[#E8FBFF] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-600 to-indigo-700 text-white mb-6">
              <FontAwesomeIcon icon={faFilePdf} className="text-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Print Document Services</h3>
            <p className="text-gray-600">
              Upload your files and enjoy fast, high-quality printing services at your convenience.
            </p>
          </div>
          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-600 to-indigo-700 text-white mb-6">
              <FontAwesomeIcon icon={faShippingFast} className="text-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Delivery of Supplies</h3>
            <p className="text-gray-600">
              Order printer cartridges, paper, or other supplies and get them delivered quickly to your doorstep.
            </p>
          </div>
          {/* Step 5 */}
          <div className="bg-[#E8FBFF] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-600 to-indigo-700 text-white mb-6">
              <FontAwesomeIcon icon={faRecycle} className="text-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Eco-Friendly Recycling</h3>
            <p className="text-gray-600">
              Dispose of old printers, cartridges, and other components responsibly with our recycling program.
            </p>
          </div>
          {/* Step 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-600 to-indigo-700 text-white mb-6">
              <FontAwesomeIcon icon={faPhoneVolume} className="text-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Customer Support</h3>
            <p className="text-gray-600">
              Connect with our support team any time for help with troubleshooting and technical issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
