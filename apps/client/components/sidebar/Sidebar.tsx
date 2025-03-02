"use client";

import { useRouter } from "next/navigation";
import { PopularContainer } from "./PopularContainer";
import { X } from "lucide-react";

export const Sidebar = ({ isOpen, onClose }: any) => {
  const router = useRouter();
  const pages = [
    { name: "All Live", path: "/allLive", imagePath: "allLive.png" },
    { name: "Favorites", path: "/", imagePath: "favoriates.png" },
    { name: "Top Parleys", path: "/topparleys", imagePath: "topParleys.png" },
    { name: "Promotions", path: "/promotions", imagePath: "promotions.png" },
    { name: "Cricket", path: "/cricket", imagePath: "cricket.png" },
    { name: "Football", path: "/football", imagePath: "football.png" },
    { name: "Basketball", path: "/basketball", imagePath: "basketball.png" },
    { name: "Kabaddi", path: "/kabaddi", imagePath: "kabaddi.png" },
  ];

  return (
    <div
      className={`h-screen overflow-y-auto text-white flex-col p-4 border-r border-gray-800 bg-black lg:flex ${
        isOpen ? "fixed inset-0 z-100 flex" : "hidden"
      } lg:relative lg:flex`}
    >
      <button
        className="lg:hidden absolute top-4 left-4 text-white p-2 rounded"
        onClick={onClose}
      >
        <X size={24} />
      </button>
      <nav className="space-y-1 mt-10 lg:mt-0">
        {pages.map((page) => (
          <div
            key={page.path}
            className="flex items-center gap-x-2 px-5 py-3 h-14 hover:bg-cyan-950 rounded-2xl cursor-pointer"
            onClick={() => {
              router.push(page.path);
              onClose();
            }}
          >
            <img src={page.imagePath} alt={page.name} width={30} />
            <div className="pl-4">{page.name}</div>
          </div>
        ))}
      </nav>
      <div>
        <PopularContainer gameName="CRICKET" height="h-96" />
        <PopularContainer gameName="FOOTBALL" height="h-72" />
        <PopularContainer gameName="BASKETBALL" height="h-96" />
      </div>
    </div>
  );
};