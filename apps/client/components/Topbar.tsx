// import { Menu } from 'lucide-react';
// import Link from 'next/link';

// export default function Topbar() {
//     return (
//         <div className="bg-black flex justify-evenly text-white py-6 border-b-1">
//             <div className="flex items-center gap-x-2 cursor-pointer">
//                 <Menu />
//             </div>
//             <Link href="/" className="text-3xl text-amber-400 cursor-pointer">
//                 LOGO
//             </Link>
//             <div className="flex justify-center items-center gap-x-14 bg-black text-white py-2 text-sm">
//                 <Link href="/live-events" className="flex items-center gap-x-2 hover:text-amber-400">
//                     <img src="/LiveEvents.png" alt="Live Events" />
//                     <div>Live Events</div>
//                 </Link>
//                 <Link href="/upcoming-events" className="flex items-center gap-x-2 hover:text-amber-400">
//                     <img src="/upcomingEvents.png" alt="Upcoming Events" />
//                     <div>Upcoming Events</div>
//                 </Link>
//                 <Link href="/promotions" className="flex items-center gap-x-2 hover:text-amber-400">
//                     <img src="/promotions.png" alt="Promotions" />
//                     <div>Promotions</div>
//                 </Link>
//                 <Link href="/instant-games" className="flex items-center gap-x-2 hover:text-amber-400">
//                     <img src="/instantGames.png" alt="Instant Games" />
//                     <div>Instant Games</div>
//                 </Link>
//             </div>
//             <div className="flex gap-x-4">
//                 <Link href="/login" className="px-8 py-3 text-white font-bold bg-cyan-950 rounded-4xl">
//                     Log In
//                 </Link>
//                 <Link href="/signup" className="px-8 py-3 text-black font-bold bg-amber-400 rounded-4xl">
//                     Sign Up
//                 </Link>
//             </div>
//         </div>
//     );
// }

// top bar at top
// "use client"

// import { Menu } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export default function Topbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <div className="bg-black flex justify-between items-center px-4 py-4 border-b border-gray-800">
//             {/* Left Side - Mobile Menu */}
//             <div className="flex items-center gap-x-2 cursor-pointer">
//                 <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                     <Menu className="text-white w-6 h-6" />
//                 </button>
//             </div>

//             {/* Center - Logo */}
//             <Link href="/" className="text-2xl md:text-3xl text-amber-400 cursor-pointer">
//                 LOGO
//             </Link>

//             {/* Desktop Navigation Links (Hidden on Mobile) */}
//             <div className="hidden md:flex justify-center items-center gap-x-8 text-sm">
//                 <Link href="/live-events" className="flex items-center gap-x-2 hover:text-amber-400">
//                     <img src="/LiveEvents.png" alt="Live Events" className="w-5 h-5" />
//                     <span>Live Events</span>
//                 </Link>
//                 <Link href="/upcoming-events" className="flex items-center gap-x-2 hover:text-amber-400">
//                     <img src="/upcomingEvents.png" alt="Upcoming Events" className="w-5 h-5" />
//                     <span>Upcoming Events</span>
//                 </Link>
//                 <Link href="/promotions" className="flex items-center gap-x-2 hover:text-amber-400">
//                     <img src="/promotions.png" alt="Promotions" className="w-5 h-5" />
//                     <span>Promotions</span>
//                 </Link>
//                 <Link href="/instant-games" className="flex items-center gap-x-2 hover:text-amber-400">
//                     <img src="/instantGames.png" alt="Instant Games" className="w-5 h-5" />
//                     <span>Instant Games</span>
//                 </Link>
//             </div>

//             {/* Right Side - Auth Buttons */}
//             <div className="hidden md:flex gap-x-4">
//                 <Link href="/login" className="px-6 py-2 text-white font-bold bg-cyan-950 rounded-full">
//                     Log In
//                 </Link>
//                 <Link href="/signup" className="px-6 py-2 text-black font-bold bg-amber-400 rounded-full">
//                     Sign Up
//                 </Link>
//             </div>

//             {/* Mobile Dropdown Menu */}
//             {isMenuOpen && (
//                 <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col p-4 space-y-4 md:hidden">
//                     <Link href="/live-events" className="flex items-center gap-x-2 hover:text-amber-400">
//                         <img src="/LiveEvents.png" alt="Live Events" className="w-5 h-5" />
//                         <span>Live Events</span>
//                     </Link>
//                     <Link href="/upcoming-events" className="flex items-center gap-x-2 hover:text-amber-400">
//                         <img src="/upcomingEvents.png" alt="Upcoming Events" className="w-5 h-5" />
//                         <span>Upcoming Events</span>
//                     </Link>
//                     <Link href="/promotions" className="flex items-center gap-x-2 hover:text-amber-400">
//                         <img src="/promotions.png" alt="Promotions" className="w-5 h-5" />
//                         <span>Promotions</span>
//                     </Link>
//                     <Link href="/instant-games" className="flex items-center gap-x-2 hover:text-amber-400">
//                         <img src="/instantGames.png" alt="Instant Games" className="w-5 h-5" />
//                         <span>Instant Games</span>
//                     </Link>

