import Image from 'next/image';

export default function SupportPage() {
    return (
        <>
            <div className="flex flex-col items-center py-14 space-y-14 max-w-6xl m-auto">
                {/* Header Section */}
                <h1 className="text-3xl md:text-4xl font-bold text-center px-4">We Provide Solution’s for</h1>
                <p className="text-center text-gray-500 text-base md:text-lg px-4">
                    Storage | Software Download | Installation Issues | Network Connectivity Related Issues
                </p>

                {/* Solutions Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-7xl px-4 md:px-8">
                    {/* Solution 1 */}
                    <div className="flex flex-col items-center text-center border border-gray-200 p-6 md:p-8 rounded-lg shadow-md">
                        <Image src="/newwindow.jpg" alt="Windows 11" width={350} height={180} className="rounded-lg object-cover" />
                        <h2 className="mt-6 font-semibold text-lg md:text-xl">Get Instant Support for Laptop & Desktop</h2>
                        <p className="text-gray-600 text-sm md:text-base">
                            If elite, premium, pavilions or any other HP desktop is not working properly due to an error then connect to
                            one of our technicians at customer service number.
                        </p>
                        <button className="mt-6 bg-[#007DBD] text-white py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-blue-700">
                            Install HP Smart
                        </button>
                    </div>

                    {/* Solution 2 */}
                    <div className="flex flex-col items-center text-center border border-gray-200 p-6 md:p-8 rounded-lg shadow-md">
                        <Image src="/newhp.jpg" alt="Printer Setup" width={350} height={180} className="rounded-lg object-cover" />
                        <h2 className="mt-6 font-semibold text-lg md:text-xl">How to print, scan and fax</h2>
                        <p className="text-gray-600 text-sm md:text-base">
                            Click Print Scan Fax for instructions on how to print, scan and fax with your HP Printer using Windows or
                            Mac OS.
                        </p>
                        <button className="mt-6 bg-[#007DBD] text-white py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-blue-700">
                            Fix Scan/Print
                        </button>
                    </div>

                    {/* Solution 3 */}
                    <div className="flex flex-col items-center text-center border border-gray-200 p-6 md:p-8 rounded-lg shadow-md">
                        <Image src="/newrowprinter.jpg" alt="Printer Queue" width={350} height={180} className="rounded-lg object-cover" />
                        <h2 className="mt-6 font-semibold text-lg md:text-xl">Printer offline or print job stuck in queue?</h2>
                        <p className="text-gray-600 text-sm md:text-base">
                            Use this Windows automated tool to diagnose and fix printer problems such as printer offline and print jobs
                            stuck in queue.
                        </p>
                        <button className="mt-6 bg-[#007DBD] text-white py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-blue-700">
                            Fix your Printer
                        </button>
                    </div>
                </div>

                {/* Printer Identification Section */}
                <div className="w-full bg-gray-100 py-14">
                    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 md:px-8 space-y-10 md:space-y-0 md:space-x-12">
                        {/* Text Section */}
                        <div className="flex-1 text-center md:text-left space-y-6">
                            <h2 className="text-xl md:text-2xl font-bold">Identify Your Printer</h2>
                            <p className="text-base md:text-lg">
                                Having trouble identifying your printer model? Look for the serial number or product name printed on the back or underside of your printer.
                                This information helps you find the right manuals, drivers, and troubleshooting solutions for your specific model.
                            </p>
                            <p className="text-base md:text-lg">
                                If you're unable to locate the details, refer to the documentation or packaging that came with your printer. Alternatively, reach out to our support
                                team for assistance.
                            </p>
                        </div>
                        <div className="hidden md:block w-px h-[350px] bg-gray-300"></div>
                        {/* Image Section */}
                        <div className="flex-1 flex justify-center md:justify-end">
                            <Image src="/hpenvy.png" alt="Printer Example" width={600} height={350} className="rounded-lg object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full">
  <div className="w-[85%] max-w-[1280px] mx-auto">
    <Image
      src="/issueone.jpg"
      alt="Printer Example"
      width={1050}
      height={200}
      className="w-full h-auto mt-10 md:mt-[40px] mb-14 md:mb-[114px] rounded-lg"
    />
  </div>
</div>
        </>
    );
}