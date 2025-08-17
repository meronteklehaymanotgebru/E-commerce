"use client";

import React from "react";
import NavBar from "../sharedComponents/Navbar";
import TopBanner from "../sharedComponents/TopBanner";
import Footer from "../sharedComponents/Footer";
import NewItem from "./components/NewItems";
import Services from "./components/Services";
import { AiOutlineHeart } from "react-icons/ai"; 
import { FiShoppingCart } from "react-icons/fi";  
import SidebarVoucher from "./components/Onboarding";
import Home from "./components/Category";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
   <div className="flex justify-between items-center w-full py-4 bg-gray-100 px-6 md:px-20">
  <div className="flex-grow">
    <NavBar />
  </div>
  <div className="flex space-x-6">
    <AiOutlineHeart className="w-6 h-6 cursor-pointer text-red-500 hover:text-red-700" />
    <FiShoppingCart className="w-6 h-6 cursor-pointer text-gray-700 hover:text-gray-900" />
  </div>
</div>
      <main className="flex-grow bg-white">
        <SidebarVoucher/>
        
        <Home/>
        <NewItem />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
