"use client"

import { Home } from "lucide-react";
import Topbar from "../../components/Topbar";
import { useRouter } from "next/navigation";
import Image from "next/image";


const TvGames = () => {
  return (
    <div>
      <Topbar />
      <div className="grid bg-black grid-cols-1 lg:grid-cols-[15%_85%]">
        <TvGamesSidebar/>
        <TvGamesMainContent/>
      </div>
    </div>
  );
};

export default TvGames;

export function TvGamesMainContent(){
  return <div className="m-8">
    <TvGamesSearchBar/>
    <InstantGamesContent gameName="Bet Games"/>
    <InstantGamesContent gameName="TV Games"/>
    <InstantGamesContent gameName="ATMOSPHERA"/>
  </div>
}

export function TvGamesSidebar() {

  const router = useRouter();
  
  const handleRedirect = () => {
    router.push("/tvgames/categories"); // Replace with your target route
  };

  return (
    <div className="h-screen hidden overflow-y-auto text-white md:hidden lg:flex flex-col border-r border-gray-800">
      <div className="flex cursor-pointer gap-3 hover:bg-gray-800 p-3 rounded-2xl m-6 ">
        <Home size={24} />
        <div className="text-xl">Lobby</div>
      </div>
      <hr className="border-gray-800" />
      <div className="w-64 bg-black text-white p-4 mx-4">
        <div onClick={handleRedirect} className="flex justify-between items-center text-gray-300 mb-4">
          <span className="text-lg font-semibold">Categories</span>
          <span className="text-sm cursor-pointer hover:text-white">All &gt;</span>
        </div>
        <ul className="space-y-4">
          {[
            { icon: "🔥", label: "Top", count: 9 },
            { icon: "🃏", label: "Card Games", count: 6 },
            { icon: "🎡", label: "Wheel of Fortune", count: 4 },
            { icon: "🎟", label: "Lotteries", count: 12 },
            { icon: "🏆", label: "Sport Games", count: 1 },
          ].map((item, index) => (
            <li key={index} className="flex justify-between items-center text-gray-400 hover:text-white cursor-pointer">
              <span className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </span>
              <span className="text-gray-500">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export function TvGamesSearchBar(){
  return <div className="text-white flex justify-between">
    <div>
      <div className="text-3xl font-bold">TV Games</div>
    </div>
    <div>
      <input type="text" placeholder="Search" className="bg-gray-900 rounded-lg px-3 py-1 outline-none"/>
    </div>
  </div>
}


function InstantGamesContent({ gameName }: { gameName: string }) {
  return (
    <div className="bg-black p-3 pt-10 w-full ml-auto relative pb-20"> {/* Added pb-20 */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-white text-lg text-center items-center font-semibold">{gameName}</span>
        </div>
        <a href="#" className="text-gray-400 text-sm hover:text-white flex items-center space-x-1">
          <span>more</span>
          <span>→</span>
        </a>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {Array(8).fill("").map((_, index) => (
            <div key={index} className="w-60 h-44 rounded-lg shrink-0 relative">
              <Image
                src="/sports1.png"
                alt="Game Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
