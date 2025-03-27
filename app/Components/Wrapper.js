import React, { useState, useEffect } from 'react';
import MobileHelp from './MobileHelp';
import Helppage from './Helppage';


const Wrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the breakpoint for Tailwind's "lg"
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      {isMobile ? <MobileHelp /> : <Helppage />}
    </>
  );
};

export default Wrapper;
