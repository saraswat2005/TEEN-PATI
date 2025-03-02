import Link from "next/link";
import {
  User,
  Wallet,
  Gift,
  Trophy,
  Shield,
  Gamepad2,
  Dice5,
  Tv,
  Rocket,
  CircleDollarSign,
} from "lucide-react";
import Topbar from "../../components/Topbar";

function Menu() {
  return (
    <div className="h-screen flex flex-col bg-black">
      <Topbar menu={false} />
      <div className="flex-1 overflow-y-auto bg-black text-white space-y-8 pb-44">
        <div className="bg-gray-900 rounded-lg p-4 cursor-pointer space-y-4 m-4">
          <Link href="/profile">
            <div className="flex items-center border-b border-gray-800 p-2">
              <User className="text-yellow-400" />
              <div className="flex flex-col items-center space-x-2">
                <span className="font-semibold pl-1">Personal Account</span>
                <div className="text-sm text-gray-400 pl-2">
                  Account • 210936806
                </div>
              </div>
            </div>
          </Link>
          <Link href="/deposite">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center">
                <Wallet className="text-yellow-400" />
                <div className="flex flex-col items-center space-x-2">
                  <span className="font-semibold pl-1">0 INR</span>
                  <div className="text-sm text-gray-400 pl-2">Balance</div>
                </div>
              </div>
              <div>
                Deposite
                <span>  &gt;</span>
              </div>
            </div>
          </Link>
        </div>
        <hr className="w-full border-gray-800"/>

        {/* Promotions */}
        <Link href="/promotions">
          <div className="bg-gray-900 rounded-lg p-4 m-4 flex justify-between items-center cursor-pointer">
            <div className="flex items-center space-x-2">
              <Gift className="text-orange-400" />
              <span>Promotions</span>
            </div>
            <span>&gt;</span>
          </div>
        </Link>
        <hr className="w-full border-gray-800"/>

        {/* Sports Categories */}
        <div className="bg-gray-900 rounded-lg p-4 m-4">
          {[
            {
              name: "Top Parlays",
              icon: <Shield className="text-blue-400" />,
              link: "/top-parlays",
            },
            {
              name: "ICC Trophy",
              icon: <Trophy className="text-yellow-400" />,
              link: "/icc-trophy",
            },
            {
              name: "WPL",
              icon: <Shield className="text-purple-400" />,
              link: "/wpl",
            },
          ].map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="flex justify-between items-center py-4 border-b border-gray-800 cursor-pointer px-2">
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <span>&gt;</span>
              </div>
            </Link>
          ))}
        </div>
        <hr className="w-full border-gray-800"/>

        {/* Casino & Games Section */}
        <div className="bg-gray-900 rounded-lg p-4 m-4">
          {[
            {
              name: "Slots",
              icon: <Dice5 className="text-red-400" />,
              link: "/slots",
            },
            {
              name: "Live Casino",
              icon: <Tv className="text-blue-400" />,
              link: "/live-casino",
            },
            {
              name: "TV Games",
              icon: <Gamepad2 className="text-yellow-400" />,
              link: "/tvgames",
            },
            {
              name: "Instant Games",
              icon: <Rocket className="text-green-400" />,
              link: "/instant-games",
            },
            {
              name: "Bingo",
              icon: <CircleDollarSign className="text-purple-400" />,
              link: "/bingo",
            },
          ].map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="flex justify-between items-center py-4 border-b border-gray-800 cursor-pointer px-2">
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <span>&gt;</span>
              </div>
            </Link>
          ))}
        </div>
        <hr className="w-full border-gray-800"/>

        {/* JetX Section */}
        <Link href="/jetx">
          <div className="bg-gray-900 rounded-lg flex justify-between items-center cursor-pointer p-4 m-4">
            <div className="flex items-center space-x-2">
              <Rocket className="text-yellow-400" />
              <span>JetX</span>
            </div>
            <span>&gt;</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
