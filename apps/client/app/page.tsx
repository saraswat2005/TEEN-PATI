"use client";

import React, { useState } from "react";
import Topbar from "../components/Topbar";
import { MainContent } from "../components/mainContent/MainContent";
import { Sidebar } from "../components/sidebar/Sidebar";

const Page = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Topbar onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="grid bg-black grid-cols-1 lg:grid-cols-[300px_auto] relative">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        <MainContent />
      </div>
    </>
  );
};

export default Page;