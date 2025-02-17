// "use client";

// import { useState } from "react";
// import { FilterIcon, ListFilter, Search } from "lucide-react";
// import Image from "next/image";

// const categories = [
//   { name: "All games", icon: "🎮" },
//   { name: "Horse Racing", icon: "🏇" },
//   { name: "Football", icon: "⚽" },
//   { name: "Basketball", icon: "🏀" },
//   { name: "Ice Hockey", icon: "🏒" },
//   { name: "Tennis", icon: "🎾" },
//   { name: "Greyhounds", icon: "🐕" },
//   { name: "Racing", icon: "🏎️" },
//   { name: "Games", icon: "🍀" },
// ];

// const topGames = [
//   { title: "Football Cup - World", image: "/sports1.png" },
//   { title: "England League", image: "/sports1.png" },
//   { title: "World Cup On Demand", image: "/sports1.png" },
//   { title: "Goal - Nations Football", image: "/sports1.png" },
// ];

// export default function GamingDashboard() {
//   return (
//     <div className="flex h-screen bg-zinc-950 text-white">
//       {/* Sidebar */}
//       <aside className="w-64 bg-zinc-900 p-4 space-y-6 hidden lg:block">
//         <div className="text-lg font-bold">Fast Games</div>
//         <nav>
//           <ul className="space-y-2">
//             {categories.map((category) => (
//               <li
//                 key={category.name}
//                 className="flex items-center space-x-2 p-2 rounded-md hover:bg-zinc-800 cursor-pointer"
//               >
//                 <span>{category.icon}</span>
//                 <span>{category.name}</span>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <div className="text-lg font-bold">Providers</div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-auto">
//         {/* Search Bar */}

//         <div className="relative w-full max-w-xs sm:max-w-xs md:max-w-md lg:max-w-md">
//           <div className="flex items-center space-x-4">
//             {/* Search Icon inside the input */}
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full bg-zinc-800 text-white pl-12 pr-4 py-2 rounded-md outline-none focus:ring sm:px-2 sm:py-1 sm:text-sm md:px-4 md:py-2 md:text-base lg:pl-14 lg:pr-5 lg:text-lg"
//             />
//             {/* Sorting Icon */}
//             <ListFilter className="text-gray-400 cursor-pointer md:hidden" />
//           </div>
//         </div>

//         {/* Top Games */}
//         <section className="mt-6">
//           <h2 className="text-xl font-bold">🔥 Top</h2>
//           <div className="grid grid-cols-4 gap-4 mt-4">
//             {topGames.map((game) => (
//               <div
//                 key={game.title}
//                 className="relative rounded-md overflow-hidden"
//               >
//                 <Image
//                   src={game.image}
//                   alt={game.title}
//                   width={300}
//                   height={200}
//                   className="object-cover w-full h-full"
//                 />
//                 <div className="absolute bottom-0   w-full text-center py-2">
//                   {game.title}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { FilterIcon, ListFilter, Search } from "lucide-react";
import Image from "next/image";

interface Category {
  name: string;
  icon: string;
}

interface Game {
  title: string;
  image: string;
}

const categories: Category[] = [
  { name: "All games", icon: "🎮" },
  { name: "Horse Racing", icon: "🏇" },
  { name: "Football", icon: "⚽" },
  { name: "Basketball", icon: "🏀" },
  { name: "Ice Hockey", icon: "🏒" },
  { name: "Tennis", icon: "🎾" },
  { name: "Greyhounds", icon: "🐕" },
  { name: "Racing", icon: "🏎️" },
  { name: "Games", icon: "🍀" },
];

const topGames: Game[] = [
  { title: "Football Cup - World", image: "/sports1.png" },
  { title: "England League", image: "/sports1.png" },
  { title: "World Cup On Demand", image: "/sports1.png" },
  { title: "Goal - Nations Football", image: "/sports1.png" },
];

export default function GamingDashboard() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGames = topGames.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 p-4 space-y-6 hidden lg:block">
        <div className="text-lg font-bold">Fast Games</div>
        <nav>
          <ul className="space-y-2">
            {filteredCategories.map((category) => (
              <li
                key={category.name}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-zinc-800 cursor-pointer"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-lg font-bold">Providers</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Search Bar */}
        <div className="relative w-full max-w-xs sm:max-w-xs md:max-w-md lg:max-w-md">
          <div className="flex items-center space-x-4">
            {/* Search Icon inside the input */}
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-800 text-white pl-12 pr-4 py-2 rounded-md outline-none focus:ring sm:px-2 sm:py-1 sm:text-sm md:px-4 md:py-2 md:text-base lg:pl-14 lg:pr-5 lg:text-lg"
            />
            {/* Sorting Icon */}
            <ListFilter className="text-gray-400 cursor-pointer md:hidden" />
          </div>
        </div>

        {/* Top Games */}
        <section className="mt-6">
          <h2 className="text-xl font-bold">🔥 Top</h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <div key={game.title} className="relative rounded-md overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 w-full text-center py-2">
                    {game.title}
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-4 text-center text-gray-400">No results found</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
