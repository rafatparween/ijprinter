import Image from 'next/image';

export default function HpSupportSection() {
  return (
    <div className="max-w-[1280px] mx-auto text-center py-10">
      <h2 className="text-2xl font-semibold">We Provide Solution’s for</h2>
      <p className="text-gray-500 text-sm mt-2">
        Storage | Software Download | Installation Issues | Network Connectivity Related Issues
      </p>

      <div className="flex justify-between items-center mt-10 border-t border-b border-gray-300 py-8">
        {/* First Column */}
        <div className="flex-1 px-6 text-center relative">
          <Image src="/windows11-logo.png" width={200} height={100} alt="Windows 11 Logo" className="mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Get Instant Support for Laptop & Desktop</h3>
          <p className="text-gray-500 text-sm mt-2">
            If elite, premium, pavilions or any HP desktop having an error then connect our technicians at customer service number.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Install HP Smart</button>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-20 border-l border-gray-300"></div>
        </div>

        {/* Second Column */}
        <div className="flex-1 px-6 text-center relative">
          <Image src="/printer-image.png" width={200} height={150} alt="Printer Image" className="mx-auto" />
          <h3 className="text-lg font-semibold mt-4">How to print, scan and fax</h3>
          <p className="text-gray-500 text-sm mt-2">
            Click Print Scan Fax for instructions on how to print, scan and fax with your HP Printer using Windows or Mac OS.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Fix Scan/Print</button>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-20 border-l border-gray-300"></div>
        </div>

        {/* Third Column */}
        <div className="flex-1 px-6 text-center">
          <Image src="/printer-troubleshoot.png" width={200} height={150} alt="Printer Troubleshoot" className="mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Printer offline or print job stuck in queue?</h3>
          <p className="text-gray-500 text-sm mt-2">
            Use this Windows automated tool to diagnose and fix printer problems such as printer offline and print jobs stuck in queue.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Fix your Printer</button>
        </div>
      </div>
    </div>
  );
}
