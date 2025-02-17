"use client";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import React, { useState } from "react";
import Topbar from "../../components/Topbar";
import BetSlip from "../allLive/betSlip";
import Sidebars from "../allLive/sideBar";
import MainTopSec from "../../components/mainContent/MainTopsec";

const BasketBall = () => {
  const [isCricketOpen, setIsCricketOpen] = useState(true);

  const cricketTournaments = [
    "Virtual Cricket. VSL. Asia Cup (1 over)",
    "Virtual Cricket. VSL. BBL (1 over)",
    "Virtual Cricket. VSL. World Legends (1 over)",
    "Virtual Cricket. VSL. IPL (1 over)",
    "Virtual Cricket. QUANTUM. IPL 2025",
    "Virtual Cricket. QUANTUM. Fast 5 International 2025",
    "India. T20 Guwahati Premier League",
    "India. Chandigarh T20 League",
    "India. Ranji Trophy",
    "India. Amateur League T10",
    "Pakistan. Karachi Challenge Cup",
    "Zimbabwe. Logan Cup",
    "India. Women. Agra Distict League",
    "ECricket. IPL (10 overs)",
    "Virtual Cricket. QUANTUM. LPL 2025",
    "Virtual Cricket. QUANTUM. WPL 2025",
  ];

  return (
    <div className="flex  overflow-y-autoflex flex-col h-screen overflow-hidden b">
      {/* Topbar Section */}
      <div>
        <Topbar />
      </div>

      {/* Main Content Section */}

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar (Left Section) */}
        <div className=" bg-zinc-200 hidden lg:block p-3 w-72 rounded-lg shadow overflow-y-auto">
          <h2>All Tournaments</h2>
          {/* Cricket Section */}
          <div className="mt-4 bg-zinc-200 p-3 rounded-lg shadow">
            {/* Cricket Header */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsCricketOpen(!isCricketOpen)}
            >
              <div className="flex items-center gap-2">
                <span>🏏</span>
                <h3 className="font-medium text-gray-800">Cricket</h3>
              </div>
              <span>{isCricketOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
            </div>

            {/* Cricket Tournament List */}
            {isCricketOpen && (
              <ul className="mt-2">
                {cricketTournaments.map((tournament, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-100 p-2 rounded-lg my-1"
                  >
                    <span className="text-sm">{tournament}</span>
                    <input type="checkbox" className="h-5 w-5" />
                  </li>
                ))}
              </ul>
            )}
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

export default BasketBall;
