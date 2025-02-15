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

export const MainContent = () => {
    return (
      <div className="flex flex-col h-screen overflow-x-auto">
        <CardComponent/>
        <GameCategories games={games6}/>
        <Matches Img="allLive.png" leftText="Hot Matches" rightText="Upcoming Events"/>
        <GameCategories games={games8}/>
        <Matches Img="cricket.png" leftText="Cricket" rightText="All Matches"/>
        <Matches Img="football.png" leftText="Football" rightText="All Matches"/>
        <Footer/>
      </div>
    );
};