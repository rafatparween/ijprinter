// import Image from 'next/image';

// export default function Digonode() {
//   const items = [
//     { name: "Printer Setup", icon: "https://cdn-icons-png.freepik.com/512/8625/8625321.png" },
//     { name: "Printer Offline", icon: "https://static.vecteezy.com/system/resources/previews/024/198/139/non_2x/printer-icon-in-blue-color-vector.jpg" },
//     { name: "Wireless Printer", icon: "https://cdn-icons-png.freepik.com/512/6864/6864708.png" },
//     { name: "Color Or Black Ink Not Printing", icon: "https://www.shareicon.net/data/2015/05/04/33421_printer_256x256.png" },
//     { name: "Scanner", icon: "https://t3.ftcdn.net/jpg/04/81/66/56/360_F_481665663_aij2vpvwMjSS1LltlvcgmjzsOYSuHgbe.jpg" },
//     { name: "Fax Issues", icon: "https://pngimg.com/d/printer_PNG101582.png" },
//   ];

//   return (
//     <div className="bg-[#F0F0F0] flex flex-col items-center py-12">
//       {/* Title */}
//       <h1 className="text-4xl font-semibold text-gray-800 mb-10 text-center">Diagnose & Solve</h1>

//       {/* Grid Container */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 w-[90%] max-w-screen-xl">
//         {items.map((item, index) => (
//           <div 
//             key={index} 
//             className="bg-white shadow-lg p-6 flex flex-col items-center justify-center 
//                       rounded-tr-[80px] transition-all duration-300 ease-in-out hover:rounded-none 
//                       w-full max-w-[340px] h-[171px] mx-auto"
//           >
//             <img src={item.icon} alt={item.name} width={80} height={80} />
//             <p className="mt-4 text-center text-lg font-semibold text-[#1C8DCE]">{item.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import Image from 'next/image';

export default function Digonode() {
  const items = [
    { name: "Printer Setup >", icon: "https://cdn-icons-png.freepik.com/512/8625/8625321.png" },
    { name: "Printer Offline >", icon: "https://static.vecteezy.com/system/resources/previews/024/198/139/non_2x/printer-icon-in-blue-color-vector.jpg" },
    { name: "Wireless Printer >", icon: "https://cdn-icons-png.freepik.com/512/6864/6864708.png" },
    { name: "Ink Not Printing >", icon: "https://www.shareicon.net/data/2015/05/04/33421_printer_256x256.png" },
    { name: "Scanner >", icon: "https://t3.ftcdn.net/jpg/04/81/66/56/360_F_481665663_aij2vpvwMjSS1LltlvcgmjzsOYSuHgbe.jpg" },
    { name: "Fax Issues >", icon: "https://pngimg.com/d/printer_PNG101582.png" },
    { name: "Download Drivers >", icon: "/download.png" },
    { name: "Contact us >", icon: "/call.png" },
  ];

  return (
    <div className="bg-white flex flex-col items-center py-8 w-full">
      <div className="border-t border-gray-300 w-full max-w-screen-xl"></div> {/* Top Border */}

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 w-[90%] max-w-screen-xl py-4 relative">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center relative">
            {/* Icon Container */}
            <div className="bg-[#0078D4] shadow-lg rounded-[37px] w-[137px] h-[137px] flex items-center justify-center">
              <img src={item.icon} alt={item.name} width={60} height={60} />
            </div>
            {/* Text Below Icon */}
            <p className="text-[#0078D4] text-sm font-medium text-center mt-2">{item.name}</p>
            {/* 
            {/* Vertical Divider (Only if it's not the last column) */}
            {index % 1 === 0 && index !== items.length - 1 && (
              <div className="absolute top-0 right-0 h-full border-r border-gray-300"></div>
            )}
          </div>
        ))}
      </div>

      <div className="border-b border-gray-300 w-full max-w-screen-xl"></div> {/* Bottom Border */}
    </div>
  );
}
