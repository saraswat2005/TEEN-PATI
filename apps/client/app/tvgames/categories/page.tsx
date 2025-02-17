"use client"

import { useRouter } from "next/navigation";
import Topbar from "../../../components/Topbar";
import { TvGamesMainContent, TvGamesSidebar } from "../page";
import { ArrowLeft } from "lucide-react";



const TvGamesCategories = () => {
  return (
    <div>
      <Topbar />
      <div className="grid bg-black grid-cols-1 lg:grid-cols-[15%_85%]">
        <TvGamesSidebar/>
        <TvGamesCategoriesContent/>
      </div>
    </div>
  );
};

export default TvGamesCategories;


function TvGamesCategoriesContent(){
  return <div className="m-8">
    <CategoriesBack/>
    <div className="text-white">
        all games should be listed here
    </div>
  </div>
}

function CategoriesBack(){
    const router = useRouter();

  return (
    <button onClick={() => router.back()} className="flex items-center gap-2 p-2 text-white rounded">
      <ArrowLeft size={24} />
      <span>Back</span>
    </button>
  );
}