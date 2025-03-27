import Image from 'next/image';
export default function PrinterS() {
 

  const handleSetupClick = () => {
    router.push('../services/Pages'); 
  };
    return (
        <div className="flex flex-col items-center py-10 space-y-10">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 w-full max-w-5xl p-6 border border-gray-200 rounded-lg shadow-sm">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <Image
                        src="/Printer.avif" // Replace with the actual path to your image
                        alt="Printer Setup"
                        width={500}
                        height={300}
                        className="rounded-lg object-cover"
                    />
                </div>
                {/* Text Section */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-semibold">How to setup your printer</h2>
                    <p>Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer.</p>
                    <button className="bg-[#007DBD] text-white py-2 px-4 rounded hover:bg-blue-700 onClick={handleSetupClick}">Printer Setup</button>
                    <div className="text-sm">
                        <span className="font-semibold">More support</span><br />
                        <a href="#" className="text-[#007DBD] underline">Get Instant Support</a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-center space-x-10 w-full max-w-5xl border-t border-gray-200 pt-6">
                <div className="flex flex-col items-center">
                    <Image src='' height={80} width={80} className='object-cover'/>
                    <a href="#" className="text-[#007DBD] hover:underline mt-2">Download Drivers &gt;</a>
                </div>
                <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <Image src='/waranty.png' height={80} width={80} className='object-cover'/>
                    <a href="#" className="text-[#007DBD] hover:underline mt-2">Check warranty status &gt;</a>
                    
                </div>
                    
                </div>
                <div className="flex flex-col items-center">
                    <Image src='/contact.png' height={100} width={100} className='object-cover'/>   
                    <a href="#" className="text-[#007DBD] hover:underline mt-5">Contact us &gt;</a>
                </div>
                <div className="flex flex-col items-center">
                    <Image src='/digonose.webp' height={80} width={80} className='object-cover'/>
                    <a href="#" className="text-[#007DBD] hover:underline mt-2">Diagnose & Fix &gt;</a>
                </div>
            </div>

        </div>
    );
}