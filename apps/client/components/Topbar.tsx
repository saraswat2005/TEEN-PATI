"use client";

import { Home, Menu, ShipWheel, User2, Activity, Star, Circle, Gift, Trophy, Goal, Globe, Shield, Calendar, Gamepad2, Smartphone, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


type TopbarProps = {
  onMenuClick?: () => void;
  menu?: boolean;
};

export default function Topbar({ onMenuClick, menu }: TopbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center">
      <div className="fixed top-0 left-0 w-full bg-black flex items-center justify-between px-4 py-3 border-b border-gray-800 text-white z-50">
        {/* Left: Logo and Menu button */}
        <div className="flex items-center">
          {menu && (
            <button className="lg:hidden text-white p-2" onClick={onMenuClick}>
              <Menu size={24} />
            </button>
          )}
          <Link href="/" className="cursor-pointer md:w-48">
            <img
              src="/logos/Title Logo.png"
              alt="Logo"
              className="h-auto w-24 md:w-36 lg:w-40 xl:w-44 object-contain"
            />
          </Link>
        </div>

        {/* Middle: Navigation links (adjust spacing on different screens) */}
        <div className="hidden md:block text-sm whitespace-nowrap overflow-x-auto space-x-1 mt-2">
          {[
            { name: "Live Events", path: "/live-events", icon: Calendar },         // Unique
            { name: "Upcoming Events", path: "/upcoming-events", icon: Sparkles }, // Unique
            { name: "Virtual Sports", path: "/virtualSports", icon: Gamepad2 },    // Unique
            { name: "Slots", path: "/slots", icon: Smartphone },                   // Unique
            { name: "Live Casino", path: "/live-casino", icon: Gift },             // Unique
            { name: "Promotions", path: "/promotions", icon: Activity },           // Unique
            { name: "Instant Games", path: "/instant-games", icon: Star },         // Unique
            { name: "TV Games", path: "/tvgames", icon: Circle },
            { name: "All Live", path: "/allLive", icon: Activity },
            { name: "Favorites", path: "/favorites", icon: Star },
            { name: "Top Parleys", path: "/topparleys", icon: Circle },
            { name: "Cricket", path: "/cricket", icon: Trophy },
            { name: "Football", path: "/football", icon: Goal },
            { name: "Basketball", path: "/basketball", icon: Globe },
            { name: "Kabaddi", path: "/kabaddi", icon: Shield },
          ].map(({ path, name, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              className="relative inline-flex items-center px-4 py-2 rounded-full bg-black text-white hover:border-[2px] hover:border-orange-500 hover:text-orange-500 shadow-2xl duration-800 ease-in-out border-transparent"
            >
              <Icon className="w-5 h-5 inline-block mr-2" />
              <span className="relative font-semibold">{name}</span>
            </Link>
          ))}
        </div>

        {/* Right: Login and Signup buttons */}
        <div className="flex gap-x-3 md:gap-x-5 items-center whitespace-nowrap ml-4">
          <Link
            href="/login"
            className="px-5 py-1 lg:px-5 lg:py-2 text-white font-bold bg-cyan-950 rounded-full"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-5 py-1 lg:px-5 lg:py-2 text-black font-bold bg-amber-400 rounded-full"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under the topbar */}
      <div className="h-16"></div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-gray-900 flex justify-around items-center py-3 border-t border-gray-700 z-50 shadow-lg">
        {[
          { path: "/", label: "Main", icon: Home },
          { path: "/live-events", label: "Live", icon: Calendar },
          { path: "/promotions", label: "Promos", icon: Gift },
          { path: "/casino", label: "Casino", icon: ShipWheel },
          { path: "/profile", label: "Profile", icon: User2 },
          { path: "/menu", label: "Menu", icon: Menu },
        ].map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            href={path}
            className="flex flex-col items-center text-white hover:text-amber-400 transition-all duration-300"
          >
            <Icon className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
