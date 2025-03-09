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
        <div className="hidden md:block text-sm whitespace-nowrap overflow-x-auto space-y-2 space-x-3 mt-2">
          {[
            { href: "/live-events", src: "/LiveEvents.png", label: "Live Events" },
            { href: "/upcoming-events", src: "/upcomingEvents.png", label: "Upcoming Events" },
            { href: "/virtualSports", src: "/gamepad.png", label: "Virtual Sports" },
            { href: "/slots", src: "/tablet-smartphone.svg", label: "Slots" },
            { href: "/live-casino", src: "/gamepad.png", label: "Live Casino" },
            { href: "/promotions", src: "/promotions.png", label: "Promotions" },
            { href: "/instant-games", src: "/instantGames.png", label: "Instant Games" },
            { href: "/tvgames", src: "/sparkle.svg", label: "TV Games" },
          ].map(({ href, src, label }) => (
            <Link
              key={href}
              href={href}
              className="relative inline-block px-4 py-2 rounded-full bg-black text-white hover:border-[2px] hover:border-orange-500 hover:text-orange-500 shadow-2xl duration-800 ease-in-out border-transparent"
            >
              <img src={src} alt={label} className="w-5 h-5 inline-block mr-2" />
              <span className="relative font-semibold">
                {label}
              </span>
            </Link>
          ))}
        </div>


        {/* Right: Login and Signup buttons */}
        <div className="flex gap-x-3 md:gap-x-5 items-center whitespace-nowrap ml-4">
          <Link
            href="/login"
            className="px-5 py-2 text-white font-bold bg-cyan-950 rounded-full"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 text-black font-bold bg-amber-400 rounded-full"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under the topbar */}
      <div className="h-16"></div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-3 border-t border-gray-800 z-50">
        <Link
          href="/"
          className="flex flex-col items-center text-white hover:text-amber-400"
        >
          <Home />
          <span className="text-xs">Main</span>
        </Link>
        <Link
          href="/live-events"
          className="flex flex-col items-center text-white hover:text-amber-400"
        >
          <img src="/LiveEvents.png" alt="Live Events" className="w-5 h-5" />
          <span className="text-xs">Live</span>
        </Link>
        <Link
          href="/promotions"
          className="flex flex-col items-center text-white hover:text-amber-400"
        >
          <img src="/promotions.png" alt="Promotions" className="w-5 h-5" />
          <span className="text-xs">Promos</span>
        </Link>
        <Link
          href="/casino"
          className="flex flex-col items-center text-white hover:text-amber-400"
        >
          <ShipWheel />
          <span className="text-xs">Casino</span>
        </Link>
        <Link
          href="/profile"
          className="flex flex-col items-center text-white hover:text-amber-400"
        >
          <User2 />
          <span className="text-xs">Profile</span>
        </Link>
        <Link
          href="/menu"
          className="flex flex-col items-center text-white hover:text-amber-400"
        >
          <Menu className="h-7 w-7" />
          <span className="text-xs">Menu</span>
        </Link>
      </div>
    </div>
  );
}
