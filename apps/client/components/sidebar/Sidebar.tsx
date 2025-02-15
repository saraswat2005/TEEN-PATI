import { useRouter } from "next/navigation";
import { PopularContainer } from "./PopularContainer";

const Sidebar = () => {

  const router = useRouter()
  const pages = [
    { name: "All Live", path: "/allLive", imagePath: "allLive.png" },
    { name: "Favorites", path: "/favorites", imagePath: "favoriates.png" },
    { name: "Top Parleys", path: "/topparleys", imagePath: "topParleys.png" },
    { name: "Promotions", path: "/promotions", imagePath: "promotions.png" },
    { name: "Cricket", path: "/cricket", imagePath: "cricket.png" },
    { name: "Footall", path: "/football", imagePath: "football.png" },
    { name: "Basketball", path: "/basketball", imagePath: "basketball.png" },
  ];

  return (
    <div className="h-screen hidden overflow-y-auto text-white md:flex lg:flex flex-col p-8 border-r-1">
      <nav className="space-y-1">
        {pages.map((page) => (
          <div
            key={page.path}
            className="flex items-center gap-x-2 px-5 py-3 h-14 hover:bg-cyan-950 rounded-2xl cursor-pointer"
            onClick={() => router.push(page.path)}
          >
            <img src={page.imagePath} alt={page.name} width={30} />
            <div className="pl-4">{page.name}</div>
          </div>
        ))}
      </nav>
      <div>
        <PopularContainer gameName="CRICKET" height="h-96"/>
        <PopularContainer gameName="FOOTBALL" height="h-72"/>
        <PopularContainer gameName="BASKETBALL" height="h-96"/>
      </div>
    </div>
  );
};

export default Sidebar;
