"use client";

import { useRouter } from "next/navigation";
import { PopularContainer } from "./PopularContainer";
import { X, Circle, Star, Activity, Gift, Goal, Target, Shield, Globe, Trophy } from "lucide-react";

export const Sidebar = ({ isOpen, onClose }: any) => {
  const router = useRouter();
  const pages = [
    { name: "All Live", path: "/allLive", icon: Activity },
    { name: "Favorites", path: "/favorites", icon: Star },
    { name: "Top Parleys", path: "/topparleys", icon: Circle },
    { name: "Promotions", path: "/promotions", icon: Gift },
    { name: "Cricket", path: "/cricket", icon: Trophy },
    { name: "Football", path: "/football", icon: Goal },
    { name: "Basketball", path: "/basketball", icon: Globe },
    { name: "Kabaddi", path: "/kabaddi", icon: Shield },
  ];

  return (
    <div
      className={`h-screen overflow-y-auto text-black flex-col p-4 border-r border-gray-800 bg-[#eff1f3] lg:flex ${
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
        {pages.map(({ name, path, icon: Icon }) => (
          <div
            key={path}
            className="flex items-center gap-x-2 px-5 py-3 h-14 hover:bg-slate-300 rounded-2xl cursor-pointer"
            onClick={() => {
              router.push(path);
              onClose();
            }}
          >
            <Icon size={24} />
            <div className="pl-4">{name}</div>
          </div>
        ))}
      </nav>
      <div className="mb-32">
        <PopularContainer gameName="CRICKET" height="h-96" />
        <PopularContainer gameName="FOOTBALL" height="h-72" />
        <PopularContainer gameName="BASKETBALL" height="h-96" />
      </div>
    </div>
  );
};
