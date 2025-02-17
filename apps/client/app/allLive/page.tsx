"use client";
import React from "react";
import Topbar from "../../components/Topbar";
import Sidebars from "./sideBar";
import { Ticket } from "lucide-react";
import BetSlip from "./betSlip";
import MainTopSec from "../../components/mainContent/MainTopsec";

const AllLive = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Topbar Section */}
      <div>
        <Topbar />
      </div>

      
      {/* Main Content Section */}
      <div className="flex flex-grow overflow-hidden ">
        {/* Sidebar (Left Section) */}
        <div className="overflow-y-auto">
          <Sidebars />
        </div>

        {/* Middle Section (Main Content) */}
        <div className="bg-white flex-grow p-4">
          <MainTopSec />
        </div>

        {/* betslip section  */}

        <BetSlip />
      </div>
    </div>
  );
};

export default AllLive;
