"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "../../components/Topbar";
import BetSlip from "../allLive/betSlip";
import { Sidebar } from "../../components/sidebar/Sidebar";

const tabs = [
  { id: "events", label: "Events" },
  { id: "tournaments", label: "Tournaments" },
  { id: "teams", label: "Teams" },
];

const Page = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
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
      <Topbar onMenuClick={() => setSidebarOpen(!isSidebarOpen)} menu={true} />

      <div className="flex flex-grow overflow-hidden">
        <div className=" overflow-y-auto ">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
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

export default Page;