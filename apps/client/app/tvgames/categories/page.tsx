"use client";

import { useState } from "react";
import { ArrowLeft, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Topbar from "../../../components/Topbar";
import { TvGamesSidebar } from "../tvgamesSidebar";



const Page = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Topbar onMenuClick={() => setSidebarOpen(!isSidebarOpen)} menu={true} />
      <div className="grid bg-black grid-cols-1 lg:grid-cols-[300px_auto] relative">
        <TvGamesSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        <TvGamesMainContent/>
      </div>
    </>
  );
};

export default Page;


const TvGamesMainContent = () => {
  return (
    <div className="flex flex-col overflow-x-auto bg-black h-screen">
      <InstantGamesSearchBar/>
      <CategoriesBack/>
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

function CategoriesBack(){
  const router = useRouter();

return (
  <button onClick={() => router.back()} className="flex items-center gap-2 p-2 text-white rounded">
    <ArrowLeft size={24} />
    <span>Back</span>
  </button>
);
}