"use client";

import { useRouter } from "next/navigation";
import { X, Home, Gift, Star, Flame, Rocket, Dice1, LayoutGrid, Gamepad2 } from "lucide-react";

export const VirtualSportsSidebar = ({ isOpen, onClose }: any) => {
  const router = useRouter();

  const navigationItems = [
    { icon: <Home size={20} />, label: "Lobby", path: "/lobby" },
  ];

  const categories = [
    { icon: "🎮", label: "All games", path: "/" },
    { icon: "🏇", label: "Horse Racing", path: "/" },
    { icon: "⚽", label: "Football", path: "/" },
    { icon: "🏀", label: "Basketball", path: "/" },
    { icon: "🏒", label: "Ice Hockey", path: "/" },
    { icon: "🎾", label: "Tennis", path: "/" },
    { icon: "🐕", label: "Greyhounds", path: "/" },
    { icon: "🏁", label: "Racing", path: "/" },
    { icon: "🍀", label: "Games", path: "/" },
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
          <div
            className="flex items-center gap-x-3 px-2 py-2 h-14 rounded-2xl cursor-pointer mt-2"
            onClick={() =>{
              router.push("/");
              onClose();
            }}
          >
            <div className="flex items-center px-5 py-4 text-white text-lg font-semibold">
              <Gamepad2 size={20} className="mr-2" />
              Fast games
            </div>
          </div>
      </nav>

      {/* Categories Section */}
      <div className="mt-6 px-5 p-2 border-b  border-gray-800">
        <div className="flex justify-between items-center text-gray-400 mb-2">
          <span
            className="text-sm cursor-pointer hover:text-white gap-11"
            onClick={() => router.push("/")}
          >
          <span className="text-lg font-semibold">Categories</span>
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
