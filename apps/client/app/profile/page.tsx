import Link from "next/link";
import {
  Copy,
  Headphones,
  ShieldAlert,
  Wallet,
  Gift,
  User,
  CheckCircle,
  Clock,
  Ticket,
  Settings,
  Info,
  LogOut,
} from "lucide-react";
import Topbar from "../../components/Topbar";

function PersonalAccount() {
  return (
    <div className="relative max-w-lg mx-auto bg-white h-screen flex flex-col">
      {/* Fixed Topbar */}
      <Topbar menu={false} />

      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto p-4 pb-20">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b">
          <h2 className="text-lg font-semibold">Personal Account</h2>
          <Headphones className="text-gray-500" />
        </div>

        {/* Player ID */}
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-semibold">
              Player ID 210936806
            </span>
            <Copy className="text-gray-500 cursor-pointer" size={16} />
            <ShieldAlert className="text-red-500" size={16} />
          </div>
        </div>

        {/* Balance Section */}
        <div className="bg-gray-100 p-4 m-4 rounded-lg flex justify-between items-center">
          <div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Wallet />
              <span className="text-sm">Balance</span>
            </div>
            <div className="text-lg font-semibold">0 INR</div>
          </div>
          <div className="flex space-x-2">
            <Link href="/deposit">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                Deposit
              </button>
            </Link>
            <Link href="/withdraw">
              <button className="bg-gray-300 px-4 py-2 rounded-md">
                Withdraw
              </button>
            </Link>
          </div>
        </div>
        <hr className="w-full border-gray-800" />

        {/* Contact Support */}
        <Link href="/support">
          <div className="mt-4 p-4 mr-4 ml-4 mb-2 bg-gray-100 rounded-lg flex justify-between items-center cursor-pointer">
            <div className="flex items-center space-x-2 text-green-600">
              <Headphones />
              <span>Contact Support</span>
            </div>
            <span>&gt;</span>
          </div>
        </Link>

        <hr className="w-full border-gray-800" />

        {/* Menu Sections */}
        <div className="mt-4 bg-gray-100 p-4 m-4 rounded-lg">
          {[
            {
              name: "Special offers",
              icon: <Gift className="text-green-600" />,
              link: "/offers",
            },
            {
              name: "Personal data",
              icon: <User className="text-green-600" />,
              link: "/personal-data",
            },
            {
              name: "Account Verification",
              icon: <CheckCircle className="text-green-600" />,
              link: "/account-verification",
            },
            {
              name: "Payments history",
              icon: <Clock className="text-green-600" />,
              link: "/payments-history",
            },
            {
              name: "My bets",
              icon: <Ticket className="text-green-600" />,
              link: "/my-bets",
            },
          ].map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="flex justify-between items-center py-3 border-b border-gray-300 cursor-pointer">
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <span>&gt;</span>
              </div>
            </Link>
          ))}
        </div>
        <hr className="w-full border-gray-800" />

        {/* Personalization Section */}
        <div className="mt-4 p-4">
          <h3 className="text-lg font-semibold p-2">Personalization</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            {[
              {
                name: "Settings",
                icon: <Settings className="text-green-600" />,
                link: "/settings",
              },
              {
                name: "Help and Information",
                icon: <Info className="text-green-600" />,
                link: "/help-info",
              },
            ].map((item, index) => (
              <Link key={index} href={item.link}>
                <div className="flex justify-between items-center py-3 border-b border-gray-300 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  <span>&gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <hr className="w-full border-gray-800" />

        {/* Logout Button */}
        <div className="mt-4 p-4">
          <button className="w-full flex items-center justify-center bg-gray-100 text-black py-3 rounded-lg font-semibold  transition">
            <LogOut className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalAccount;
