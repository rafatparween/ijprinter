// export default function Solutions() {
//     return (
//       <div className="bg-[#e2efff] p-8">
//         <h2 className="text-center text-[#1c85c1] text-[32px] font-medium h-[60px]">
//           We Provide Solution’s for
//         </h2>
//         <p className="text-center text-black text-[16px] mb-16 h-[24px]">
//           Storage | Software Download | Installation Issues | Network Connectivity Related Issues
//         </p>
  
//         <div className="flex justify-center space-x-16">
//           {/* First Column */}
//           <div className="flex flex-col items-center">
//             <img
//               src="https://qwebcare.com/help/images/support.png"
//               alt="Solution 1"
//               className="w-[162px] h-[162px] mb-4"
//             />
//             <h4 className="text-[#1c85c1] text-[28px] mb-1">
//               Get Instant Solution’s for Laptop & Desktop
//             </h4>
//             <p className="text-[16px] text-black max-w-[540px] mb-8">
//               If the all-in-one, elite, premium, pavilions or any other HP desktop is not working properly due to an error then connect to one of our technicians at our printer customer service number or visit
//               <a href="https://store.hp.com/us/en/cv/customerservice" className="text-black underline ml-1">
//                 https://store.hp.com/us/en/cv/customerservice
//               </a>
//             </p>
//           </div>
  
//           {/* Second Column */}
//           <div className="flex flex-col items-center">
//             <img 
//               src="https://qwebcare.com/help/images/save.png"
//               alt="Solution 2"
//               className="w-[162px] h-[162px] mb-4"
//             />
//             <h3 className="text-[#1c85c1] text-[28px]  mb-1">
//               Solution’s for the Driver Download & Installation
//             </h3>
//             <p className="text-[16px] text-black max-w-[540px]">
//               Finding and then installing the drivers for laptops, desktops, and printers is a task that requires a lot of attention and time. But our Printer services can make it so easy.
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
  



export default function Solutions() {
  return (
    <div className="bg-[#e2efff] p-8 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h2 className="text-center text-[#1c85c1] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium h-auto">
        We Provide Solution’s for
      </h2>
      <p className="text-center text-black text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mb-8 sm:mb-12 lg:mb-16">
        Storage | Software Download | Installation Issues | Network Connectivity Related Issues
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-12 lg:space-x-16">
        {/* First Column */}
        <div className="flex flex-col items-center">
          <img
            src="https://qwebcare.com/help/images/support.png"
            alt="Solution 1"
            className="w-[120px] sm:w-[140px] md:w-[162px] h-auto mb-4"
          />
          <h4 className="text-[#1c85c1] text-[20px] sm:text-[24px] md:text-[28px] mb-1 text-center">
            Get Instant Solution’s for Laptop & Desktop
          </h4>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-black max-w-[90%] sm:max-w-[80%] md:max-w-[540px] mb-8 text-center">
            If the all-in-one, elite, premium, pavilions or any other HP desktop is not working properly due to an error then connect to one of our technicians at our printer customer service number or visit
            <a href="https://store.hp.com/us/en/cv/customerservice" className="text-black underline ml-1">
              https://store.hp.com/us/en/cv/customerservice
            </a>
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center">
          <img 
            src="https://qwebcare.com/help/images/save.png"
            alt="Solution 2"
            className="w-[120px] sm:w-[140px] md:w-[162px] h-auto mb-4"
          />
          <h3 className="text-[#1c85c1] text-[20px] sm:text-[24px] md:text-[28px] mb-1 text-center">
            Solution’s for the Driver Download & Installation
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-black max-w-[90%] sm:max-w-[80%] md:max-w-[540px] text-center">
            Finding and then installing the drivers for laptops, desktops, and printers is a task that requires a lot of attention and time. But our Printer services can make it so easy.
          </p>
        </div>
      </div>
    </div>
  );
}
