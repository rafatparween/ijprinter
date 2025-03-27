import React from "react";

const PrinterSetupSection = () => {
  return (
    <div className=" bg-[#1E3A8A]">
      <div className="bg-white max-w-[1440px] mx-auto px-4 py-8 my-10 shadow-lg rounded-lg">
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center border-b-4  border-[#1E3A8A] pb-4">
            Setting Up Your New Office Printer
          </h1>
          <p className="text-lg text-[#1E3A8A] leading-relaxed mb-6">
            In today's digital age, having a reliable printer remains crucial for most businesses. Whether you occasionally print important documents or require high-volume printing, a printer is an indispensable tool. Whether you've recently leased or purchased a new office printer—be it a multifunctional powerhouse for a large corporation or a compact desktop model for a startup—proper setup is key to ensuring smooth operation.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-[#1E3A8A] pb-2">
            Simplifying Printer Setup
          </h2>
          <p className="text-lg text-[#1E3A8A] leading-relaxed mb-6">
            We understand that new technology can sometimes be a bit challenging to configure. That’s why we’ve crafted this guide to walk you through the process. Below, we’ll cover everything you need to know to set up and connect both wireless and traditional wired printers.
          </p>

          {/* Wired Printer Setup */}
          <h2 className="text-3xl font-bold mb-6 border-b-4 pb-2 border-[#1E3A8A] text-gray-900 ">
            Traditional Wired Printer Setup: Reliable and Stable
          </h2>
          <ol className="list-decimal ml-8 space-y-6 text-lg text-gray-800 leading-relaxed ">
            <li className="text-[#1E3A8A]">Unbox and Position Your Printer</li>
            <li className="text-[#1E3A8A]" >Power On: Connect your printer to a power source and turn it on.</li>
            <li className="text-[#1E3A8A]">
              Connect via USB/Ethernet: Use a USB or Ethernet cable to connect your printer directly to your computer or network.
            </li >
            <li className="text-[#1E3A8A]">
              Install Drivers: Download and install the appropriate drivers from the printer manufacturer's website.
            </li>
            <li className="text-[#1E3A8A]">
              Add Printer to Your Device: Go to the printer settings on your computer and add the new printer.
            </li>
            <li className="text-[#1E3A8A]">Test Print: Print a test page to ensure the setup is correct.</li>
          </ol>

          {/* Wireless Printer Setup */}
          <h2 className="text-3xl font-bold text-gray-900  mb-6 mt-10 border-b-4 pb-2 border-[#1E3A8A]">
            Wireless Printer Setup: Easy and Convenient
          </h2>
          <ol className="list-decimal ml-8 space-y-6 text-lg text-[#1E3A8A] leading-relaxed">
            <li>Unbox and Position Your Printer: Place your printer in a suitable location near a power source and your Wi-Fi network.</li>
            <li>Power On: Plug in your printer and turn it on.</li>
            <li>
              Connect to Wi-Fi: Access the printer’s control panel to connect it to your wireless network. You may need your network’s SSID and password.
            </li>
            <li>
              Install Software: Download and install the necessary drivers from the printer manufacturer’s website on your computer.
            </li>
            <li>
              Add Printer to Your Device: On your computer, navigate to the printer settings and add the new printer.
            </li>
            <li>Test Print: Print a test page to ensure everything is working correctly.</li>
          </ol>

          <p className="mt-8  italic text-center text-[#1E3A8A]">
            By following these steps, you can ensure your new printer is ready for use, minimizing downtime and enhancing productivity. Happy printing!
          </p>
        </section>

        {/* Wireless Printer Setup Guide Section */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            How to Set Up a Wireless Printer
          </h2>
          <p className="text-lg text-[#1E3A8A] mb-6 leading-relaxed">
            Most printers come with instructions to walk you through the setup process. The setup may vary based on the printer brand and type (WiFi, Bluetooth, USB), and whether you're using a Windows or Mac computer.
          </p>
          <ol className="list-decimal ml-8 space-y-6 text-lg text-[#1E3A8A] leading-relaxed">
            <li>
              <strong>Place the Printer near your Router and Switch it On:</strong> Ensure it’s nearby your router in order to connect and switch it on. If using a USB connection, plug it into your computer and let it automatically search for the printer.
            </li>
            <li>
              <strong>Connect to your Network:</strong> All you’ll need is the WiFi network name and password. Follow on-screen instructions or refer to the manual. If your printer supports WPS, simply press the WPS button on both the printer and the router to instantly connect.
            </li>
            <li>
              <strong>Add the Printer to your Device:</strong> For Windows, navigate to 'Printers and Scanners' settings to add the printer. For Mac, go to 'System Preferences' and add the printer from 'Printers and Scanners'.
            </li>
          </ol>
        </section>

        {/* Wired Printer Setup Guide Section */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            How to Set Up a Wired Printer
          </h2>
          <p className="text-lg text-[#1E3A8A] mb-6 leading-relaxed">
            Wired printers are still commonly used in offices and are slightly easier to set up compared to wireless printers. Here’s how to set one up:
          </p>
          <ol className="list-decimal ml-8 space-y-6 text-lg text-gray-800 leading-relaxed">
            <li className="text-[#1E3A8A]">Plug in the power cable and switch the printer on.</li>
            <li className="text-[#1E3A8A]">Connect the USB cable from the printer to the computer.</li>
            <li className="text-[#1E3A8A]">
              Add the printer manually via the device settings if it’s not automatically recognized.
            </li>
          </ol>
          <p className="mt-8 text-lg text-[#1E3A8A] italic text-center">
            If you're considering upgrading your office printer, check out our range of printers and contact us for help in finding the best solution for your business.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrinterSetupSection;
