import { Gift, Home } from "lucide-react";
import Topbar from "../../components/Topbar";
import Carousel from "../../components/crausal";
import Image from "next/image";

const InstantGames = () => {
  return (
    <div>
      <Topbar />
      <div className="grid bg-black grid-cols-1 lg:grid-cols-[15%_85%]">
        <InstantGamesSidebar/>
        <InstantGamesMainContent/>
      </div>
    </div>
  );
};

export default InstantGames;

function InstantGamesMainContent(){
  return <div className="m-8">
    <InstantGamesSearchBar/>
    <Carousel />
    <InstantGamesContent/>
  </div>
}

function InstantGamesSidebar() {
  return (
    <div className="h-screen hidden overflow-y-auto text-white md:flex lg:flex flex-col border-r border-gray-800">
      <div className="flex cursor-pointer gap-3 hover:bg-gray-800 p-3 rounded-2xl mx-6 my-4">
        <Home size={24} />
        <div className="text-xl">Lobby</div>
      </div>
      <div className="flex cursor-pointer gap-3 hover:bg-gray-800 p-3 rounded-2xl mx-6 mb-4">
        <Gift size={24} />
        <div className="text-xl">Bonuses</div>
      </div>
      <hr className="border-gray-800" />
      <div className="w-64 bg-black text-white p-4 mx-4">
        <div className="flex justify-between items-center text-gray-300 mb-4">
          <span className="text-lg font-semibold">Categories</span>
          <span className="text-sm cursor-pointer hover:text-white">All &gt;</span>
        </div>
        <ul className="space-y-4">
          {[
            { icon: "🔥", label: "Top Games", count: 9 },
            { icon: "🎰", label: "Slot Games", count: 6 },
            { icon: "💥", label: "Crash Games", count: 4 },
            { icon: "♠️", label: "Table Games", count: 12 }, 
            { icon: "🎮", label: "Action Games", count: 1 }, 
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
      <hr className="border-gray-800" />
      <div className="w-64 bg-black text-white p-4 mx-4">
        <div className="flex justify-between items-center text-gray-300 mb-4">
          <span className="text-lg font-semibold">Providers</span>
          <span className="text-sm cursor-pointer hover:text-white">All &gt;</span>
        </div>
        <ul className="space-y-4">
          {[
            { icon: "⚡", label: "Parimatch Games", count: 9 }, 
            { icon: "🎴", label: "SmartSoft", count: 6 },
            { icon: "🎡", label: "Pragmatic Play", count: 4 },
            { icon: "🎮", label: "Gaming Corps Hub", count: 12 },
            { icon: "🎰", label: "Fugaso", count: 1 },
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


function InstantGamesSearchBar(){
  return <div className="text-white flex justify-between">
    <div>
      <div className="text-3xl font-bold  ">Instant Games</div>
    </div>
    <div>
      <input type="text" placeholder="Search" className="bg-gray-900 rounded-lg px-3 py-1 outline-none"/>
    </div>
  </div>
}


function InstantGamesContent() {
  return (
    <div className="bg-black p-3 w-full ml-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-white text-lg text-center items-center font-semibold"> Games</span>
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
