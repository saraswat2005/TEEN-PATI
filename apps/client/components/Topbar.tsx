"use client";

import { CastIcon, Home, Menu, ShipWheel, User2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type TopbarProps = {
  onMenuClick?: () => void;
  menu?: boolean; // Making menu optional
};

export default function Topbar({ onMenuClick, menu }: TopbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-black flex justify-between items-center px-4 py-4 border-b border-gray-800 text-white z-50">
        <div className="flex items-center">
        {menu && (
          <button className="lg:hidden text-white p-2" onClick={onMenuClick}>
            <Menu size={24} />
          </button>
        )}
          <Link
            href="/"
            className="text-2xl md:text-3xl text-amber-400 cursor-pointer flex md:mx-11"
          >
            LOGO
          </Link>
        </div>

        <div className="hidden overflow-y-auto lg:flex justify-center items-center gap-x-10 text-sm whitespace-nowrap">
          <Link href="/live-events" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/LiveEvents.png" alt="Live Events" className="w-5 h-5" />
            <span>Live Events</span>
          </Link>
          <Link href="/upcoming-events" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/upcomingEvents.png" alt="Upcoming Events" className="w-5 h-5" />
            <span>Upcoming Events</span>
          </Link>
          <Link href="/virtualSports" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/gamepad.png" alt="Virtual Sports" className="w-5 h-5" />
            <span>Virtual Sports</span>
          </Link>
          <Link href="/slots" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/tablet-smartphone.svg" alt="Slots" className="w-5 h-5" />
            <span>Slots</span>
          </Link>
          <Link href="/live-casino" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/gamepad.png" alt="Live Casino" className="w-5 h-5" />
            <span>Live Casino</span>
          </Link>
          <Link href="/promotions" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/promotions.png" alt="Promotions" className="w-5 h-5" />
            <span>Promotions</span>
          </Link>
          <Link href="/instant-games" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/instantGames.png" alt="Instant Games" className="w-5 h-5" />
            <span>Instant Games</span>
          </Link>
          <Link href="/tvgames" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/sparkle.svg" alt="TV Games" className="w-5 h-5" />
            <span>TV Games</span>
          </Link>
        </div>

        <div className="md:flex gap-x-4 items-center md:mx-11">
          <Link href="/login" className="px-6 py-2 mx-3 text-white font-bold bg-cyan-950 rounded-full text-nowrap">
            Log In
          </Link>
          <Link href="/signup" className="px-6 py-2 mx-3 text-black font-bold bg-amber-400 rounded-full text-nowrap">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="h-16"></div>

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-3 border-t border-gray-800 z-50">
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

      {isMenuOpen && (
        <div className="fixed bottom-16 left-0 w-full bg-black text-white flex flex-col p-4 space-y-4 z-110">
          <Link href="/live-events" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/LiveEvents.png" alt="Live Events" className="w-5 h-5" />
            <span>Live Events</span>
          </Link>
          <Link href="/upcoming-events" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/upcomingEvents.png" alt="Upcoming Events" className="w-5 h-5" />
            <span>Upcoming Events</span>
          </Link>
          <Link href="/promotions" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/promotions.png" alt="Promotions" className="w-5 h-5" />
            <span>Promotions</span>
          </Link>
          <Link href="/instant-games" className="flex items-center gap-x-2 hover:text-amber-400">
            <img src="/instantGames.png" alt="Instant Games" className="w-5 h-5" />
            <span>Instant Games</span>
          </Link>
        </div>
      )}
    </>
  );
}
