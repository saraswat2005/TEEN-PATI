"use client";

import { useRouter } from "next/navigation";
import { X, Home, Gift, Star, Rocket, Dice1, LayoutGrid, Gamepad2 } from "lucide-react";
import { ChevronRight, Flame, Ticket, Target, CircleDollarSign } from "lucide-react";


export const TvGamesSidebar = ({ isOpen, onClose }: any) => {
  const router = useRouter();

  const navigationItems = [
    { icon: <Home size={20} />, label: "Lobby", path: "/loby" },
    { icon: <Star size={20} />, label: "Favorites", path: "/" },
  ];

  const categories = [
    { icon: <Flame size={20} />, label: "Top", count: 9, path: "/" },
    { icon: <CircleDollarSign size={20} />, label: "Wheel of Fortune", count: 4, path: "/" },
    { icon: <Ticket size={20} />, label: "Lotteries", count: 12, path: "/" },
    { icon: <Target size={20} />, label: "Sport Games", count: 1, path: "/" },
  ];

  return (
    <div
      className={`h-screen overflow-y-auto text-white flex-col border-r border-gray-800 bg-black ${
        isOpen ? "fixed inset-0 z-100 flex" : "hidden"
      } lg:relative lg:flex`}
    >
      {/* Close Button (Mobile) */}
      <button className="lg:hidden absolute top-4 left-4 text-white p-2 rounded" onClick={onClose}>
        <X size={24} />
      </button>

      {/* Navigation Items */}
      <nav className="space-y-1 mt-22 lg:mt-0 w-full border-b  border-gray-800 p-2">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-x-3 px-5 py-3 h-14 hover:bg-gray-800 rounded-2xl cursor-pointer mt-2"
            onClick={() => {
              router.push(item.path);
              onClose();
            }}
          >
            {item.icon}
            <span className="text-lg">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Categories Section */}
      <div className="mt-6 px-5 p-2 border-gray-800">
        <div className="flex justify-between items-center text-gray-400 mb-2">
          <span className="text-lg font-semibold">Categories</span>
          <span
            className="text-sm cursor-pointer hover:text-white"
            onClick={() => router.push("/tvgames/categories")}
          >
            All &gt;
          </span>
        </div>
        <ul>
          {categories.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-2 py-3 hover:bg-gray-800 rounded-2xl cursor-pointer"
              onClick={() => {
                router.push(item.path);
                onClose();
              }}
            >
              <span className="flex items-center gap-3">{item.icon} {item.label}</span>
              <span className="text-gray-500">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
