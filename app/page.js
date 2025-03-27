import Image from "next/image";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Header from "./Components/Header";
import DataContent from "./Components/DataContent";

import Support from "./Components/Support";
import JivoChat from "./JivoChat";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      {/* <Header/> */}
      <Support/>
      <DataContent/>
      <Footer/>
      <JivoChat/>
     
    </>
  );
}
