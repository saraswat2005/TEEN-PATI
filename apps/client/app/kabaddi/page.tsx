"use client";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import React, { useState } from "react";
import Topbar from "../../components/Topbar";
import BetSlip from "../allLive/betSlip";
import Sidebars from "../allLive/sideBar";
import MainTopSec from "../../components/mainContent/MainTopsec";

const Kabaddi = () => {
  const [isKabaddiOpen, setIsKabaddiOpen] = useState(true);

  const KabaddiTournaments = ["Virtual kabaddi. QUANTUM. KPL"];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Topbar Section */}
      <div>
        <Topbar />
      </div>

      {/* Main Content Section */}

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar (Left Section) */}
        <div className=" bg-zinc-200 hidden lg:block p-3 w-72 rounded-lg shadow overflow-y-auto">
          <h2>All Tournaments</h2>
          {/* kabaddi Header */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsKabaddiOpen(!isKabaddiOpen)}
          >
            <div className="flex items-center gap-2">
              <span>🌍</span>
              <h1 className="font-medium text-gray-700">National Teams</h1>
            </div>
            <span>{isKabaddiOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
          </div>

          {/* kabaddi Tournament List */}
          <div className=""></div>
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

export default Kabaddi;
