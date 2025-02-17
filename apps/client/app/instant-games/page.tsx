"use client";
import { Gift, Home, Menu, X } from "lucide-react";
import Topbar from "../../components/Topbar";
import Carousel from "../../components/crausal";
import Image from "next/image";
import { useState } from "react";

import { Search } from "lucide-react"; // Importing icons from React Lucide


const InstantGames = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <Topbar />
      <div className="grid bg-black grid-cols-1 lg:grid-cols-[15%_85%] h-screen">
        {/* Sidebar for Large Screens */}
        <div className="h-screen overflow-y-auto text-white hidden lg:block flex-col border-r border-gray-800">
          <InstantGamesSidebar />
        </div>

        {/* Main Content */}
        <div className="m-8">
          <div className="flex justify-between items-center relative">
            <InstantGamesSearchBar />
            {/* Toggle Button for Medium Screens */}
            <button
              className="md:block lg:hidden text-white p-2 rounded-lg hover:bg-gray-800 absolute  right-1 flex items-center"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Sidebar Overlay for Medium Screens */}
          {isSidebarOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50 z-40 md:block lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              ></div>
              {/* Sidebar */}
              <div className="fixed inset-y-0 left-0 w-full bg-black text-white z-50 overflow-y-auto md:block lg:hidden">
                <div className="flex justify-end p-4">
                  <button
                    className="text-white p-2 rounded-lg hover:bg-gray-800"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>
                <InstantGamesSidebar />
              </div>
            </>
          )}

          <Carousel />
          <InstantGamesContent />
        </div>
      </div>
    </div>
  );
};

export default InstantGames;

function InstantGamesSidebar() {
  return (
    <div className="h-full">
      <div className="flex cursor-pointer gap-3 hover:bg-gray-800 p-3 rounded-2xl mx-6 my-4">
        <Home size={24} />
        <div className="text-xl">Lobby</div>
      </div>
      <div className="flex cursor-pointer gap-3 hover:bg-gray-800 p-3 rounded-2xl mx-6 mb-4">
        <Gift size={24} />
        <div className="text-xl">Bonuses</div>
      </div>
      <hr className="border-gray-800"/>
      <div className="w-full bg-black text-white p-4 my-4 ">
        <div className="flex justify-between items-center text-gray-300 mb-4 cursor-pointer px-4">
          <span className="text-lg font-semibold">Categories</span>
          <span className="text-sm cursor-pointer text-white">All &gt;</span>
        </div>
        <ul className="space-y-0">
          {[
            { icon: "🔥", label: "Top Games", count: 9 },
            { icon: "🎰", label: "Slot Games", count: 6 },
            { icon: "💥", label: "Crash Games", count: 4 },
            { icon: "♠️", label: "Table Games", count: 12 },
            { icon: "🎮", label: "Action Games", count: 1 },
          ].map((item, index) => (
            <li key={index} className="flex justify-between items-center text-white cursor-pointer hover:bg-gray-800 rounded-2xl px-4 py-3">
              <span className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </span>
              <span className="text-gray-500">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-gray-800" />
      <div className="w-full bg-black text-white p-4">
        <div className="flex justify-between items-center text-gray-300 mb-4 cursor-pointer px-4">
          <span className="text-lg font-semibold">Providers</span>
          <span className="text-sm cursor-pointer hover:text-white">All &gt;</span>
        </div>
        <ul className="space-y-0">
          {[
            { icon: "⚡", label: "Parimatch Games", count: 9 },
            { icon: "🎴", label: "SmartSoft", count: 6 },
            { icon: "🎡", label: "Pragmatic Play", count: 4 },
            { icon: "🎮", label: "Gaming Corps Hub", count: 12 },
            { icon: "🎰", label: "Fugaso", count: 1 },
          ].map((item, index) => (
            <li key={index} className="flex justify-between items-center text-gray-400 hover:text-white cursor-pointer hover:bg-gray-800 rounded-2xl px-4 py-3">
              <span className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </span>
              <span className="text-gray-500">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


function InstantGamesSearchBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <div className="text-white flex justify-between w-full">
      <div>
        <div className="text-3xl font-bold">Instant Games</div>
      </div>
      <div className="flex items-center">
        {/* Search Bar for Medium and Large Screens */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-900 rounded-lg px-3 py-1 outline-none md:mr-14 lg:mr-0"
          />
        </div>

        {/* Search Icon for Small Screens */}
        <div className="md:hidden right-10">
          <button
            className="text-white p-2 rounded-lg hover:bg-gray-800 absolute right-12 bottom-0"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            {isSearchVisible ? <X size={24} /> : <Search size={24} />}
          </button>
        </div>

        {/* Search Bar for Small Screens */}
        {isSearchVisible && (
          <div className="md:hidden absolute top-16 right-4 bg-gray-900 rounded-lg">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-900 rounded-lg px-3 py-1 outline-none"
              autoFocus
            />
          </div>
        )}
      </div>
    </div>
  );
}



function InstantGamesContent() {
  return (
    <div className="bg-black p-3 w-full ml-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-white text-lg text-center items-center font-semibold">
            Games
          </span>
        </div>
        <a
          href="#"
          className="text-gray-400 text-sm hover:text-white flex items-center space-x-1"
        >
          <span>more</span>
          <span>→</span>
        </a>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {Array(8)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="w-60 h-44 rounded-lg shrink-0 relative"
              >
                <Image
                  src="/sports1.png"
                  alt="Game Image"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
