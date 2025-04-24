"use client";

import Avoid from "../Components/Avoid";
import Digonode from "../Components/Digonode";
import Footer from "../Components/Footer";
import FooterSection from "../Components/FooterSection";
import NextHeader from "../Components/NextHeader";
import NextNavbar from "../Components/NextNavbar";

import SupportPage from "../Components/SupportPage";
import Wrapper from "../Components/Wrapper";
import JivoChat from "../JivoChat";
import PrinterSetup from "./content/PrinterSetup";




function Home() {
  return (
    <>
    
      <NextNavbar/>
      <NextHeader/>
      <PrinterSetup/>
      <Digonode/>
      <SupportPage/>
     
      <Footer/>
      <JivoChat/>


    </>
  );
}

export default Home;