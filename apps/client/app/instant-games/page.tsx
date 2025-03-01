"use client";

import { useState } from "react";
import CardComponent from "../../components/mainContent/CardComponent";
import Topbar from "../../components/Topbar";
import { InstantGamesSidebar } from "./InstantGameSIdebar";
import { Search, X } from "lucide-react";
import { ImageCarousel } from "../../components/crausal";
import { constants } from "buffer";



const Page = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Topbar onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="grid bg-black grid-cols-1 lg:grid-cols-[300px_auto] relative">
        <InstantGamesSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        <InstantGamesMainContent/>
      </div>
    </>
  );
};

export default Page;


const imageData = [
  { src: "/sports1.png", link: "https://example.com/1" },
  { src: "/kabaddi.png", link: "https://example.com/2" },
  { src: "/gamepad.png", link: "https://example.com/3" },
];


const InstantGamesMainContent = () => {
  return (
    <div className="flex flex-col overflow-x-auto bg-black h-screen">
      <InstantGamesSearchBar/>
      <ImageCarousel images={imageData}/>
    </div>
  );
};


function InstantGamesSearchBar() {
  return (
    <div className="text-white flex flex-col md:flex-row justify-between w-full p-4 md:p-8 space-y-3 md:space-y-0">
      {/* Title Section */}
      <div className="text-2xl md:text-3xl font-bold text-center md:text-left">
        Instant Games
      </div>

      {/* Search Bar */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <div className="bg-gray-900 rounded-lg w-full mx-6 md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-900 text-white rounded-lg px-3 py-2 w-full md:w-64 outline-none"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}