"EPSON ERROR PRINNTER"
import Image from "next/image";
export default function Demo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">

      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl relative" style={{ minHeight: '529px' }}>
       


        {/* Content */}
        <div className="">
          <div className="bg-gray-100 px-6 py-4 flex justify-between items-center h-[79px]">
            <div className="text-left">
              <h1 className="text-lg font-semibold">Installing</h1>
              
            </div>
            <Image
              src="/circular.png"
              height={30}
              width={60}
              alt="HP Logo"
            />
          </div>
          <div className="flex justify-center mb-6 mt-[40px] mb-[40px]">
            <img
              src="https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/printer_error.png" // Replace this with the actual path to the printer error image
              alt="Printer Error"
              width={150}
              height={150}
            />
          </div>
         
          <p className="font-bold text-center text-xl mb-2">Please contact support through live chat for printer setup installation</p>
          <p className="text-center text-[#1C8DCEED] font-bold text-xl mb-[96px]">Using Printer Setup Support Chat</p>
        </div>
        <div className="relative mt-8">
          
          <div
            className="absolute bottom-0 left-0 w-full h-24 bg-[#1C8DCEED]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
          ></div>

          {/* Text Content */}
          <div className="relative flex items-center justify-start text-white p-4">
            <span className="text-lg font-semibold">24x7 Printer Assistance</span>
          </div>
        </div>


      </div>
    </div>
  );
}


