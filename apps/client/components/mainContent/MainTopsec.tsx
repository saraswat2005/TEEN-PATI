"use client";
import { useState, useRef } from "react";
import {
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Home,
  Filter,
  X,
} from "lucide-react";

const sportsCategories = [
  { name: "All Live", icon: "🔥", live: false },
  { name: "Favorites", icon: "⭐", live: false },
  { name: "National", icon: "🇮🇳", live: false },
  { name: "Cricket", icon: "🏏", live: true },
  { name: "Kabaddi", icon: "🤼", live: true },
  { name: "Football", icon: "⚽", live: true },
  { name: "Table Tennis", icon: "🏓", live: true },
];

const timeFilters = ["Live", "1H", "3H", "12H", "All upcoming"];

const MainTopSec = () => {
  const [selectedCategory, setSelectedCategory] = useState("Football");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("Live");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction: "left" | "right"): void => {
    if (scrollRef.current) {
      (scrollRef.current as HTMLElement).scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        {/* Fullscreen Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div
              className="w-full h-full bg-white p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <ul className="space-y-3">
                {sportsCategories.map((sport) => (
                  <li
                    key={sport.name}
                    className={`p-3 rounded-lg text-lg cursor-pointer ${
                      selectedCategory === sport.name
                        ? "bg-green-200"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => {
                      setSelectedCategory(sport.name);
                      setIsSidebarOpen(false);
                    }}
                  >
                    {sport.icon} {sport.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white flex-grow p-4  h-screen overflow-y-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <Home className="w-5 h-5 mr-1 cursor-pointer" />
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">
              {selectedCategory} Live Betting
            </span>
          </div>

          {/* Sports Navigation */}
          <div className="relative flex items-center bg-gray-100 rounded-lg p-3">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>

            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide px-8"
            >
              {sportsCategories.map((sport, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(sport.name)}
                  className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg ${
                    selectedCategory === sport.name
                      ? "bg-green-200"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
                    <span className="text-2xl">{sport.icon}</span>
                    {selectedCategory === sport.name && (
                      <CheckCircle
                        className="absolute bottom-0 right-0 text-green-600 bg-white rounded-full"
                        size={14}
                      />
                    )}
                  </div>
                  <span className="text-sm font-medium truncate w-16 text-center">
                    {sport.name}
                  </span>
                  {sport.live && (
                    <span className="text-xs text-white bg-red-600 px-1 rounded-full">
                      LIVE
                    </span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md"
            >
              <ChevronRight className="w-5 h-5 text-gray-900" />
            </button>
          </div>

          {/* Time Filter Bar */}
          <div className="flex items-center space-x-4 mt-3">
            {timeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedTimeFilter(filter)}
                className={`px-3 py-1 rounded-lg text-sm ${
                  selectedTimeFilter === filter
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}

            {/* Filter Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="ml-auto lg:hidden bg-gray-800 text-white px-3 py-1 rounded-lg flex items-center space-x-2"
            >
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>

          {/* Main Content */}
          <h2 className="text-lg font-bold mt-4 ">
            {selectedCategory} Live Betting
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MainTopSec;
