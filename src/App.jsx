import { Children } from "react";
import "./App.css";
import Slider from "./Components/HeroSection/Slider";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer";

function Rootlayout() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <div className="grow">
       <Outlet/>
      </div>
    <Footer/>
    </div>
  );
}

export default Rootlayout;
