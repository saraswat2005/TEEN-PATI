"use client";

import { CastIcon, Home, Menu, ShipWheel, User2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type TopbarProps = {
  onMenuClick?: () => void;
  menu?: boolean;
};

export default function Topbar({ onMenuClick, menu }: TopbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-black flex items-center justify-between px-4 py-3 border-b border-gray-800 text-white z-50">
        {/* Left: Logo and Menu button */}
        <div className="flex items-center">
          {menu && (
            <button className="lg:hidden text-white p-2" onClick={onMenuClick}>
              <Menu size={24} />
            </button>
          )}
          <Link href="/" className="cursor-pointer">
            <img 
              src="/logos/Title Logo.png" 
              alt="Logo" 
              className="h-auto w-24 md:w-36 lg:w-40 xl:w-44 object-contain"
            />
          </Link>
        </div>

        {/* Middle: Navigation links (adjust spacing on different screens) */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-4 xl:space-x-6 text-sm whitespace-nowrap overflow-x-auto gap-4">
          <Link href="/live-events" className="hover:text-amber-400 flex items-center space-x-2">
            <img src="/LiveEvents.png" alt="Live Events" className="w-5 h-5" />
            <span>Live Events</span>
          </Link>
          <Link href="/upcoming-events" className="hover:text-amber-400 flex items-center space-x-2">
            <img src="/upcomingEvents.png" alt="Upcoming Events" className="w-5 h-5" />
            <span>Upcoming Events</span>
          </Link>
          <Link href="/virtualSports" className="hover:text-amber-400 flex items-center space-x-2">
            <img src="/gamepad.png" alt="Virtual Sports" className="w-5 h-5" />
            <span>Virtual Sports</span>
          </Link>
          <Link href="/slots" className="hover:text-amber-400 flex items-center space-x-2">
            <img src="/tablet-smartphone.svg" alt="Slots" className="w-5 h-5" />
            <span>Slots</span>
          </Link>
          <Link href="/live-casino" className="hover:text-amber-400 flex items-center space-x-2">
            <img src="/gamepad.png" alt="Live Casino" className="w-5 h-5" />
            <span>Live Casino</span>
          </Link>
          <Link href="/promotions" className="hover:text-amber-400 flex items-center space-x-2">
            <img src="/promotions.png" alt="Promotions" className="w-5 h-5" />
            <span>Promotions</span>
          </Link>
          <Link href="/instant-games" className="hover:text-amber-400 flex items-center space-x-2">
            <img src="/instantGames.png" alt="Instant Games" className="w-5 h-5" />
            <span>Instant Games</span>
          </Link>
          <Link href="/tvgames" className="hover:text-amber-400 flex items-center space-x-2">
            <img src="/sparkle.svg" alt="TV Games" className="w-5 h-5" />
            <span>TV Games</span>
          </Link>
        </div>

        {/* Right: Login and Signup buttons */}
        <div className="flex gap-x-3 md:gap-x-5 items-center">
          <Link href="/login" className="px-5 py-2 text-white font-bold bg-cyan-950 rounded-full">
            Log In
          </Link>
          <Link href="/signup" className="px-5 py-2 text-black font-bold bg-amber-400 rounded-full">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under the topbar */}
      <div className="h-16"></div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-3 border-t border-gray-800 z-50">
        <Link href="/" className="flex flex-col items-center text-white hover:text-amber-400">
          <Home />
          <span className="text-xs">Main</span>
        </Link>
        <Link href="/live-events" className="flex flex-col items-center text-white hover:text-amber-400">
          <img src="/LiveEvents.png" alt="Live Events" className="w-5 h-5" />
          <span className="text-xs">Live</span>
        </Link>
        <Link href="/promotions" className="flex flex-col items-center text-white hover:text-amber-400">
          <img src="/promotions.png" alt="Promotions" className="w-5 h-5" />
          <span className="text-xs">Promos</span>
        </Link>
        <Link href="/casino" className="flex flex-col items-center text-white hover:text-amber-400">
          <ShipWheel />
          <span className="text-xs">Casino</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center text-white hover:text-amber-400">
          <User2 />
          <span className="text-xs">Profile</span>
        </Link>
        <Link href="/menu" className="flex flex-col items-center text-white hover:text-amber-400">
          <Menu className="h-7 w-7" />
          <span className="text-xs">Menu</span>
        </Link>
      </div>
    </>
  );
}
