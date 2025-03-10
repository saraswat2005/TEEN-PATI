"use client";

import { useRouter } from "next/navigation";
import { X, Home, Gift, Star, Flame, Rocket, Dice1, LayoutGrid, Gamepad2 } from "lucide-react";

export const InstantGamesSidebar = ({ isOpen, onClose }: any) => {
  const router = useRouter();

  const navigationItems = [
    { icon: <Home size={20} />, label: "Lobby", path: "/" },
    { icon: <Gift size={20} />, label: "Bonuses", path: "/" },
    { icon: <Star size={20} />, label: "Favorites", path: "/" },
  ];

  const categories = [
    { icon: <Flame size={20} />, label: "Top Games", path: "/", count: 129 },
    { icon: <Dice1 size={20} />, label: "Scratch Games", path: "/", count: 13 },
    { icon: <Rocket size={20} />, label: "Crash Games", path: "/", count: 88 },
    { icon: <LayoutGrid size={20} />, label: "Table Games", path: "/", count: 56 },
    { icon: <Gamepad2 size={20} />, label: "Action Games", path: "/", count: 62 },
  ];

  const providers = [
    { icon: "⚡", label: "Parimatch Games", path: "/", count: 4 },
    { icon: "🎴", label: "SmartSoft", path: "/", count: 19 },
    { icon: "🎡", label: "Pragmatic Play", path: "/", count: 3 },
    { icon: "🎮", label: "Gaming Corps Hub", path: "/", count: 27 },
    { icon: "🎰", label: "Fugaso", path: "/", count: 2 },
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
      <nav className="space-y-1 mt-20 lg:mt-0 w-full border-b  border-gray-800 p-2">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-x-3 px-5 py-3 h-14 hover:bg-gray-800 rounded-2xl cursor-pointer"
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
      <div className="mt-6 px-5 p-2 border-b  border-gray-800">
        <div className="flex justify-between items-center text-gray-400 mb-2">
          <span className="text-lg font-semibold">Categories</span>
          <span
            className="text-sm cursor-pointer hover:text-white"
            onClick={() => router.push("/")}
          >
            All &gt;
          </span>
        </div>
        <ul>
          {categories.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-5 py-3 hover:bg-gray-800 rounded-2xl cursor-pointer"
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

      {/* Providers Section */}
      <div className="mt-6 px-5 pb-20 p-2">
        <div className="flex justify-between items-center text-gray-400 mb-2">
          <span className="text-lg font-semibold">Providers</span>
          <span
            className="text-sm cursor-pointer hover:text-white"
            onClick={() => router.push("/")}
          >
            All &gt;
          </span>
        </div>
        <ul>
          {providers.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-5 py-3 hover:bg-gray-800 rounded-2xl cursor-pointer whitespace-nowrap"
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
