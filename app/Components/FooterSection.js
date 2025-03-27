// import Link from "next/link";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faFacebook, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';


// const FooterSection = () => {
//   return (
//     <footer className="bg-black text-gray-400 text-sm w-full">
//       {/* Upper part with links */}
//       <div className="max-w-[1280px] w-[90%] mx-auto py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        
//         {/* First Column */}
//         <div>
//           <ul>
//             <li className="mb-2 text-white font-semibold">About Us</li>
//             {["Contact Printer", "Careers", "Investor relations", "Sustainable impact", 
//               "Diversity, Equity and Inclusion", "Press center", "The Garage", 
//               "Printer Store Newsletter", "Printer Printables Newsletter"].map((item, index) => (
//               <li key={index} className="mb-2 hover:text-gray-400 cursor-pointer">{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Second Column */}
//         <div>
//           <ul>
//             <li className="mb-2 text-white font-semibold">Ways to buy</li>
//             {["Shop online", "Call an Printer rep", "Find a reseller", 
//               "Enterprise store", "Public sector purchasing"].map((item, index) => (
//               <li key={index} className="mb-2 hover:text-gray-400 cursor-pointer">{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Third Column */}
//         <div>
//           <ul>
//             <li className="mb-2 text-white font-semibold">Support</li>
//             {[
//               { label: "About", path: "/about" },
//               { label: "Privacy Policy", path: "/privacyPolicy" },
//               { label: "Disclaimer", path: "/disclaimer" },
//               { label: "Terms & Conditions", path: "/terms&condition" },
//             ].map((link, index) => (
//               <li key={index} className="mb-2">
//                 <Link legacyBehavior href={link.path}>
//                   <a className="hover:text-gray-400 cursor-pointer">{link.label}</a>
//                 </Link>
//               </li>
//             ))}
//             {["Support & troubleshooting", "Download drivers", "Register your product",
//               "Authorized service providers", "Check repair status", "Fraud alert",
//               "Security Center"].map((item, index) => (
//               <li key={index} className="mb-2 hover:text-gray-400 cursor-pointer">{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Fourth Column */}
//         <div>
//           <ul>
//             <li className="mb-2 text-white font-semibold">Printer Partners</li>
//             {["Printer Amplify Partner Program", "Printer Partner Portal", "Developers"].map((item, index) => (
//               <li key={index} className="mb-2 hover:text-gray-400 cursor-pointer">{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Fifth Column: Stay Connected */}
//         <div>
//           <ul>
//             <li className="mb-2 text-white font-semibold">Stay connected</li>
//             <div className="flex space-x-4">
//               {[faLinkedin, faFacebook, faInstagram, faTwitter, faYoutube, faTiktok].map((icon, index) => (
//                 <a key={index} href="#" className="text-white hover:text-gray-400 text-2xl">
//                   <FontAwesomeIcon icon={icon} />
//                 </a>
//               ))}
//             </div>
//           </ul>
//         </div>
//       </div>

//       {/* Lower part with copyright */}
//       <div className="border-t border-gray-600 py-4 text-center max-w-[1280px] w-[90%] mx-auto">
//         <p className="text-xs text-gray-400">
//           © Copyright, All Rights Reserved by micro-sonic
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;



'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterSection = () => {
    return (
        <footer className="text-white py-20 bg-black h-[400px] pt-[14px]">
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <div className="font-bold text-center">
                        <h1 className="text-[32px] mt-[89px]">Micro-Sonic</h1>
                    </div>
                </div>

                <div>
                    <p>Let us help</p>
                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About us', path: '/about' },
                            { name: 'Contact us', path: '/contact' },
                            { name: 'Services', path: '/services' },
                            { name: 'Disclaimer', path: '/disclaimer' }
                        ].map(({ name, path }) => (
                            <Link
                                key={name}
                                href={path}
                                className="block md:inline-block py-2 hover:text-gray-500"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex flex-col text-start mb-4 md:mb-0 text-[14px]">
                        {[
                            { name: 'Terms and Conditions', path: '/terms&condition' },
                            { name: 'Privacy Policy', path: '/privacyPolicy' },
                            { name: 'License Agreement', path: '/license-agreement' },
                            { name: 'Copyright Information', path: '/copyright-information' },
                            { name: 'Cookies Policy', path: '/cookies-policy' }
                        ].map(({ name, path }) => (
                            <Link
                                key={name}
                                href={path}
                                className="block md:inline-block py-2 hover:text-gray-500"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        {[
                            { icon: FaFacebook, bgColor: 'bg-blue-600', link: '#' },
                            { icon: FaInstagram, bgColor: 'bg-pink-600', link: '#' },
                            { icon: FaTwitter, bgColor: 'bg-blue-600', link: '#' },
                            { icon: FaYoutube, bgColor: 'bg-red-600', link: '#' }
                        ].map(({ icon: Icon, bgColor, link }, index) => (
                            <a
                                key={index}
                                href={link}
                                className={`${bgColor} p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110`}
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-10 mt-[-103px]">
                <span className="text-gray-400 leading-10">© Copyright, All Rights Reserved by micro-sonic </span>
            </div>
        </footer>
    );
};

export default FooterSection;
