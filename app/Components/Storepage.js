"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Storepage() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const tips = [
        { 
            title: "Check and update your Windows version", 
            content: "Update your operating system to the latest Windows version, if available. Ensure compatibility with Windows 10 version 1809 or higher or Windows 11. To check for updates, go to 'Start' > 'Settings' > 'Windows Update' and select 'Check for updates'." 
        },
        { 
            title: "Disconnect from a VPN", 
            content: "Apps from the Microsoft Store might not install while connected to a VPN. Before disconnecting, consider your location and the security of the Wi-Fi network." 
        },
        { 
            title: "Skip Microsoft account creation", 
            content: "If prompted to create or sign in to a Microsoft account, you can close the window and proceed to open the app store. A Microsoft account is not required to install or use essential printer software." 
        },
        { 
            title: "Check computer time and location settings", 
            content: "If the Microsoft Store won’t open, ensure your time and location settings are correct. Go to 'Start' > 'Settings' > 'Time & Language' and verify 'Date & Time' and 'Region' match your current location and time zone." 
        },
        { 
            title: "Reset the Microsoft Store cache", 
            content: "Press the Windows key + R to open the 'Run' dialog box, type 'wsreset.exe', and select 'OK'. A blank window will appear for about 10 seconds, and then the app store will launch automatically." 
        },
    ];
    

    return (
        <div className="max-w-4xl mx-auto p-6 mt-[-15px] 2xl:ml-[187px] xl:ml-[109px]">
            {/* Store icons aligned to the right */}
            <div className="flex justify-end space-x-2 mb-6">
                {/* <img src="https://w7.pngwing.com/pngs/867/239/png-transparent-google-play-logo-google-play-android-app-store-play-now-button-text-label-logo.png" alt="Google Play" className="h-[40px] w-[129px] object-contain" /> */}
            </div>

            {/* Troubleshooting heading with icon */}
            <div className="flex items-center space-x-2 mb-6">
            <img src='https://www.shutterstock.com/image-vector/assistance-settings-troubleshooting-repair-isolated-260nw-2309816209.jpg' className='h-[40px] w-[40px]' />
                <h2 className="text-[#007DBA] text-[30px] font-semibold">
                    Troubleshooting tips for launching the Microsoft Store
                </h2>
            </div>

            {/* List of troubleshooting tips with dropdown icons */}
            <ul className="space-y-3">
                {tips.map((tip, index) => (
                    <li key={index} className="border-b pb-3">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle(index)}>
                            <span className="text-base text-gray-800 text-[22px]">{tip.title}</span>
                            <svg
                                className={`h-6 w-6 text-gray-400 transition-transform transform ${openIndex === index ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        {/* Dropdown content */}
                        {openIndex === index && (
                            <div className="mt-3 text-black text-[20px]">
                                {tip.content}
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            {/* Support section */}
            <div className="mt-8 border-t pt-4">
                <a href="/support" className="text-blue-600 flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="48" viewBox="0 0 45 48" fill="none">
                        <g clip-path="url(#clip0_8090_2190)">
                            <path d="M41.5701 46.23C39.2781 43.2712 36.3453 40.8702 32.9922 39.2075C29.6391 37.5448 25.9527 36.6635 22.2101 36.63C18.4724 36.6635 14.7908 37.5427 11.4414 39.2018C8.09192 40.861 5.16159 43.2569 2.87012 46.21" stroke="#027AAE" stroke-width="2.29" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M29.1601 29.63C29.1621 30.0552 29.0379 30.4715 28.8033 30.8261C28.5687 31.1808 28.2342 31.4579 27.8421 31.6225C27.45 31.787 27.0179 31.8316 26.6005 31.7506C26.183 31.6696 25.799 31.4666 25.4969 31.1673C25.1948 30.868 24.9883 30.4859 24.9034 30.0692C24.8185 29.6526 24.8591 29.2201 25.02 28.8265C25.1809 28.4329 25.4549 28.0958 25.8073 27.8579C26.1598 27.62 26.5749 27.492 27.0001 27.49C27.5686 27.49 28.1139 27.7151 28.5168 28.1162C28.9198 28.5172 29.1474 29.0615 29.1501 29.63" fill="#027AAE" />
                            <path d="M5.31 25.12H2.85C2.13756 25.1584 1.43874 24.9142 0.905172 24.4406C0.371608 23.9669 0.0463569 23.302 0 22.59L0 16.13C0.0463569 15.418 0.371608 14.7531 0.905172 14.2794C1.43874 13.8058 2.13756 13.5616 2.85 13.6H5.31V25.12Z" fill="#027AAE" />
                            <path d="M38.71 13.6H41.18C41.8874 13.5697 42.5785 13.8175 43.1055 14.2904C43.6325 14.7632 43.9536 15.4235 44 16.13V22.59C43.9536 23.3001 43.6297 23.9635 43.0984 24.4369C42.567 24.9103 41.8707 25.1556 41.16 25.12H38.71V13.6Z" fill="#027AAE" />
                            <path d="M21.88 32.21C19.074 32.2076 16.3459 31.2868 14.1124 29.5882C11.8789 27.8896 10.2628 25.5066 9.5109 22.8032C8.75903 20.0997 8.91273 17.2245 9.94852 14.6167C10.9843 12.0088 12.8453 9.81168 15.2471 8.36086C17.649 6.91005 20.4597 6.28531 23.25 6.58206C26.0403 6.87882 28.6567 8.08076 30.6997 10.0043C32.7427 11.9278 34.0999 14.4672 34.564 17.2346C35.0281 20.002 34.5737 22.8452 33.27 25.33" stroke="#027AAE" stroke-width="2.29" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.75 19.24C3.76774 14.7591 5.44423 10.4436 8.45606 7.1258C11.4679 3.80805 15.6016 1.72318 20.0599 1.27337C24.5182 0.823567 28.9851 2.0407 32.599 4.68998C36.2128 7.33926 38.7176 11.233 39.63 15.62C39.63 16.79 39.63 23.91 39.63 25.3C38.63 29.91 35.07 30.1 27.63 30.1" stroke="#027AAE" stroke-width="2.29" stroke-miterlimit="10" stroke-linecap="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_8090_2190">
                                <rect width="44.02" height="47.37" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className='text-[#007DBA] text-[30px]'>Need additional help with setup? Visit Support</span>
                </a>
            </div>
        </div>
    );
}
