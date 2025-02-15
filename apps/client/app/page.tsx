"use client";
import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Hotmatches from "../components/mainContent/Hotmatches";
import Footer from "../components/mainContent/Footer";
import SidebarAndMainContent from "../components/sidebar/Sidebar";
import { MainContent } from "../components/mainContent/MainContent";
// import { login , register } from "../actions/auth";

const Page = () => {
  return (
    <>
      <Topbar />
      <div className="grid bg-black grid-cols-1 md:grid-cols-[30%_70%] lg:grid-cols-[20%_80%]">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
};

export default Page