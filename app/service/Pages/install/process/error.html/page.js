// import JivoChat from "@/app/JivoChat";
// import Image from "next/image";

// export default function ErrorPage() {
//       return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 ">
          
    
//             <div className="mb-6 flex justify-center">
//               <Image
//                 src="/error.png" 
//                 alt="Printer Error"
//                 width={892}
//                 height={632}
//               />
            
//           </div>
//           <JivoChat/>
//         </div>
//       );
//     };



import Image from "next/image";
function ErrorPageHndle(){
    return(
        <>
            <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
<div className="mb-6 flex justify-center">
  <Image
    src="/error.png"  // Make sure error.png exists in your public folder
    alt="Printer Error"
    width={680}
    height={515}
  />
</div>
</div>
        </>

    )
}
export default ErrorPageHndle;