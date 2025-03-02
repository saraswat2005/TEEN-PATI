import Footer from "./Footer";
import CardComponent from "./CardComponent";
import GameCategories from "./GameCategories";
import Matches from "./Hotmatches";

const games6 = [
  "Promotions",
  "BBL",
  "SA20",
  "IPL 2025",
  "EPL",
  "Virtual Cricket",
];
const games8 = [
  "Mystery Game",
  "Aviator",
  "Coin Volcano",
  "Spin a Wheel",
  "Crazy Time",
  "Instant Games",
  "Coin Train",
  "Slots",
];

const images = [
  { src: "/gamesImages/Thumbnail_0001_Super-Over-.png", link: "/match/1", name: "Super Over" },
  { src: "/gamesImages/Thumbnail_0002_Race-20.png", link: "/match/2", name: "Race 20" },
  { src: "/gamesImages/Thumbnail_0004_Andar-Bahar.png", link: "/match/4", name: "Andar Bahar" },
  { src: "/gamesImages/Thumbnail_0003_5-Five-Cricket.png", link: "/match/3", name: "5-Five Cricket" },
  { src: "/gamesImages/Thumbnail_0004_Andar-Bahar.png", link: "/match/4", name: "Andar Bahar" },
  { src: "/gamesImages/Thumbnail_0005_20-20-Drangon-Tiger.png", link: "/match/5", name: "20-20 Dragon Tiger" },
  { src: "/gamesImages/Thumbnail_0004_Andar-Bahar.png", link: "/match/4", name: "Andar Bahar" },
]


export const MainContent = () => {
  return (
    <div className="flex flex-col h-screen overflow-x-auto">
      <CardComponent />
      <GameCategories games={games6} />
      <Matches
        Img="/allLive.png"
        leftText="Hot Matches"
        rightText="View All"
        images={images}
      />
      <GameCategories games={games8} />
      <Matches
        Img="/allLive.png"
        leftText="Hot Matches"
        rightText="View All"
        images={images}
      />
      <Footer />
    </div>
  );
};
