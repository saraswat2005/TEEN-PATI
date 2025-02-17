"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import Topbar from "../../components/Topbar";
import BetSlip from "../allLive/betSlip";
import Sidebar from "../../components/sidebar/Sidebar";

const tabs = [
  { id: "events", label: "Events" },
  { id: "tournaments", label: "Tournaments" },
  { id: "teams", label: "Teams" },
];

const Favorites = () => {
  const [activeTab, setActiveTab] = useState<string>("events");
  const router = useRouter();

  const renderContent = () => {
    switch (activeTab) {
      case "events":
        return "You don't have any events in favorites. Click on ⭐ to add one.";
      case "tournaments":
        return "You don't have any tournaments in favorites. Click on 🏆 to add one.";
      case "teams":
        return "You don't have any teams in favorites. Click on ⚽ to add one.";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black">
      {/* Topbar Section */}
      <Topbar />

      <div className="flex flex-grow overflow-hidden">
        <div className=" overflow-y-auto ">
          <Sidebar />
        </div>

        <div className="bg-white flex-grow   p-4 h-full overflow-y-auto">
          <div className="min-h-screen">
            <div className="flex flex-wrap justify-center md:w-4xl md:h-32 items-center gap-3 rounded-2xl bg-zinc-300 p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === tab.id
                      ? "bg-gray-200 font-semibold"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center h-60 text-center mt-6">
              <div className="text-gray-500 text-5xl">⭐</div>
              <p className="text-lg font-semibold mt-2">{renderContent()}</p>
            </div>
          </div>
        </div>

        {/* Betslip Section */}
        <BetSlip />
      </div>
    </div>
  );
};

export default Favorites;

// RESPON TOPBAR
// "use client";

// import { useState } from "react";
// import { IoArrowBack } from "react-icons/io5";
// import { Menu } from "lucide-react";
// import { useRouter } from "next/navigation";
// import Topbar from "../../components/Topbar";
// import BetSlip from "../allLive/betSlip";
// import Sidebar from "../../components/sidebar/Sidebar";

// const tabs = [
//   { id: "events", label: "Events" },
//   { id: "tournaments", label: "Tournaments" },
//   { id: "teams", label: "Teams" },
// ];

// const Favorites = () => {
//   const [activeTab, setActiveTab] = useState<string>("events");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isBetSlipOpen, setIsBetSlipOpen] = useState(false);
//   const router = useRouter();

//   const renderContent = () => {
//     switch (activeTab) {
//       case "events":
//         return "You don't have any events in favorites. Click on ⭐ to add one.";
//       case "tournaments":
//         return "You don't have any tournaments in favorites. Click on 🏆 to add one.";
//       case "teams":
//         return "You don't have any teams in favorites. Click on ⚽ to add one.";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen overflow-hidden bg-black">
//       {/* Desktop Topbar */}
//       <Topbar />

//       {/* Mobile Bottom Navbar */}
//       <div className="md:hidden fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-3 border-t border-gray-800">
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="text-white"
//         >
//           <Menu className="w-6 h-6" />
//         </button>
//         <button
//           onClick={() => setIsBetSlipOpen(!isBetSlipOpen)}
//           className="text-white"
//         >
//           🎟️
//         </button>
//       </div>

//       <div className="flex flex-grow overflow-hidden">
//         {/* Sidebar (Hidden on Mobile) */}
//         <div
//           className={`md:block ${isSidebarOpen ? "block" : "hidden"} absolute md:relative bg-gray-900 text-white w-64 p-4 md:w-auto`}
//         >
//           <Sidebar />
//         </div>

//         {/* Main Content */}
//         <div className="bg-white flex-grow p-4 h-full overflow-y-auto">
//           <div className="min-h-screen">
//             {/* Tabs Section */}
//             <div className="flex flex-wrap justify-center md:w-4xl md:h-32 items-center gap-3 rounded-2xl bg-zinc-300 p-4">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   className={`px-4 py-2 rounded-lg ${
//                     activeTab === tab.id
//                       ? "bg-gray-200 font-semibold"
//                       : "text-gray-500 hover:bg-gray-100"
//                   }`}
//                   onClick={() => setActiveTab(tab.id)}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>

//             {/* Favorites Message */}
//             <div className="flex flex-col items-center justify-center h-60 text-center mt-6">
//               <div className="text-gray-500 text-5xl">⭐</div>
//               <p className="text-lg font-semibold mt-2">{renderContent()}</p>
//             </div>
//           </div>
//         </div>

//         {/* BetSlip (Hidden on Mobile) */}
//         <div
//           className={`md:block ${isBetSlipOpen ? "block" : "hidden"} absolute md:relative right-0 bg-gray-900 text-white w-64 p-4 md:w-auto`}
//         >
//           <BetSlip />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Favorites;
