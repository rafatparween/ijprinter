// export default function Avoid() {
//   return (
//     <div className="bg-[#dbe8f0] flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-8 max-w-screen-xl mx-auto ">
//       {/* Left Image Section */}
//       <div className="w-full md:w-1/2 mb-6 md:mb-0">
//         <img
//           src="https://t3.ftcdn.net/jpg/01/29/04/10/360_F_129041088_2oiesPtf5kZF9y2thvHHzXvqiGhhmouf.jpg" // Use a placeholder image or the actual image path here
//           alt="Pocket Empty"
//           className="object-cover w-full 2xl:w-[600px] xl:w-[600px]  h-auto"
//         />
//       </div>

//       {/* Right Text Section */}
//       <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left px-2 md:px-0">
//         <h1 className="text-2xl md:text-4xl font-bold">
//           Avoiding Printer Maintenance <br />
//           <span className="text-orange-500">Can Burn A Hole In Your Pocket!!</span>
//         </h1>

//         <h2 className="text-xl md:text-3xl text-blue-500 font-semibold">How?</h2>
        
//         <p className="text-base md:text-lg">
//           If You Don't Take Good Care Of Your Printers And Copiers, They Might Break
//           Down Sooner Than Expected. If You Don't Do Regular Maintenance, You Might
//           Need To Replace Them Sooner. Spending A Little On Maintenance Is Way
//           Cheaper Than Buying A New Printer.
//         </p>

//         <button className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-[30px] mx-auto md:mx-0">
//           Get Assistance
//         </button>
//       </div>

//       {/* Assistance Call Section (Vertical Text) */}
//       {/* <div className="bg-blue-600 rotate-90 text-white p-3 text-center fixed right-0 top-1/4">
//         Call for Assistance At +1 (866) 200-9902
//       </div> */}
//     </div>
//   );
// }



import Image from 'next/image';

export default function Avoid() {
  return (
    <div className="bg-[#dbe8f0] flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-8 w-[90%] max-w-screen-xl mx-auto">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://t3.ftcdn.net/jpg/01/29/04/10/360_F_129041088_2oiesPtf5kZF9y2thvHHzXvqiGhhmouf.jpg"
          alt="Pocket Empty"
          className="object-cover w-full max-w-[600px] h-auto rounded-lg"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left px-4">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          Avoiding Printer Maintenance <br />
          <span className="text-orange-500">Can Burn A Hole In Your Pocket!!</span>
        </h1>

        <h2 className="text-xl md:text-3xl text-blue-500 font-semibold">How?</h2>
        
        <p className="text-base md:text-lg text-gray-700">
          If you don't take good care of your printers and copiers, they might break 
          down sooner than expected. Without regular maintenance, you might need to 
          replace them earlier, costing more in the long run. Spending a little on 
          maintenance is way cheaper than buying a new printer.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full mx-auto md:mx-0 shadow-md hover:bg-blue-700 transition">
          Get Assistance
        </button>
      </div>
    </div>
  );
}