//                     {/* Mobile Auth Buttons */}
//                     <div className="flex flex-col gap-y-2 mt-4">
//                         <Link href="/login" className="px-4 py-2 text-white font-bold bg-cyan-950 rounded-full text-center">
//                             Log In
//                         </Link>
//                         <Link href="/signup" className="px-4 py-2 text-black font-bold bg-amber-400 rounded-full text-center">
//                             Sign Up
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }



"use client";

import { CastIcon, Home, Menu, ShipWheel, User2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Topbar - Stays at Top */}
      <div className="md:flex flex lg:flex bg-black justify-between items-center px-4 py-4 border-b border-gray-800 text-white z-0">
        {/* Center - Logo */}
        <div className="flex items-center">
          <Menu className="text-white " />
          <Link
            href="/"
            className="text-2xl md:text-3xl text-amber-400 cursor-pointer flex md:mx-11"
          >
            LOGO
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:pl-[470px] lg:pl-0 md:flex md:overflow-auto lg:flex justify-center items-center gap-x-10 text-sm whitespace-nowrap">
          <Link
            href="/live-events"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img src="/LiveEvents.png" alt="Live Events" className="w-5 h-5" />
            <span>Live Events</span>
          </Link>

          <Link
            href="/upcoming-events"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img
              src="/upcomingEvents.png"
              alt="Upcoming Events"
              className="w-5 h-5"
            />
            <span>Upcoming Events</span>
          </Link>

          <Link
            href="/virtualSports"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img src="/gamepad.png" alt="Promotions" className="w-5 h-5" />
            <span>Virtual Sports</span>
          </Link>

          <Link
            href="/virtualSports"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img
              src="/tablet-smartphone.svg"
              alt="Promotions"
              className="w-5 h-5"
            />
            <span>Slots</span>
          </Link>
          <Link
            href="/virtualSports"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img src="/gamepad.png" alt="Promotions" className="w-5 h-5" />
            <span>Live Casino</span>
          </Link>

          <Link
            href="/promotions"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img src="/promotions.png" alt="Promotions" className="w-5 h-5" />
            <span>Promotions</span>
          </Link>

          <Link
            href="/instant-games"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img
              src="/instantGames.png"
              alt="Instant Games"
              className="w-5 h-5"
            />
            <span>Instant Games</span>
          </Link>

          <Link
            href="/tvgames"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img src="/sparkle.svg" alt="Instant Games" className="w-5 h-5" />
            <span>Tv Games</span>
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="md:flex gap-x-4 items-center md:mx-11">
          <Link
            href="/login"
            className="px-6 py-2 mx-3 text-white font-bold bg-cyan-950 rounded-full whitespace-nowrap"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 mx-3 text-black font-bold bg-amber-400 rounded-full whitespace-nowrap"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-3 border-t border-gray-800 z-50">
        {/* Navigation Icons */}
        <Link
          href="/"
          className="flex flex-col items-center gap-x-2 hover:text-amber-400"
        >
          <h1 className="text-white">
            <Home />
          </h1>
          <span className="text-white">Main</span>
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
          <h1 className="text-white">
            <ShipWheel />
          </h1>
          <span className="text-xs">Casino</span>
        </Link>
        <Link
          href="/profile"
          className="flex flex-col items-center text-white hover:text-amber-400"
        >
          <h1 className="text-white">
            <User2 />
          </h1>
          <span className="text-xs">Profile</span>
        </Link>
        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
          <Menu className="h-10 w-10" />
        </button>
      </div>

      {/* Mobile Dropdown Menu (Opens on Menu Click) */}
      {isMenuOpen && (
        <div className="fixed bottom-16 left-0 w-full bg-black text-white flex flex-col p-4 space-y-4 z-40">
          <Link
            href="/live-events"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img src="/LiveEvents.png" alt="Live Events" className="w-5 h-5" />
            <span>Live Events</span>
          </Link>
          <Link
            href="/upcoming-events"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img
              src="/upcomingEvents.png"
              alt="Upcoming Events"
              className="w-5 h-5"
            />
            <span>Upcoming Events</span>
          </Link>
          <Link
            href="/promotions"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img src="/promotions.png" alt="Promotions" className="w-5 h-5" />
            <span>Promotions</span>
          </Link>
          <Link
            href="/instant-games"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img
              src="/instantGames.png"
              alt="Instant Games"
              className="w-5 h-5"
            />
            <span>Instant Games</span>
          </Link>
          <Link
            href="/instant-games"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img
              src="/instantGames.png"
              alt="Instant Games"
              className="w-5 h-5"
            />
            <span>Instant Games</span>
          </Link>
          <Link
            href="/instant-games"
            className="flex items-center gap-x-2 hover:text-amber-400"
          >
            <img
              src="/instantGames.png"
              alt="Instant Games"
              className="w-5 h-5"
            />
            <span>Instant Games</span>
          </Link>
        </div>
      )}
    </>
  );
}